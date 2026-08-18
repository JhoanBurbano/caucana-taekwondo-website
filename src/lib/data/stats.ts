import type { AcademyStat } from '../types';

/** Cifras reales del proceso (fundación 2023). No se infla la antigüedad de la academia. */
export const ACADEMY_STATS: AcademyStat[] = [
  {
    id: 'students',
    value: '100+',
    label: 'Estudiantes',
    hint: 'Activos en Popayán',
  },
  {
    id: 'titles',
    value: '5',
    label: 'Títulos clave',
    hint: 'Nacionales e internacionales',
  },
  {
    id: 'groups',
    value: '4',
    label: 'Grupos',
    hint: 'Por edad y etapa',
  },
  {
    id: 'founded',
    value: '2023',
    label: 'Año de inicio',
    hint: 'Proceso en crecimiento',
  },
];
