import type { GalleryItem } from '../types';
import type { ImageAssetId } from '../assets/types';

const GALLERY_IMAGE_IDS: ImageAssetId[] = [
  'gallery-competition-1',
  'gallery-competition-2',
  'gallery-event-1',
  'gallery-training',
  'gallery-event-2',
  'gallery-graduation',
];

/** Palmarés de la academia, del resultado más reciente al más antiguo. */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Copa Yom-Chi II 2026',
    category: 'Competencias',
    result: '3.er puesto',
    place: 'Bogotá',
    image: GALLERY_IMAGE_IDS[0],
  },
  {
    title: 'Suramericano 2026',
    category: 'Competencias internacionales',
    result: '4.º puesto',
    resultKind: 'participation',
    place: 'Perú',
    image: GALLERY_IMAGE_IDS[3],
  },
  {
    // Mismo torneo que los Juegos Nacionales 2025: un solo registro, no dos.
    title: 'Campeonato Nacional de Taekwon-Do 2025',
    category: 'Competencias',
    result: '3.er puesto',
    place: 'Chía · noviembre',
    image: GALLERY_IMAGE_IDS[1],
  },
  {
    title: 'Centroamericanos 2025',
    category: 'Competencias internacionales',
    result: 'Campeones',
    place: 'República Dominicana',
    image: GALLERY_IMAGE_IDS[2],
  },
  {
    title: 'Copa Pelícano 2025',
    category: 'Competencias',
    result: 'Campeones',
    image: GALLERY_IMAGE_IDS[4],
  },
  {
    title: 'Copa Súper Campeones 2024',
    category: 'Competencias',
    result: 'Campeones',
    image: GALLERY_IMAGE_IDS[5],
  },
  {
    title: 'Academia Revelación ITF 2025',
    category: 'Reconocimientos',
    image: GALLERY_IMAGE_IDS[2],
  },
];
