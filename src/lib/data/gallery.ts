import type { GalleryItem } from '../types';
import type { ExternalImageId } from '../assets/types';

/** IDs de imagen por ítem (definidos en @/lib/assets) */
const GALLERY_IMAGE_IDS: ExternalImageId[] = [
  'gallery-competition-1',
  'gallery-graduation',
  'gallery-training',
  'gallery-event-1',
  'gallery-event-2',
  'gallery-competition-2',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Campeonato Nacional 2024', category: 'Competencias', image: GALLERY_IMAGE_IDS[0] },
  { title: 'Examen de Cinturón Negro', category: 'Graduaciones', image: GALLERY_IMAGE_IDS[1] },
  { title: 'Entrenamiento Intensivo', category: 'Entrenamientos', image: GALLERY_IMAGE_IDS[2] },
  { title: 'Seminario Internacional', category: 'Eventos', image: GALLERY_IMAGE_IDS[3] },
  { title: 'Torneo Regional', category: 'Competencias', image: GALLERY_IMAGE_IDS[4] },
  { title: 'Demostración Pública', category: 'Eventos', image: GALLERY_IMAGE_IDS[5] },
];
