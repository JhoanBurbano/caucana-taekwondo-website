import type { AcademyStat } from '../types';
import { GALLERY_ITEMS } from './gallery';
import { AGE_GROUPS } from './groups';

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
    // Derivado del palmarés: escrito a mano decía 5 cuando ya había 7.
    value: `${GALLERY_ITEMS.length}`,
    label: 'Logros',
    hint: 'Nacionales e internacionales',
  },
  {
    id: 'groups',
    value: `${AGE_GROUPS.length}`,
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
