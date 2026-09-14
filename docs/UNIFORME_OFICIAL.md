# Ruta `/uniforme-oficial`

Ruta pública que muestra el **formulario oficial de pedido de uniforme (dobok)** de la
Academia Caucana de Taekwon-Do ITF, embebido en un `<iframe>`.

- **URL del sitio:** `https://academiacaucana.com/uniforme-oficial/`
- **Formulario:** Google Apps Script Web App
  `https://script.google.com/macros/s/AKfycbyKVTPBO36vJl6f2q7wGM5aoRMYlX3pHFMcU4XqN6i4zdScFeFfmCpANP6Hileq3J2qdQ/exec`
- **Archivo:** [`public/uniforme-oficial/index.html`](../public/uniforme-oficial/index.html)
- **Enlace:** entrada "Uniforme oficial" en `NAV_LINKS`
  ([`src/lib/data/navigation.ts`](../src/lib/data/navigation.ts)), que alimenta el menú
  del `Header` (desktop y móvil) y la lista de enlaces del `Footer`.

## ⚠️ Requisito: el Apps Script debe permitir el embebido

**A día de hoy el endpoint responde:**

```
x-frame-options: SAMEORIGIN
```

Con esa cabecera el navegador **bloquea** el render dentro de un `<iframe>` servido desde
otro origen, así que el marco se verá vacío o con un error del navegador.

Para que el iframe funcione hay que **volver a desplegar el Apps Script** devolviendo el
HTML con `ALLOWALL`:

```js
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

Comprobación rápida desde la terminal — no debe aparecer ninguna línea `x-frame-options`:

```bash
curl -sIL "https://script.google.com/macros/s/<ID>/exec" | grep -i x-frame-options
```

Mientras eso no se haga, la página sigue siendo usable gracias a los dos accesos
directos al formulario descritos abajo.

## Estructura de la página

1. **Barra superior** con la identidad del sitio (logo, negro `#000`, acento `#FF3B30`,
   Bebas Neue + Inter): enlace *← Volver al sitio* y botón *Abrir aparte*, que abre el
   formulario en una pestaña nueva.
2. **`<iframe>` a pantalla completa** con el formulario (`flex: 1`, ocupa todo el alto
   disponible).
3. **Aviso de respaldo** fijo al pie: *"¿El formulario no se ve? Ábrelo en una pestaña
   nueva"*.

El aviso se muestra **siempre**, no solo al fallar. Desde el navegador no hay forma
fiable de detectar si un iframe cross-origin se pintó o quedó bloqueado por
`X-Frame-Options`: el evento `load` también dispara sobre la página de error y el
contenido no es inspeccionable por la política de mismo origen. Un temporizador que
adivine sería peor que un aviso honesto y discreto.

## Por qué es una página estática y no una ruta de React

El sitio es una SPA de una sola página: no usa router y `App.tsx` renderiza siempre la
landing. Añadir un router para una sola ruta obligaría además a configurar rewrites de
SPA en el hosting (hoy no hay `vercel.json` ni `netlify.toml` en el repo), y un *refresh*
directo sobre `/uniforme-oficial` devolvería 404 si esos rewrites faltan.

Vite copia todo `public/` tal cual a `build/`, así que `public/uniforme-oficial/index.html`
se publica como `build/uniforme-oficial/index.html` y cualquier hosting estático
(Vercel, Netlify, GitHub Pages, S3/CloudFront, Nginx) lo sirve con un 200 real en
`/uniforme-oficial/` sin configuración adicional.

> **Cuidado con los rewrites catch-all.** Si más adelante se añade un rewrite de SPA del
> tipo `/* → /index.html` **sin** prioridad de sistema de archivos, ese rewrite tapa el
> archivo y `/uniforme-oficial/` devolvería la landing. Vercel y Netlify dan prioridad a
> los archivos existentes por defecto; `serve -s` (modo single) **no**, por eso en local
> hay que verificar con `npx serve build` (sin `-s`).

La página va marcada `robots: noindex, follow` porque el contenido real vive en el
dominio de Google.

## Mantenimiento

La URL del Apps Script aparece **tres veces** en `public/uniforme-oficial/index.html`:
el `src` del `<iframe>`, el botón *Abrir aparte* y el enlace del aviso de respaldo. Al
rotar el deployment del script hay que actualizarlas todas:

```bash
sed -i '' 's|AKfycby<ID_ACTUAL>|AKfycby<ID_NUEVO>|g' public/uniforme-oficial/index.html
```

> Ojo: cada *nuevo deployment* de Apps Script genera un ID distinto. Para que la URL no
> cambie, en el editor de Apps Script usa **Implementar → Gestionar implementaciones →
> Editar → Versión: nueva**, en lugar de crear una implementación nueva.
