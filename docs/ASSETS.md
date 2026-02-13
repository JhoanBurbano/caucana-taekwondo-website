# Control de Assets e Imágenes

Este documento describe el sistema centralizado de assets del proyecto: ubicación, convenciones y cómo añadir o modificar imágenes.

## Ubicación

| Tipo | Ubicación | Uso |
|------|-----------|-----|
| **Imágenes locales** | `src/assets/` | PNG, JPG, SVG que se importan (p. ej. patrones, logos) |
| **Definición de URLs** | `src/lib/assets/` | Constantes, tipos y helpers para todas las imágenes |
| **Metadata (alt, créditos)** | `src/lib/assets/constants.ts` → `ASSET_META` | Textos para accesibilidad y SEO |

## Estructura del módulo `src/lib/assets/`

```
src/lib/assets/
├── types.ts      # LocalAssetId, ExternalImageId, ImageAssetId, AssetMeta
├── constants.ts  # EXTERNAL_IMAGES (URLs), ASSET_META (alt, credit)
├── local.ts      # Imports de assets en src/assets (resueltos por Vite)
└── index.ts      # API pública: getImageUrl, getAssetAlt, getAssetMeta
```

## Uso en código

**No** uses URLs ni rutas de imagen directamente en componentes o datos. Usa siempre el módulo de assets:

```tsx
import { getImageUrl, getAssetAlt } from '@/lib/assets';

// En un componente
<OptimizedImage
  src={getImageUrl('coach-1')}
  alt={getAssetAlt('coach-1')}
/>
```

**Datos (coaches, galería)**: los tipos usan `ExternalImageId`; cada ítem referencia un ID (ej. `'coach-1'`, `'gallery-training'`). La URL se resuelve en el componente con `getImageUrl(id)`.

## IDs disponibles

### Locales (`LocalAssetId`)

- `hero-pattern` — Patrón diagonal del hero (asset desde Figma)

### Externos (`ExternalImageId`)

- `hero-fighter` — Silueta luchador (hero)
- `about-training` — Imagen sección “Academia”
- `coach-1` … `coach-4` — Fotos instructores
- `gallery-competition-1`, `gallery-competition-2` — Galería competencias
- `gallery-graduation` — Galería graduaciones
- `gallery-training` — Galería entrenamientos
- `gallery-event-1`, `gallery-event-2` — Galería eventos

Los IDs exactos están definidos en `src/lib/assets/types.ts`.

## Añadir una nueva imagen

### 1. Imagen externa (URL)

1. En `src/lib/assets/types.ts`, añade un nuevo literal a `ExternalImageId` (ej. `'new-feature'`).
2. En `src/lib/assets/constants.ts`:
   - Añade la URL en `EXTERNAL_IMAGES`.
   - Añade entrada en `ASSET_META` con `alt` (y opcionalmente `credit`).
3. Usa en datos o componentes con `getImageUrl('new-feature')` y `getAssetAlt('new-feature')`.

### 2. Imagen local (archivo en `src/assets/`)

1. Coloca el archivo en `src/assets/` (ej. `mi-imagen.png`).
2. En `src/lib/assets/types.ts`, añade un nuevo literal a `LocalAssetId` (ej. `'mi-imagen'`).
3. En `src/lib/assets/local.ts`:
   - Añade el import: `import miImagen from '@/assets/mi-imagen.png';`
   - Añade la entrada en `LOCAL_IMAGE_URLS`: `'mi-imagen': miImagen as string`.
4. Si Vite usa un alias (ej. `figma:asset/...`), mantén ese import en `local.ts` y el alias en `vite.config.ts`.
5. Opcional: en `constants.ts`, añade metadata en `ASSET_META` para `'mi-imagen'`.

## Convenciones de nombres

- **IDs**: `kebab-case`, descriptivos (ej. `hero-pattern`, `coach-1`, `gallery-event-1`).
- **Archivos en `src/assets/`**: preferible nombres descriptivos; si vienen de Figma, se puede mantener el hash y referenciarlos solo por ID en código.
- **Alt**: breve, descriptivo, en español; sin empezar por “Imagen de” salvo que aporte.

## Referencias rápidas

- **Obtener URL**: `getImageUrl(id: ImageAssetId): string`
- **Obtener alt**: `getAssetAlt(id: ImageAssetId): string`
- **Metadata completa**: `getAssetMeta(id: ImageAssetId)`
- **Tipos**: `ImageAssetId`, `LocalAssetId`, `ExternalImageId` en `@/lib/assets`
