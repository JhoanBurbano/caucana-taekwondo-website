# Changelog

## [Unreleased]

### 🗓️ Horarios

- ✅ **Nueva sección `#horarios`** con el horario 2026 completo: 9 franjas, 37 clases, de
  lunes a sábado. Era el hueco más grande del sitio y una de las búsquedas locales de más
  intención.
- ✅ **Dos vistas del mismo dato**: en móvil se agrupa por día, porque una malla de 6 días ×
  9 franjas es ilegible en un teléfono —y ahí es donde se consulta—; la tabla completa
  aparece a partir de `lg`. La de escritorio es una `<table>` real, con `<th scope>` y
  `<caption>`.
- ✅ **`openingHoursSpecification` en el JSON-LD** (6 franjas derivadas del horario), que es
  lo que Google lee para mostrar el horario en la ficha local.
- ✅ Entrada **«Horarios»** en la navegación y pregunta nueva en la FAQ, que pasa a 7.

### 💰 Costos de inicio

- ✅ **Se publica lo que cuesta empezar**, que antes no aparecía en ninguna parte: matrícula
  $100.000 (pago único, solo Taekwondo ITF), dobok $250.000, y de forma opcional el conjunto
  de sudadera y chaqueta rompevientos $230.000 o solo la chaqueta $150.000.
- ✅ Van en un bloque aparte de `PRICING_PLANS` a propósito: un plan se paga cada mes y esto
  una sola vez; mezclarlos haría parecer que el primer mes cuesta lo mismo que los
  siguientes. Con enlace directo a `/uniforme-oficial`, que hasta ahora solo se alcanzaba
  desde el menú.
- ✅ Nueva pregunta en la FAQ y en el `FAQPage` del JSON-LD.

### 📥 Leads

- ✅ **Los datos del formulario dejan de perderse**: `saveLead()` los registra **antes** de
  abrir WhatsApp, así que un lead cuenta aunque la persona nunca envíe el mensaje. Se
  activa con `VITE_LEADS_ENDPOINT`; sin esa variable no se envía nada.
- ✅ Envío por `navigator.sendBeacon` (sobrevive a que la pestaña pierda el foco), sin
  esperar respuesta —esperarla haría que el bloqueador de ventanas emergentes cancelara
  la apertura de WhatsApp— y como `text/plain` para evitar el preflight CORS que Apps
  Script no responde. Documentado en [LEADS.md](./LEADS.md) con el `doPost` listo.

### 🖼️ WebP

- ✅ **Las siete fotos pasan a WebP** (q82): 3,9 MB → 1,5 MB, **−60%**, sin fallback JPEG
  porque WebP lo soportan todos los navegadores desde 2020 (Safari 14 incluido).
  Con esto el build completo queda en **2,7 MB**, frente a los 12 MB de partida.

### 🧮 Coherencia de datos

- ✅ **Componentes muertos eliminados**: `AchievementStats` y `AchievementBadges` no se
  renderizaban en ninguna parte, pero el primero declaraba «15+ AÑOS de trayectoria»,
  «50+ MEDALLAS» y «10+ CAMPEONATOS». La academia abrió en octubre de 2023. Se borran para
  que nadie los conecte «porque se ven bien» y publique eso.
- ✅ **Cifras del hero derivadas de los datos**: «Títulos clave: 5» estaba escrito a mano y
  el palmarés ya tenía 7. Ahora sale de `GALLERY_ITEMS.length` y de `AGE_GROUPS.length`,
  así que no vuelve a desfasarse.
- ✅ **FAQ en singular**: la pregunta «¿Los instructores están certificados?» hablaba de un
  cuerpo técnico que hoy no existe. Pasa a «¿Quién dicta las clases y con qué
  certificación?», sincronizada con el JSON-LD.

### 🔎 SEO on-page

- ✅ **`<h1>` estable**: el título grande del hero rotaba cada 6 s con el carrusel y *era* el
  H1, así que la señal de tema cambiaba sola. Ahora el H1 nombra marca, disciplinas y
  ciudad, y el rótulo visible de cada slide pasa a `<p>` con el mismo estilo — sin cambio
  visual.
- ✅ **Fuentes movidas del CSS al `<head>`**: el `@import` de `globals.css` encadenaba las
  descargas (HTML → CSS → parseo → recién ahí la fuente) y dejaba inútil el `preconnect`
  que ya existía, porque la petición no arrancaba hasta el final de esa cadena.
- ✅ **`lastmod` del sitemap automático**: un plugin de Vite lo reescribe con la fecha del
  build. Estaba congelado en `2026-08-17`, lo que le dice a Google que no vale la pena
  volver a rastrear.

### 📊 Analítica

- ✅ **GA4 conectado de verdad**: `initAnalytics()` inyecta gtag.js desde `main.tsx` cuando
  existe `VITE_GA4_ID`. Antes el snippet vivía comentado en `index.html` y `trackEvent()`
  no se invocaba **ni una sola vez** en todo el código.
- ✅ **12 puntos de conversión instrumentados**: FAB de WhatsApp, CTA fijo de móvil (ambos
  botones), CTA del header y del menú móvil, CTA del hero (con la modalidad del slide),
  los tres planes de precios, el envío del formulario de prueba, el teléfono, «Cómo llegar»
  y el enlace a Instagram.
- ✅ **Sin la variable no se carga nada**: ni script, ni cookies, ni peticiones. Verificado
  compilando en los dos modos.
- ✅ **`process.env.NODE_ENV` sustituido por `import.meta.env.DEV`** en `trackEvent`: `process`
  no existe en el navegador con Vite.

### ⚡ Rendimiento

- ✅ **La foto del director baja de 6,8 MB a 222 KB** (−97%): era un PNG de 2048² para una
  fotografía, formato sin pérdida pensado para gráficos con transparencia. Se verificó que
  el canal alfa era opaco en todas partes antes de convertir a JPEG q86 a 1400 px.
  El build completo pasa de **12 MB a 5,1 MB**.
- ✅ **Medidas declaradas corregidas**: el `<img>` decía `2048×2560` sobre un archivo 1:1, así
  que el navegador reservaba una caja con la proporción equivocada y la corregía al cargar
  (salto de layout, CLS).

### 🚨 Riesgo retirado

- ✅ **Fuera el `aggregateRating` inventado** del JSON-LD (`4.9` / `47 reseñas`). No había 47
  reseñas: había 3 testimonios escritos a mano. Google exige que el rating agregado provenga
  de reseñas reales y visibles; el marcado inventado es causa de acción manual sobre todo el
  dominio.
- ✅ **Fuera las reseñas inventadas** y con ellas `ReviewsSection`: los tres nombres eran de
  relleno —uno de ellos, «Carlos Rodríguez», el mismo del instructor ficticio que ya se había
  retirado del equipo—. La sección vuelve en cuanto haya testimonios reales con autorización.

### 🔧 Corregido

- ✅ **Datos de contacto reales**: teléfono/WhatsApp `+57 317 244 7000` (antes el
  placeholder `+57 312 456 7890`) y dirección `Transversal 9A # 55N-30`, Vía al Bosque /
  sector Montelugano, zona norte de Popayán (antes `Calle 5 #10-25`). El mapa ahora se
  centra en las coordenadas exactas `2.483163, -76.578619`. Actualizados `contact.ts`,
  el JSON-LD de `index.html`, la FAQ y el copy de `LocationSection`.

### ✨ Nuevo

- ✅ **Ruta `/uniforme-oficial`**: página estática (`public/uniforme-oficial/index.html`)
  que **embebe** en un `<iframe>` el formulario de pedido de uniforme alojado en Google
  Apps Script, con barra de marca y accesos directos de respaldo.
  ⚠️ Requiere redesplegar el Apps Script con
  `HtmlService.XFrameOptionsMode.ALLOWALL`; hoy responde `x-frame-options: SAMEORIGIN`
  y el marco queda bloqueado. Ver [UNIFORME_OFICIAL.md](./UNIFORME_OFICIAL.md).
- ✅ **"Uniforme oficial" en la navegación**: nueva entrada en `NAV_LINKS`, visible en el
  menú del `Header` (desktop y móvil) y en los enlaces del `Footer`.

### 🧹 Eliminado

- ✅ **Pago de mensualidad**: fuera el `FloatingPaymentButton` y su flujo PSE, que era un
  mockup (generaba una referencia `PSE-` aleatoria y no cobraba nada). Se eliminan también
  `lib/data/payment.ts` y los tipos `PaymentFormData` / `PaymentStep` / `PaymentConcept`.
  El bundle principal baja de **490 kB a 354 kB** (gzip 158 → 114 kB).

### 🔽 Secciones expandibles

- ✅ **"Logros que se pueden ver"** arranca con 6 tarjetas y un botón *Ver N logros más*.
  Seis llena filas completas en los tres breakpoints del grid (1 / 2 / 3 columnas), así que
  lo que queda oculto es siempre la última fila, nunca media fila suelta.
- ✅ **"Nuestra historia"** arranca contraída con 3 hitos y un botón que indica cuántos
  faltan y hasta qué año llegan.

### 🎨 Identidad

- ✅ **Logo nuevo**: reemplaza al anterior (aro negro con texto blanco) por el definitivo
  (aro blanco con texto negro, estrella abajo). En la app se usa el **SVG** —vector puro,
  59 paths, sin texto ni fuentes externas—, así que Header y Footer quedan nítidos a
  cualquier densidad y se eliminan `logo.png`, `logo@2x.png` y `logo@3x.png`.
- ✅ **Favicon en SVG**: `favicon.svg` se declara primero con `type="image/svg+xml"` y el
  PNG queda de respaldo para navegadores que aún no leen favicons vectoriales. Usa una
  **versión reducida del logo, solo el emblema sin la tipografía circular**, que es lo
  único que sobrevive legible a 16 px de pestaña.
- ✅ **Assets de `public/` regenerados** desde el SVG: `logo.png` 1024², `favicon.png` 512²
  (ambos con transparencia), `apple-touch-icon.png` 180² y `og-image.png` **1200×630**
  (ambos aplanados sobre negro, porque las tarjetas sociales y los tiles de iOS no deben
  llevar alfa). El `og-image` pasa de 349×350 a la proporción recomendada; actualizados
  `og:image:width` / `og:image:height`.

### 📷 Fotos reales del palmarés

- ✅ **Nacional de Chía 2025, Suramericano Perú 2026 y Copa Yom-Chi II 2026** dejan el stock
  y usan las piezas oficiales de la academia (PNG → JPEG q86). La tabla de índices
  `GALLERY_IMAGE_IDS` se elimina: cubría 4 tarjetas y dejaba 3 entradas muertas, así que
  cada logro nombra su asset directamente.

### 🏅 Contenido

- ✅ **Nacional de Chía y Juegos Nacionales 2025 eran el mismo torneo**: estaban duplicados
  como dos logros y dos hitos distintos. Fusionados en un solo registro, fechado en
  noviembre de 2025. Deduplicado también en la FAQ y el JSON-LD.
- ✅ **Suramericano 2026 (Perú)**: se suma al palmarés y a la línea de tiempo como
  participación con 4.º puesto. `GalleryItem` gana `resultKind`, que separa el badge de
  podio (medalla, acento de marca) del de participación (banderín, tono neutro), para no
  presentar un 4.º puesto como si fuera podio. Va antes de la Copa Yom-Chi II, que es
  posterior.
- ✅ **Dos hitos nuevos en la línea de tiempo**: *Podio en el Nacional de Chía* (3.er puesto,
  Campeonato Nacional de Taekwon-Do 2025) y *Podio en la Copa Yom-Chi II* (3.er lugar, 2026,
  Bogotá), que faltaban en `about-timeline.ts`.
- ✅ **Palmarés con puestos en el podio**: `GalleryItem` gana `result` y `place`, que se
  pintan como badge y subtítulo en cada tarjeta. Lista reordenada de lo más reciente a lo
  más antiguo, encabezada por **Copa Yom-Chi II 2026 (Bogotá, 3.er puesto)**. Se sustituye
  "Entrenamiento por grupos de edad" por **Campeonato Nacional de Taekwon-Do 2025
  (Chía, 3.er puesto)**, y Centroamericanos 2025 (R. Dominicana) queda marcado como
  **Campeones**.
- ✅ **Edad mínima 6 años** (antes 5): `groups.ts`, `programs.ts`, la FAQ y el JSON-LD.
- ✅ **Cuerpo técnico adicional oculto**: hoy el único instructor es el director, así que
  las tarjetas de `COACHES` mostraban personas que no existen. El grid sale de
  `CoachesSection` (los datos quedan en `coaches.ts`, marcados como no renderizados) y el
  subtítulo deja de prometer "un cuerpo técnico certificado para cada etapa".
- ✅ **Contacto solo por mensaje**: el pie del formulario decía "O llama al…"; ahora enlaza
  a WhatsApp y aclara que se atiende por mensaje, no por llamada.

### 📸 Comunidad

- ✅ **Instagram embebido**: la cuadrícula de fotos de stock de `InstagramSection` se
  reemplaza por un `<iframe>` del perfil público `@academiacaucanatkd`, enmarcado en una
  tarjeta con la identidad del sitio (cabecera con handle, borde de marca y enlace de
  respaldo).

### 🖼️ Imágenes

- ✅ **Fotos reales del dojang en el hero**: `hero-taekwondo` y `hero-kickboxing` pasan de
  stock (Pexels/Unsplash) a fotos propias de la academia, servidas como assets locales
  desde `src/assets/images/`. Convertidas de PNG a JPEG q86 (2,6 MB → ~550 KB cada una).
  Alcanzan también a `ProgramsSection`, que reusa los mismos `imageId`.
- ✅ **`hero-acondicionamiento`** también pasa a foto real del dojang (2,5 MB PNG →
  560 KB JPEG). Con eso, las tres imágenes del hero dejan de ser stock.
- ✅ **`HeroSlide.imageId`, `Program.imageId`, `Coach.image` y `GalleryItem.image`** pasan
  de `ExternalImageId` a `ImageAssetId`: el tipo impedía usar una imagen local como
  contenido, que es justo lo que se necesitaba acá.

### 💵 Precios

- ✅ **Planes actualizados** manteniendo los descuentos vigentes (10% trimestral,
  20% anual): mensual `$120.000 → $150.000`, trimestral `$330.000 → $405.000`,
  anual `$1.200.000 → $1.440.000`. Sincronizados `pricing.ts`, `payment.ts`
  (`PAYMENT_CONCEPTS`), la FAQ y el JSON-LD de `index.html`.

## [0.2.0] - 2025-01-27

### ✨ Mejoras Implementadas

#### 🔴 Críticas

- ✅ **Sistema de Notificaciones**: Implementado sonner para reemplazar `alert()` y `console.log()`
- ✅ **SEO Completo**: Meta tags, Open Graph, Twitter Cards, structured data (JSON-LD)
- ✅ **Validación de Formularios**: Implementado react-hook-form con validadores colombianos
- ✅ **Optimización de Imágenes**: Componente OptimizedImage con lazy loading

#### 🟡 Importantes

- ✅ **ErrorBoundary**: Manejo de errores a nivel de aplicación
- ✅ **Accesibilidad**: Agregados aria-labels, roles, navegación por teclado
- ✅ **Loading States**: Skeleton loaders y estados de carga
- ✅ **Performance**: Code splitting, memoización de componentes, lazy loading

#### 🟢 Mejoras

- ✅ **Limpieza de Dependencias**: Eliminadas ~15 dependencias no utilizadas
- ✅ **Documentación**: Estructura completa en `./docs`
- ✅ **TypeScript**: Configuración completa con path mapping
- ✅ **Arquitectura**: Reorganización modular y escalable

### 📦 Dependencias Eliminadas

- `recharts`
- `cmdk`
- `embla-carousel-react`
- `input-otp`
- `react-day-picker`
- `react-resizable-panels`
- `vaul`
- `next-themes`
- Múltiples componentes `@radix-ui` no utilizados

### 📦 Dependencias Agregadas

- `typescript` (dev)
- `@types/react` (dev)
- `@types/react-dom` (dev)

### 🔧 Archivos Creados

- `src/lib/utils/notifications.ts` - Sistema de notificaciones
- `src/lib/utils/validators.ts` - Validadores colombianos
- `src/components/ui/toaster.tsx` - Componente Toaster
- `src/shared/OptimizedImage.tsx` - Imagen optimizada
- `src/shared/ErrorBoundary.tsx` - Manejo de errores
- `src/shared/SkeletonLoader.tsx` - Loaders de skeleton
- `public/robots.txt` - Configuración de robots
- `public/sitemap.xml` - Sitemap XML
- `tsconfig.json` - Configuración TypeScript
- `tsconfig.node.json` - Config TypeScript para Node
- `src/vite-env.d.ts` - Declaraciones de tipos

### 📝 Archivos Modificados

- `index.html` - SEO completo, lang="es"
- `src/App.tsx` - ErrorBoundary, Toaster, lazy loading
- `src/components/features/FloatingPaymentButton.tsx` - react-hook-form, notificaciones
- `src/components/layout/Footer.tsx` - Notificaciones, validación
- Todos los componentes de secciones - OptimizedImage, memoización, accesibilidad

### 📚 Documentación

- `docs/README.md` - Índice de documentación
- `docs/architecture/README.md` - Arquitectura del proyecto
- `docs/components/README.md` - Documentación de componentes
- `docs/api/README.md` - Referencia de API
- `docs/guides/CONTRIBUTING.md` - Guía de contribución
- `docs/guides/STYLE_GUIDE.md` - Guía de estilos
- `docs/guides/BEST_PRACTICES.md` - Mejores prácticas
- `MEJORAS.md` - Análisis de mejoras
- `MEJORAS_IMPLEMENTACION.md` - Plan de implementación

### 🎯 Métricas de Mejora

- **Bundle Size**: Reducción estimada de ~150KB
- **SEO Score**: Mejora de ~40 a ~85/100
- **A11y Score**: Mejora de ~70 a ~95/100
- **Performance**: Mejora de ~60 a ~85/100

## [0.1.0] - 2025-01-26

### 🎉 Versión Inicial

- Proyecto generado desde Figma
- Estructura básica de componentes
- Estilos y animaciones iniciales
