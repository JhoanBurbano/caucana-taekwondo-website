/**
 * Tipos para el sistema centralizado de assets.
 * Garantiza tipado estricto para todas las imágenes y recursos.
 */

/** Identificadores de imágenes locales (en /src/assets) */
export type LocalAssetId =
  | 'hero-pattern'
  | 'hero-taekwondo'
  | 'logo-academia-caucana'
  | 'hero-kickboxing'
  | 'hero-acondicionamiento'
  | 'director-academia'
  | 'sponsor-itf-internacional'
  | 'sponsor-actd-colombia'
  | 'sponsor-mightyfist'
/** Identificadores de imágenes externas (URLs) usadas en la app */
export type ExternalImageId =
  | 'hero-fighter'
  | 'hero-taekwondo'
  | 'hero-kickboxing'
  | 'hero-acondicionamiento'
  | 'about-training'
  | 'coach-1'
  | 'coach-2'
  | 'coach-3'
  | 'coach-4'
  | 'gallery-competition-1'
  | 'gallery-competition-2'
  | 'gallery-graduation'
  | 'gallery-training'
  | 'gallery-event-1'
  | 'gallery-event-2'
  | 'logo-academia-caucana'

/** Union de todos los IDs de imagen */
export type ImageAssetId = LocalAssetId | ExternalImageId

/** Metadata opcional para un asset (alt, créditos, etc.) */
export interface AssetMeta {
  alt: string
  credit?: string
  width?: number
  height?: number
}

/** Mapa de metadata por asset ID (para accesibilidad y documentación) */
export type AssetMetaMap = Partial<Record<ImageAssetId, AssetMeta>>
