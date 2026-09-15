import type { GalleryItem } from '../types';

/** Palmarés de la academia, del resultado más reciente al más antiguo. */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Copa Yom-Chi II 2026',
    category: 'Competencias',
    result: '3.er puesto',
    place: 'Bogotá',
    image: 'gallery-yomchi-2026',
  },
  {
    title: 'Suramericano 2026',
    category: 'Competencias internacionales',
    result: '4.º puesto',
    resultKind: 'participation',
    place: 'Perú',
    image: 'gallery-suramericano-peru',
  },
  {
    // Mismo torneo que los Juegos Nacionales 2025: un solo registro, no dos.
    title: 'Campeonato Nacional de Taekwon-Do 2025',
    category: 'Competencias',
    result: '3.er puesto',
    place: 'Chía · noviembre',
    image: 'gallery-nacional-chia',
  },
  {
    title: 'Centroamericanos 2025',
    category: 'Competencias internacionales',
    result: 'Campeones',
    place: 'República Dominicana',
    image: 'gallery-event-1',
  },
  {
    title: 'Copa Pelícano 2025',
    category: 'Competencias',
    result: 'Campeones',
    image: 'gallery-event-2',
  },
  {
    title: 'Copa Súper Campeones 2024',
    category: 'Competencias',
    result: 'Campeones',
    image: 'gallery-graduation',
  },
  {
    title: 'Academia Revelación ITF 2025',
    category: 'Reconocimientos',
    image: 'gallery-event-1',
  },
];
