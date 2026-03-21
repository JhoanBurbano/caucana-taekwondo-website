# Documentación Técnica - Academia Caucana de Taekwondo ITF

**Proyecto:** Sitio web oficial de la Academia Caucana de Taekwondo ITF (Popayán, Cauca)  
**Última actualización:** Marzo 2025

---

## 1. Resumen Ejecutivo

- **Stack:** React 18, TypeScript, Vite 6, Motion, Radix UI, Tailwind (vía PostCSS/globals), React Hook Form, Sonner.
- **Arquitectura:** SPA de una sola página, secciones lazy-loaded, assets centralizados por ID, diseño responsive.
- **Estado:** Producción; SEO, a11y, optimización de imágenes y notificaciones ya implementados según `docs/SUMMARY.md`.

---

## 2. Estructura del Proyecto

```
src/
├── components/
│   ├── features/     # FloatingPaymentButton (inscripciones/pago)
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Coaches, Pricing, Gallery, Sponsors
│   └── ui/           # button, dialog, input, label, select, radio-group, toaster
├── hooks/            # useIntersectionObserver, useScroll
├── lib/
│   ├── assets/       # API de imágenes: getImageUrl, getAssetAlt, getAssetMeta
│   ├── constants/    # theme (COLORS, FONTS, SPACING, ANIMATIONS)
│   ├── data/         # coaches, gallery, navigation, pricing, payment, sponsors
│   ├── types/        # Tipos compartidos
│   └── utils/        # notifications, formatters, validators
├── shared/           # ErrorBoundary, OptimizedImage, SectionTitle, SkeletonLoader
├── styles/           # globals.css
└── guidelines/       # Guidelines.md
```

- **Build:** `vite build` → salida en `build/`.
- **Alias:** `@/` → `src/`.

---

## 3. Stack y Dependencias

| Área        | Tecnología        | Uso principal                          |
|------------|-------------------|----------------------------------------|
| Core       | React 18, Vite 6  | UI y bundling                          |
| Lenguaje   | TypeScript 5.9    | Tipado y path mapping                  |
| Estilos    | Tailwind (globals)| Utilidades y diseño responsive         |
| Animación  | Motion            | Animaciones por vista/scroll           |
| Formularios| React Hook Form   | Validación y estado (FloatingPayment)  |
| Notificaciones | Sonner       | Toasts (notify.success/error)          |
| UI base    | Radix (Dialog, Label, Radio, Select, Slot) | Accesibilidad y composición   |
| Utilidades | clsx, cva, tailwind-merge | Clases condicionales y variantes |

---

## 4. Cómo se centran los assets (imágenes y contenido)

### 4.1 Centrado del **contenedor** (layout)

- **Hero:** La sección usa `flex items-center justify-center` para centrar el bloque de contenido (título, texto, botones) en pantalla. El contenedor de contenido usa `container mx-auto px-4` para centrado horizontal y padding.
- **Resto de secciones:** Contenedor estándar `container mx-auto px-4` (Tailwind): centra el contenido y limita ancho. En grids (About, Coaches, Gallery, Pricing, Sponsors) se usa `items-center` donde aplica para alinear verticalmente (ej. Sponsors: `grid ... items-center`).
- **Sponsors:** Cada ítem es `flex items-center justify-center` para centrar logo y texto dentro de cada celda.
- **Títulos de sección:** `SectionTitle` usa `text-center` y `mx-auto` para el subtítulo y la línea decorativa.
- **Pricing:** Grid de planes con `max-w-6xl mx-auto` para centrar el bloque de precios.

### 4.2 Centrado del **contenido de la imagen** (recorte)

- Todas las imágenes pasan por **`OptimizedImage`**, que aplica `object-fit: cover` por defecto (vía `props.style?.objectFit || 'cover'`). En CSS, `object-fit: cover` usa por defecto `object-position: center`, por lo que la imagen se **recorta manteniendo el centro visible** cuando el aspect ratio del contenedor no coincide con el de la imagen.
- Contenedores con aspecto fijo:
  - **Hero (silueta):** `absolute right-0 top-1/2 -translate-y-1/2` — centrado vertical con transform.
  - **About:** `aspect-[4/5]`; imagen `w-full h-full` + cover → centro de la imagen visible.
  - **Coaches:** `aspect-[3/4]`; misma lógica.
  - **Gallery:** `aspect-[4/3]`; misma lógica.
- **Fondo del Hero:** `backgroundPosition: 'center'` y `backgroundSize: 'cover'` centran el patrón de fondo.

**Resumen:** El centrado se logra con (1) flexbox/grid (`items-center`, `justify-center`) y `container mx-auto` para el layout, y (2) `object-fit: cover` (y por tanto `object-position: center` por defecto) para que las imágenes queden centradas al recortar.

---

## 5. Contenido de negocio (exposición y mensaje)

El sitio presenta a la **Academia Caucana de Taekwondo ITF** como escuela en Popayán con foco en formación integral (cuerpo + valores).

### 5.1 Propuesta de valor y mensaje principal

- **Hero:** “CONVIÉRTETE EN MÁS FUERTE” — Fortalecer mente y cuerpo con entrenamiento disciplinado de Taekwondo ITF. CTAs: “Inscríbete Hoy” y “Ver Galería”.
- **Academia (About):** “Nuestro Legado de Excelencia” — Formar “guerreros con valores inquebrantables”; no solo habilidades físicas sino carácter, disciplina y honor. +10 años de experiencia, campeones nacionales y principios ITF “más allá del tatami”. Valores destacados: Valor, Disciplina, Poder.
- **Instructores:** “Nuestros Maestros” — Guiados por expertos comprometidos con la excelencia y el desarrollo de cada guerrero. Cuatro perfiles (Maestro Carlos Rodríguez 6to Dan, Maestra Ana López 5to Dan, etc.) con roles en combate, formas, juveniles, defensa personal y empoderamiento.
- **Precios:** “Planes de Entrenamiento” — Mensual (120.000 COP), Trimestral (330.000 COP, destacado), Anual (1.200.000 COP), con beneficios crecientes (clases ilimitadas, asesoría, eventos, evaluación, seminarios, preparación exámenes).
- **Galería:** “Logros y Eventos” — Competencias, graduaciones, entrenamientos, seminarios, torneos, demostraciones.
- **Sponsors:** “Nuestros Aliados” — Sección de patrocinadores.
- **Footer:** “Forjando guerreros con honor y disciplina desde 2014”; contacto (email, teléfono, dirección Calle 5 #10-25, Popayán), redes (Facebook, Instagram, YouTube), newsletter.

### 5.2 Dónde está el copy

- **Texto en UI:** `HeroSection`, `AboutSection`, `CoachesSection`, `PricingSection`, `GallerySection`, `SponsorsSection`, `Footer`, `FloatingPaymentButton`.
- **Datos estructurados:** `src/lib/data/` — `coaches.ts`, `gallery.ts`, `pricing.ts`, `navigation.ts`, `sponsors.ts`; `index.html` (meta, JSON-LD con nombre, descripción, dirección, contacto, deporte, fecha fundación).

---

## 6. Flujo de la aplicación

1. **Entrada:** `index.html` carga `main.tsx` → monta `App` dentro de `ErrorBoundary`.
2. **Layout:** `Header` + `main` (secciones en orden) + `Footer` + `FloatingPaymentButton` + `Toaster`.
3. **Secciones:** Hero no lazy; About, Coaches, Pricing, Gallery, Sponsors y FloatingPaymentButton cargados con `React.lazy` y `Suspense` (fallback `SkeletonLoader` o `null`).
4. **Navegación:** Enlaces ancla (`#inicio`, `#academia`, `#instructores`, `#inscripciones`, `#galeria`, `#eventos`) y scroll suave desde botones.
5. **Imágenes:** Siempre vía `getImageUrl(id)` / `getAssetAlt(id)`; render con `OptimizedImage` (lazy cuando no `priority`).

---

## 7. Sistema de assets

- **IDs:** Definidos en `src/lib/assets/types.ts` (`LocalAssetId`, `ExternalImageId`). Locales en `src/assets/` (ej. `hero-pattern`); externos por URL en `constants.ts`.
- **API:** `getImageUrl(id)`, `getAssetAlt(id)`, `getAssetMeta(id)`. No usar URLs ni rutas crudas en componentes/datos.
- **Metadata:** `ASSET_META` en `constants.ts` (alt, crédito). Detalle en `docs/ASSETS.md`.

---

## 8. Mejoras recomendadas (post-implementación actual)

Basado en `MEJORAS.md` y revisión del código:

### 8.1 Prioridad alta

- **Tests:** Aún no hay tests; recomendable Vitest + React Testing Library para componentes críticos (formularios, OptimizedImage, secciones).
- **Validación Footer:** El formulario de newsletter no usa React Hook Form ni validadores de `lib/utils/validators`; unificar con el flujo de FloatingPaymentButton.
- **Variables de entorno:** Definir `.env.example` y usar `VITE_*` para URLs (API, PSE) cuando existan backend/pagos reales.

### 8.2 Prioridad media

- **object-position:** Si alguna imagen requiere foco distinto (ej. rostros), exponer `objectPosition` en `OptimizedImage` o por `style`.
- **Formatos modernos:** Valorar WebP/AVIF y `srcset`/`sizes` para imágenes externas (CDN o build).
- **Analytics y errores:** Integrar analytics (ej. GA) y error tracking (ej. Sentry) para producción.
- **PWA:** Service worker y manifest para uso offline y instalación.

### 8.3 Prioridad baja

- **i18n:** Si se planea otro idioma, centralizar textos y fechas/monedas.
- **Bundle:** Revisar `vite.config` (split de chunks, análisis de tamaño) para afinar code splitting.

---

## 9. Referencias rápidas

- **Scripts:** `npm run dev` | `npm run build` | `npm run preview` | `npm run type-check`
- **Documentación:** `docs/README.md`, `docs/ASSETS.md`, `docs/ARCHITECTURE_DECISIONS.md`, `docs/SUMMARY.md`
- **Guías:** `docs/guides/STYLE_GUIDE.md`, `docs/guides/BEST_PRACTICES.md`, `docs/guides/CONTRIBUTING.md`
