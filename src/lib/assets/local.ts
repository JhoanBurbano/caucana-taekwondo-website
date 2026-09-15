/**
 * Assets locales (archivos en src/assets/images | videos | icons).
 * Nombrado por sección: hero-*, about-*, coaches-*, gallery-*, etc.
 */

import heroPattern from '@/assets/images/hero-pattern.png';
import heroTaekwondo from '@/assets/images/hero-taekwondo.jpg';
import heroKickboxing from '@/assets/images/hero-kickboxing.jpg';
import heroAcondicionamiento from '@/assets/images/hero-acondicionamiento.jpg';
import galleryNacionalChia from '@/assets/images/gallery-nacional-chia.jpg';
import gallerySuramericanoPeru from '@/assets/images/gallery-suramericano-peru.jpg';
import galleryYomchi2026 from '@/assets/images/gallery-yomchi-2026.jpg';
import logoAcademiaCaucana from '@/assets/images/logo.svg';
import directorAcademia from '@/assets/images/director-academia.png';
import sponsorItfInternacional from '@/assets/images/sponsors/sponsor-itf-internacional.png';
import sponsorActdColombia from '@/assets/images/sponsors/sponsor-actd-colombia.png';
import sponsorMightyfist from '@/assets/images/sponsors/sponsor-mightyfist.png';

export const LOCAL_IMAGE_URLS = {
  'hero-pattern': heroPattern as string,
  'hero-taekwondo': heroTaekwondo as string,
  'hero-kickboxing': heroKickboxing as string,
  'hero-acondicionamiento': heroAcondicionamiento as string,
  'gallery-nacional-chia': galleryNacionalChia as string,
  'gallery-suramericano-peru': gallerySuramericanoPeru as string,
  'gallery-yomchi-2026': galleryYomchi2026 as string,
  'logo-academia-caucana': logoAcademiaCaucana as string,
  'director-academia': directorAcademia as string,
  'sponsor-itf-internacional': sponsorItfInternacional as string,
  'sponsor-actd-colombia': sponsorActdColombia as string,
  'sponsor-mightyfist': sponsorMightyfist as string,
} as const;
