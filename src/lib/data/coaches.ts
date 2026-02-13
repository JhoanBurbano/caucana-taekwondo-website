import type { Coach } from '../types';
import type { ExternalImageId } from '../assets/types';

/** IDs de imagen para cada coach (definidos en @/lib/assets) */
const COACH_IMAGES: Record<number, ExternalImageId> = {
  0: 'coach-1',
  1: 'coach-2',
  2: 'coach-3',
  3: 'coach-4',
};

export const COACHES: Coach[] = [
  {
    name: 'Maestro Carlos Rodríguez',
    rank: '6to Dan ITF',
    bio: 'Campeón nacional con más de 20 años de experiencia. Especialista en técnicas de combate y desarrollo de campeones.',
    image: COACH_IMAGES[0],
  },
  {
    name: 'Maestra Ana López',
    rank: '5to Dan ITF',
    bio: 'Experta en formas (Tuls) y filosofía del Taekwondo. Medallista panamericana dedicada a la formación integral.',
    image: COACH_IMAGES[1],
  },
  {
    name: 'Instructor Miguel Torres',
    rank: '4to Dan ITF',
    bio: 'Entrenador de competidores juveniles. Especializado en preparación física y técnica de alto rendimiento.',
    image: COACH_IMAGES[2],
  },
  {
    name: 'Instructora Laura Mendoza',
    rank: '3er Dan ITF',
    bio: 'Especialista en defensa personal y técnicas de rompimiento. Enfoque en empoderamiento femenino.',
    image: COACH_IMAGES[3],
  },
];
