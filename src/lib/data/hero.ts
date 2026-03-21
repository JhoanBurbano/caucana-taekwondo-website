import type { HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'taekwondo',
    imageId: 'hero-taekwondo',
    title: 'Taekwondo ITF',
    subtitle: 'Fortalece tu mente y cuerpo con entrenamiento disciplinado. Formamos guerreros con honor y excelencia.',
    primary: true,
  },
  {
    id: 'kickboxing',
    imageId: 'hero-kickboxing',
    title: 'Kickboxing',
    subtitle: 'Técnica, resistencia y defensa personal. Clases dinámicas para todos los niveles.',
    primary: false,
  },
  {
    id: 'acondicionamiento',
    imageId: 'hero-acondicionamiento',
    title: 'Acondicionamiento Físico',
    subtitle: 'Preparación física integral. Fuerza, flexibilidad y rendimiento.',
    primary: false,
  },
];
