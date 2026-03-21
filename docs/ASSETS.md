# Control de Assets e Imágenes

Este documento describe el sistema centralizado de assets: ubicación por tipo (images, videos, icons), nombres por sección y cómo añadir o modificar recursos.

## Ubicación

| Tipo | Ubicación | Uso |
|------|-----------|-----|
| **Imágenes** | `src/assets/images/` | PNG, JPG, WebP por sección (hero, about, coaches, gallery, etc.) |
| **Vídeos** | `src/assets/videos/` | MP4, WebM (hero, about, etc.) |
| **Iconos** | `src/assets/icons/` | SVG, PNG para logo, favicon, UI |
| **Definición y API** | `src/lib/assets/` | Tipos, constantes (URLs externas), `local.ts` (imports locales), `getImageUrl` / `getAssetAlt` |
| **Metadata (alt, créditos)** | `src/lib/assets/constants.ts` → `ASSET_META` | Accesibilidad y SEO |

## Estructura de carpetas de assets

```
src/assets/
├── images/     # Imágenes por sección (ver convención abajo)
│   └── hero-pattern.png
├── videos/     # Vídeos (ej. hero-background.mp4)
├── icons/      # Logo, favicon, iconos de UI
└── README.md   # Convención de nombres por sección
```

## Convención de nombres por sección

Los archivos se nombran con el **prefijo de la sección** para mantener orden y referencia clara:

| Prefijo | Sección | Ejemplos |
|---------|---------|----------|
| `hero-` | Hero | hero-pattern.png, hero-fighter.jpg |
| `about-` | Academia | about-training.jpg |
| `coaches-` | Instructores | coaches-01.jpg, coaches-02.jpg |
| `gallery-` | Galería | gallery-competition-1.jpg, gallery-event-1.jpg |
| `pricing-` | Inscripciones | (ilustraciones si se añaden) |
| `sponsors-` | Aliados | sponsors-logo-1.svg |
| `icons-` | Global / UI | icons-logo.svg, icons-favicon.png |

El **ID en código** (LocalAssetId / ExternalImageId) debe coincidir con el nombre del archivo **sin extensión** para assets locales (ej. `hero-pattern` → `hero-pattern.png`).

## Estructura del módulo `src/lib/assets/`

```
src/lib/assets/
├── types.ts      # LocalAssetId, ExternalImageId, ImageAssetId, AssetMeta
├── constants.ts  # EXTERNAL_IMAGES (URLs), ASSET_META (alt, credit)
├── local.ts      # Imports desde src/assets/images | videos | icons
└── index.ts      # API: getImageUrl, getAssetAlt, getAssetMeta
```

## Uso en código

**No** uses URLs ni rutas de imagen directamente en componentes o datos. Usa siempre el módulo de assets:

```tsx
import { getImageUrl, getAssetAlt } from '@/lib/assets';

<OptimizedImage
  src={getImageUrl('coach-1')}
  alt={getAssetAlt('coach-1')}
/>
```

Los datos (coaches, galería) referencian IDs; la URL se resuelve con `getImageUrl(id)`.

## IDs disponibles

### Locales (`LocalAssetId`)

- `hero-pattern` — Patrón del hero → `src/assets/images/hero-pattern.png`

### Externos (`ExternalImageId`)

- `hero-fighter` — Silueta luchador (hero)
- `about-training` — Imagen sección “Academia”
- `coach-1` … `coach-4` — Fotos instructores
- `gallery-competition-1`, `gallery-competition-2` — Galería competencias
- `gallery-graduation` — Galería graduaciones
- `gallery-training` — Galería entrenamientos
- `gallery-event-1`, `gallery-event-2` — Galería eventos

IDs exactos en `src/lib/assets/types.ts`.

## Añadir una nueva imagen

### 1. Imagen externa (URL)

1. En `src/lib/assets/types.ts`, añade un literal a `ExternalImageId`.
2. En `src/lib/assets/constants.ts`: entrada en `EXTERNAL_IMAGES` y en `ASSET_META` (alt, credit).
3. Usa `getImageUrl('id')` y `getAssetAlt('id')`.

### 2. Imagen local (archivo en `src/assets/images/`)

1. Coloca el archivo en la carpeta adecuada con nombre por sección (ej. `src/assets/images/about-training.jpg`).
2. En `src/lib/assets/types.ts`, añade el literal a `LocalAssetId` (ej. `'about-training'`).
3. En `src/lib/assets/local.ts`:
   - Añade: `import aboutTraining from '@/assets/images/about-training.jpg';`
   - Añade en `LOCAL_IMAGE_URLS`: `'about-training': aboutTraining as string`.
4. Opcional: en `constants.ts`, añade `ASSET_META['about-training']` con `alt` (y `credit` si aplica).

### 3. Vídeo o icono

- **Vídeos:** colocar en `src/assets/videos/` con nombre por sección (ej. `hero-background.mp4`). Importar en el componente que lo use o, si se centraliza, añadir en `local.ts` un mapa similar a `LOCAL_IMAGE_URLS` (y tipos si se desea).
- **Iconos:** colocar en `src/assets/icons/` (ej. `icons-logo.svg`). Importar donde se usen o vía `local.ts` si se quiere una API única.

## Convenciones de nombres

- **IDs:** `kebab-case`, por sección (ej. `hero-pattern`, `coach-1`, `gallery-event-1`).
- **Archivos:** mismo nombre que el ID + extensión; prefijo de sección.
- **Alt:** breve, descriptivo, en español; sin “Imagen de” salvo que aporte.

## Referencias rápidas

- **URL:** `getImageUrl(id: ImageAssetId): string`
- **Alt:** `getAssetAlt(id: ImageAssetId): string`
- **Metadata:** `getAssetMeta(id: ImageAssetId)`
- **Tipos:** `ImageAssetId`, `LocalAssetId`, `ExternalImageId` en `@/lib/assets`
