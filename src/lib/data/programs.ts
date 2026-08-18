import type { Program } from '../types';

export const PROGRAMS: Program[] = [
  {
    id: 'taekwondo',
    title: 'Taekwondo ITF',
    tagline: 'El corazón de la academia',
    description:
      'Formas (tul), combate, rompimiento y defensa personal. Un proceso técnico completo para competir y para formar carácter.',
    audience: 'Desde los 5 años',
    imageId: 'hero-taekwondo',
  },
  {
    id: 'kickboxing',
    title: 'Kickboxing',
    tagline: 'Técnica y resistencia',
    description:
      'Clases dinámicas de golpes, patadas y acondicionamiento. Ideal para defensa personal y para complementar el combate.',
    audience: 'Jóvenes y adultos',
    imageId: 'hero-kickboxing',
  },
  {
    id: 'acondicionamiento',
    title: 'Acondicionamiento físico',
    tagline: 'Fuerza para rendir',
    description:
      'Preparación física integral: fuerza, flexibilidad y resistencia. Para competidores y para quien busca sentirse más fuerte.',
    audience: 'Todos los niveles',
    imageId: 'hero-acondicionamiento',
  },
];
