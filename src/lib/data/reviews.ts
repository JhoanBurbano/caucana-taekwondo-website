import type { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    author: 'María González',
    rating: 5,
    text: 'Mi hijo llegó tímido y en pocos meses se ve más seguro. El trato es cercano y el entrenamiento es serio, sin perder el ambiente de familia.',
    date: 'Hace 2 semanas',
    location: 'Madre de estudiante',
  },
  {
    author: 'Carlos Rodríguez',
    rating: 5,
    text: 'Los instructores son profesionales y los resultados en competencias se notan. Academia Revelación ITF 2025 no es un título casual.',
    date: 'Hace 1 mes',
    location: 'Estudiante adulto',
  },
  {
    author: 'Ana Martínez',
    rating: 5,
    text: 'El proceso está bien estructurado. Mi hija entrenó, compitió y, sobre todo, aprendió a comprometerse. Eso vale más que cualquier medalla.',
    date: 'Hace 3 semanas',
    location: 'Madre de estudiante',
  },
];

export const REVIEW_SUMMARY = {
  rating: '4.9',
  count: 47,
} as const;
