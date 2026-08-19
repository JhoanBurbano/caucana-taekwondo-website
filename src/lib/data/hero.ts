import type { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'taekwondo',
    imageId: 'hero-taekwondo',
    eyebrow: 'Academia Revelación ITF 2025',
    title: 'Taekwondo ITF',
    subtitle:
      'Más de 100 estudiantes en Popayán, con títulos nacionales e internacionales. Formamos carácter, disciplina y un proceso técnico de verdad.',
    primary: true,
  },
  {
    id: 'kickboxing',
    imageId: 'hero-kickboxing',
    eyebrow: 'Complemento de combate',
    title: 'Kickboxing',
    subtitle:
      'Técnica, resistencia y defensa personal. Clases dinámicas para quien ya entrena y para quien empieza desde cero.',
    primary: false,
  },
  {
    id: 'acondicionamiento',
    imageId: 'hero-acondicionamiento',
    eyebrow: 'Preparación física',
    title: 'Acondicionamiento',
    subtitle:
      'Fuerza, flexibilidad y rendimiento. El cuerpo que sostiene el arte marcial — y el que te hace sentir más capaz cada semana.',
    primary: false,
  },
];
