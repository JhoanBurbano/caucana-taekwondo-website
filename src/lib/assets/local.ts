/**
 * Assets locales (archivos en src/assets).
 * Cada import es resuelto por Vite y devuelve la URL pública del asset.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Figma export alias
// @ts-ignore - figma:asset resolved by Vite alias
import heroPattern from 'figma:asset/7d88a0ddc9fa339c7172cbd46a9c8d728aead3c2.png';

export const LOCAL_IMAGE_URLS = {
  'hero-pattern': heroPattern as string,
} as const;
