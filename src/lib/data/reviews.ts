import type { BeltColor, Review } from '../types';

/**
 * Testimonios reales de estudiantes y familias de la academia.
 *
 * Todos son personas identificables que autorizaron publicar su nombre. Si alguna pide
 * retirarse, se borra su entrada de aquí y desaparece del sitio.
 */
export const REVIEWS: Review[] = [
  {
    author: 'Jhoan Burbano',
    rank: 'Franja verde',
    belt: 'verde',
    stripe: true,
    rating: 5,
    text: 'Excelente academia. Los entrenamientos son exigentes, pero se aprende muchísimo. Se nota el compromiso del profesor y el ambiente entre compañeros es muy bueno.',
  },
  {
    author: 'Juan Manuel Betancur Taborda',
    rank: 'Cinturón verde',
    belt: 'verde',
    rating: 5,
    text: 'Entrenar en la Caucana ha sido una muy buena experiencia. He mejorado bastante mi técnica, condición física y disciplina. Recomendada para quien quiera aprender Taekwon-Do ITF de verdad.',
  },
  {
    author: 'Padre de Benjamín Pabón',
    rank: 'Franja azul',
    belt: 'azul',
    stripe: true,
    rating: 5,
    text: 'Como padre me gusta mucho ver el proceso que ha tenido mi hijo. No solamente ha avanzado en Taekwon-Do, también ha ganado seguridad, disciplina y responsabilidad.',
  },
  {
    author: 'Juan Pablo Hernández Polindara',
    rank: 'Cinturón amarillo',
    belt: 'amarillo',
    rating: 4.9,
    text: 'Muy buenos entrenamientos y excelente acompañamiento. Cada clase tiene algo diferente y siempre hay cosas por mejorar. Me gusta mucho el nivel de exigencia de la academia.',
  },
  {
    author: 'Miguel Narváez Zuluaga',
    rank: 'Franja verde',
    belt: 'verde',
    stripe: true,
    rating: 5,
    text: 'Es un lugar donde uno realmente siente que está progresando. Hay disciplina, compañerismo y preparación física. El profesor está pendiente de corregir los detalles de cada técnica.',
  },
  {
    author: 'Padre de David Alejandro Navia Enríquez',
    rank: 'Franja amarilla',
    belt: 'amarillo',
    stripe: true,
    rating: 5,
    text: 'Desde que nuestro hijo empezó hemos visto un cambio muy positivo. Está más motivado, disciplinado y espera con entusiasmo cada entrenamiento. Nos sentimos muy contentos con la academia.',
  },
  {
    author: 'Antonio Alejandro Pino Pérez',
    rank: 'Cinturón verde',
    belt: 'verde',
    rating: 4.9,
    text: 'Me gusta que no se trata solamente de aprender a pelear. También se trabajan los valores del Taekwon-Do, el respeto y la perseverancia. Hay muy buen ambiente para entrenar.',
  },
  {
    author: 'Diego Francisco Gómez Mosquera',
    rank: 'Cinturón amarillo',
    belt: 'amarillo',
    rating: 5,
    text: 'La Caucana tiene un excelente ambiente. Los entrenamientos son completos y uno puede ver cómo va mejorando con el tiempo. Muy buenos compañeros y muy buena enseñanza.',
  },
  {
    author: 'María Ángeles Castillo Arteaga',
    rank: 'Cinturón verde',
    belt: 'verde',
    rating: 5,
    text: 'Una academia donde te hacen sentir parte del equipo. Me gusta mucho la disciplina con la que se trabaja y cómo nos motivan constantemente a superarnos.',
  },
  {
    author: 'Padre de Jerónimo Cedeño Daza',
    rank: 'Franja amarilla',
    belt: 'amarillo',
    stripe: true,
    rating: 5,
    text: 'Buscábamos una actividad deportiva para nuestro hijo y encontramos mucho más. Ha aprendido disciplina, respeto y constancia mientras disfruta cada entrenamiento. Estamos muy satisfechos con su proceso.',
  },
];

/** Color de cada grado, para el distintivo de cinturón de cada tarjeta. */
export const BELT_HEX: Record<BeltColor, string> = {
  blanco: '#F5F5F7',
  amarillo: '#E8B931',
  verde: '#3FA34D',
  azul: '#3B7DD8',
  rojo: '#C4352F',
  negro: '#1C1C1E',
};

/**
 * Promedio y total calculados, nunca escritos a mano: la versión anterior de este
 * archivo declaraba «4.9 sobre 47 reseñas» con solo tres testimonios inventados.
 */
export const REVIEW_SUMMARY = {
  rating: (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1),
  count: REVIEWS.length,
} as const;
