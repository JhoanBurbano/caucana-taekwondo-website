/**
 * Módulo central de assets.
 * Única entrada para obtener URLs de imágenes y metadata.
 *
 * Uso:
 *   import { getImageUrl, getAssetMeta } from '@/lib/assets'
 *   const src = getImageUrl('coach-1')
 *   const meta = getAssetMeta('coach-1')
 */

import type { ImageAssetId } from './types'
import { LOCAL_IMAGE_URLS } from './local'
import { EXTERNAL_IMAGES, ASSET_META } from './constants'

/** Obtiene la URL de una imagen por ID. Locales desde local.ts, externas desde constants. */
export function getImageUrl(id: ImageAssetId): string {
  if (id in LOCAL_IMAGE_URLS) {
    return LOCAL_IMAGE_URLS[id as keyof typeof LOCAL_IMAGE_URLS]
  }
  return (EXTERNAL_IMAGES as Record<string, string>)[id] ?? ''
}

/** Obtiene metadata (alt, credit) de un asset. */
export function getAssetMeta(id: ImageAssetId) {
  return ASSET_META[id]
}

/** Obtiene el texto alt para un asset. */
export function getAssetAlt(id: ImageAssetId): string {
  return ASSET_META[id]?.alt ?? ''
}

export { LOCAL_IMAGE_URLS } from './local'
export { EXTERNAL_IMAGES, ASSET_META } from './constants'
export type { ImageAssetId, LocalAssetId, ExternalImageId, AssetMeta, AssetMetaMap } from './types'
