# Ruta `/uniforme-oficial`

Ruta pública que lleva al **formulario oficial de pedido de uniforme (dobok)** de la
Academia Caucana de Taekwon-Do ITF.

- **URL del sitio:** `https://academiacaucana.com/uniforme-oficial/`
- **Destino:** Google Apps Script Web App
  `https://script.google.com/macros/s/AKfycbyKVTPBO36vJl6f2q7wGM5aoRMYlX3pHFMcU4XqN6i4zdScFeFfmCpANP6Hileq3J2qdQ/exec`
  (título del formulario: *Pedido Uniforme Oficial | Academia Caucana de Taekwon-Do ITF*)
- **Archivo:** [`public/uniforme-oficial/index.html`](../public/uniforme-oficial/index.html)

## Por qué es una página estática y no una ruta de React

El sitio es una SPA de una sola página: no usa router y `App.tsx` renderiza siempre la
landing. Añadir un router para una sola ruta implicaría además configurar rewrites de
SPA en el hosting (hoy no hay `vercel.json` ni `netlify.toml` en el repo), y un
*refresh* directo sobre `/uniforme-oficial` devolvería 404 si esos rewrites faltan.

Vite copia todo `public/` tal cual a `build/`, así que `public/uniforme-oficial/index.html`
se publica como `build/uniforme-oficial/index.html` y cualquier hosting estático
(Vercel, Netlify, GitHub Pages, S3/CloudFront, Nginx) lo sirve con un 200 real en
`/uniforme-oficial/` sin configuración adicional.

> **Cuidado con los rewrites catch-all.** Si más adelante se añade un rewrite de SPA del
> tipo `/* → /index.html` **sin** prioridad de sistema de archivos, ese rewrite tapa el
> archivo y `/uniforme-oficial/` devolvería la landing. Vercel y Netlify dan prioridad a
> los archivos existentes por defecto; `serve -s` (modo single) **no**, por eso en local
> hay que verificar con `npx serve build` (sin `-s`).

## Por qué redirige y no embebe el formulario en un `<iframe>`

El endpoint `/exec` de Apps Script responde con:

```
x-frame-options: SAMEORIGIN
```

Con esa cabecera el navegador **bloquea** el renderizado dentro de un `<iframe>` servido
desde otro origen, así que embeberlo mostraría un marco vacío.

Para poder embeberlo habría que volver a desplegar el Apps Script devolviendo el HTML con:

```js
return HtmlService.createHtmlOutputFromFile('index')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
```

Si eso llega a hacerse, esta página puede reemplazarse por un `<iframe>` a pantalla
completa manteniendo la misma ruta.

## Comportamiento de la página

1. Se pinta una tarjeta con la identidad del sitio (negro `#000`, acento `#FF3B30`,
   Bebas Neue + Inter, logo de la academia).
2. Con JS: `window.location.replace(...)` redirige de inmediato. Se usa `replace` y no
   `assign` para **no** dejar la página en el historial, de modo que el botón "atrás"
   del navegador no reenvíe al formulario en bucle.
3. Sin JS: un `<meta http-equiv="refresh">` dentro de `<noscript>` hace la misma
   redirección.
4. Si ambas fallan (bloqueador, conexión lenta), queda visible el botón **"Abrir
   formulario"** y un enlace de vuelta a la home.

La página lleva `robots: noindex, follow` porque el contenido real vive en el dominio de
Google; indexar el interstitial no aporta nada y podría leerse como contenido duplicado
o *thin content*.

## Mantenimiento

La URL del Apps Script aparece **dos veces** en
`public/uniforme-oficial/index.html`: en el `<meta refresh>` del `<noscript>` y en el
`href` del botón. Al rotar el deployment del script hay que actualizar ambas:

```bash
sed -i '' 's|AKfycby<ID_ACTUAL>|AKfycby<ID_NUEVO>|g' public/uniforme-oficial/index.html
```

> Ojo: cada *nuevo deployment* de Apps Script genera un ID distinto. Para que la URL no
> cambie, en el editor de Apps Script usa **Implementar → Gestionar implementaciones →
> Editar → Versión: nueva**, en lugar de crear una implementación nueva.

## Pendiente / opcional

La ruta todavía no está enlazada desde la navegación del sitio. Si se quiere que sea
alcanzable sin escribir la URL, basta con añadir una entrada a `NAV_LINKS`
(`src/lib/data/navigation.ts`) o un enlace en el footer:

```ts
{ name: 'Uniforme', href: '/uniforme-oficial/' }
```

Nota: `NAV_LINKS` se usa hoy para anclas `#seccion` con scroll suave; un `href` absoluto
requiere revisar el manejador de click del `Header`.
