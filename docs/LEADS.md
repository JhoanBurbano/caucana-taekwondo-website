# Registro de leads de la clase de prueba

El formulario de `TrialSection` abre WhatsApp con el mensaje ya escrito. El problema es
que **si la persona no pulsa enviar, el dato se pierde**: se arrepiente, se le cierra la
pestaña o no tiene WhatsApp Web, y la academia ni siquiera se entera de que alguien llenó
el formulario.

`saveLead()` ([`src/lib/utils/leads.ts`](../src/lib/utils/leads.ts)) lo registra **antes**
de abrir WhatsApp.

## Activación

```bash
# .env.local, o la variable equivalente en el hosting
VITE_LEADS_ENDPOINT=https://script.google.com/macros/s/<ID>/exec
```

Sin esa variable no se envía nada y el formulario funciona igual que antes. En desarrollo,
el lead se imprime en consola en lugar de enviarse.

## El Apps Script que lo recibe

Crea una hoja de cálculo nueva, entra en **Extensiones → Apps Script** y pega esto:

```js
const HOJA = 'Leads';

function doPost(e) {
  const lead = JSON.parse(e.postData.contents);
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(HOJA)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(HOJA);

  if (hoja.getLastRow() === 0) {
    hoja.appendRow(['Fecha', 'Nombre', 'Teléfono', 'Grupo', 'Programa', 'Origen', 'Página']);
  }

  hoja.appendRow([
    new Date(lead.submittedAt),
    lead.name,
    "'" + lead.phone,   // apóstrofo: evita que la hoja se coma el cero inicial
    lead.group,
    lead.program,
    lead.source,
    lead.page,
  ]);

  return ContentService.createTextOutput('ok');
}
```

Despliega con **Implementar → Nueva implementación → Aplicación web**:

| Campo | Valor |
|---|---|
| Ejecutar como | **Yo** |
| Quién tiene acceso | **Cualquier usuario** |

«Cualquier usuario» es obligatorio: el visitante del sitio no tiene sesión de Google, y
con cualquier otra opción la petición se rechaza.

Copia el `/exec` que te da y ponlo en `VITE_LEADS_ENDPOINT`.

> Al rotar el deployment, usa **Gestionar implementaciones → Editar → Versión: nueva** para
> que la URL no cambie. Una implementación nueva genera otro ID.

## Por qué el envío es como es

**No se espera la respuesta.** `saveLead()` devuelve de inmediato. Quien llama necesita
abrir WhatsApp dentro del mismo gesto del usuario; si se hiciera `await` de una petición de
red antes, el navegador ya no consideraría la apertura como consecuencia directa del clic y
**el bloqueador de ventanas emergentes la cancelaría**. Registrar el lead no puede costar
la conversión que queríamos medir.

**Va como `text/plain`.** Eso convierte la petición en *simple* y evita el preflight
`OPTIONS` de CORS, que los web apps de Apps Script no responden. El cuerpo sigue siendo
JSON; solo cambia la cabecera declarada.

**Usa `navigator.sendBeacon`.** Está hecho exactamente para este caso: sobrevive a que la
pestaña pierda el foco al abrirse WhatsApp, cosa que un `fetch` normal no garantiza. Si el
navegador lo rechaza por cuota, cae a `fetch` con `keepalive: true`.

## Qué llega a la hoja

```json
{
  "name": "María Pérez",
  "phone": "3001234567",
  "group": "Niños",
  "program": "Taekwondo ITF",
  "source": "web_clase_prueba",
  "submittedAt": "2026-09-16T14:32:00.000Z",
  "page": "https://academiacaucana.com/"
}
```

## Aviso de privacidad

Esto pasa a guardar datos personales de terceros —nombre y teléfono, y de menores cuando
inscribe un padre—, así que entra en el alcance de la Ley 1581 de 2012. Antes de activarlo
conviene añadir bajo el botón del formulario una línea de autorización de tratamiento de
datos que diga quién guarda los datos, para qué y cómo pedir su eliminación.
