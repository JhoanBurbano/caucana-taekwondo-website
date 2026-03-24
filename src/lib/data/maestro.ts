import type { Maestro } from '../types';

export const MAESTRO: Maestro = {
  name: 'Jonathan Daniel López Cepeda',
  image: 'director-academia',
  roleSubtitle: 'Director y Primer Maestro de la Academia',
  narrative:
    'Con una trayectoria sólida en el combate y la enseñanza, ha representado a Colombia en el plano internacional y forma a nuevas generaciones con el mismo rigor con el que compitió en tatami y ring.',
  bio: 'Licenciado en Educación Física por la Universidad Libre. Especialista en Entrenamiento Deportivo. Ex peleador de MMA. Conocimientos en BJJ (Jiu Jitsu Brasileño).',
  disciplines: [
    { name: 'Taekwon-Do', rank: 'Cinturón Negro II Dan' },
    { name: 'Kick Boxing', rank: 'Cinturón Negro' },
    { name: 'MMA', rank: 'Ex peleador' },
    { name: 'BJJ (Jiu Jitsu Brasileño)', rank: 'Conocimientos' },
  ],
  achievements: [
    'Múltiple campeón nacional combate Taekwon-Do',
    'Múltiple campeón nacional rompimiento de fuerza Taekwon-Do',
    'Múltiple campeón nacional kick boxing',
    'Subcampeón Panamericano combate Taekwon-Do, Brasil 2018',
    'Miembro de la Selección Colombia de Taekwon-Do 2017-2023',
    'Mejor clasificación entre los 8 mejores del mundo categoría crucero Taekwon-Do',
    'Selección Colombia',
  ],
  highlights: [
    { icon: 'star', label: 'Múltiple campeón nacional Taekwon-Do y kick boxing' },
    { icon: 'medal', label: 'Subcampeón Panamericano Taekwon-Do, Brasil 2018' },
    { icon: 'trophy', label: 'Selección Colombia Taekwon-Do 2017–2023' },
    { icon: 'users', label: 'Formador de nuevas generaciones' },
  ],
  quote: 'La verdadera fuerza nace de la disciplina, el respeto y la constancia.',
  footerPillars: [
    'Formación técnica',
    'Desarrollo del carácter',
    'Espíritu marcial',
    'Excelencia deportiva',
  ],
};
