import type { GalleryItem } from '../types';
import type { ExternalImageId } from '../assets/types';

const GALLERY_IMAGE_IDS: ExternalImageId[] = [
  'gallery-competition-1',
  'gallery-graduation',
  'gallery-training',
  'gallery-event-1',
  'gallery-event-2',
  'gallery-competition-2',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Campeones Copa Súper Campeones 2024', category: 'Competencias', image: GALLERY_IMAGE_IDS[0] },
  { title: 'Academia Revelación ITF 2025', category: 'Reconocimientos', image: GALLERY_IMAGE_IDS[1] },
  { title: 'Entrenamiento por grupos de edad', category: 'Entrenamientos', image: GALLERY_IMAGE_IDS[2] },
  { title: 'Centroamericanos 2025 — República Dominicana', category: 'Competencias internacionales', image: GALLERY_IMAGE_IDS[3] },
  { title: 'Campeones Copa Pelícano 2025', category: 'Competencias', image: GALLERY_IMAGE_IDS[4] },
  { title: 'Tercer Lugar Juegos Nacionales 2025', category: 'Competencias', image: GALLERY_IMAGE_IDS[5] },
];
