import type { AgeGroup } from '../types';

export const AGE_GROUPS: AgeGroup[] = [
  {
    id: 'ninos',
    label: 'Niños',
    ages: '5 a 9 años',
    focus: 'Juego, coordinación y primeros hábitos de respeto.',
  },
  {
    id: 'prejuveniles',
    label: 'Prejuveniles',
    ages: '10 a 13 años',
    focus: 'Técnica, disciplina y primeros pasos en competencia.',
  },
  {
    id: 'jovenes',
    label: 'Jóvenes',
    ages: '14 a 17 años',
    focus: 'Alto rendimiento, carácter y liderazgo en el dojang.',
  },
  {
    id: 'adultos',
    label: 'Adultos',
    ages: '18 años en adelante',
    focus: 'Salud, defensa personal y entrenamiento con propósito.',
  },
];
