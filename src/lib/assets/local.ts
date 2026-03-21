/**
 * Assets locales (archivos en src/assets/images | videos | icons).
 * Nombrado por sección: hero-*, about-*, coaches-*, gallery-*, etc.
 */

import heroPattern from '@/assets/images/hero-pattern.png';
import logoAcademiaCaucana from '@/assets/images/logo.png';
import heroTaekwondo from '@/assets/images/hero-taekwondo.png';
import directorAcademia from '@/assets/images/director-academia.png';

export const LOCAL_IMAGE_URLS = {
  'hero-pattern': heroPattern as string,
  'hero-taekwondo': heroTaekwondo as string,
  'logo-academia-caucana': logoAcademiaCaucana as string,
  'director-academia': directorAcademia as string,
} as const;
