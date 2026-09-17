import type { ScheduleDay, ScheduleRow } from '../types';

/**
 * Horario 2026 de la Academia Caucana (Popayán).
 *
 * En el horario impreso las clases de acondicionamiento aparecen como «entrenamiento
 * funcional»; aquí se agrupan bajo la disciplina `acondicionamiento`, que es el nombre
 * con el que el programa se presenta en el resto del sitio.
 */

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { id: 'lun', short: 'Lun', label: 'Lunes' },
  { id: 'mar', short: 'Mar', label: 'Martes' },
  { id: 'mie', short: 'Mié', label: 'Miércoles' },
  { id: 'jue', short: 'Jue', label: 'Jueves' },
  { id: 'vie', short: 'Vie', label: 'Viernes' },
  { id: 'sab', short: 'Sáb', label: 'Sábado' },
];

const FUNCIONAL = {
  title: 'Entrenamiento funcional',
  detail: 'Acondicionamiento físico',
  discipline: 'acondicionamiento',
} as const;

const TKD_915 = { title: 'Taekwon-Do', detail: '9 a 15 años', discipline: 'taekwondo' } as const;
const TKD_ADULTOS = { title: 'Taekwon-Do', detail: 'Adultos', discipline: 'taekwondo' } as const;
const TKD_13_MAS = { title: 'Taekwon-Do', detail: '+13 años y adultos', discipline: 'taekwondo' } as const;
const TKD_KIDS = { title: 'Taekwon-Do Kids', detail: '6 a 8 y 8 a 12 años', discipline: 'taekwondo' } as const;
const TKD_612 = { title: 'Taekwon-Do', detail: '6 a 12 años', discipline: 'taekwondo' } as const;
const BOXEO_KICK = { title: 'Boxeo y Kickboxing', discipline: 'combate' } as const;
const KICK_ADULTOS = { title: 'Kickboxing', detail: 'Adultos', discipline: 'combate' } as const;

export const SCHEDULE: ScheduleRow[] = [
  {
    time: '7:00 a. m.',
    slots: {
      mar: FUNCIONAL,
      mie: FUNCIONAL,
      jue: FUNCIONAL,
      vie: FUNCIONAL,
      sab: { title: 'Academia militar', discipline: 'otro' },
    },
  },
  {
    time: '8:00 a. m.',
    slots: {
      mar: FUNCIONAL,
      mie: FUNCIONAL,
      jue: FUNCIONAL,
      vie: FUNCIONAL,
      sab: { title: 'Academia militar', discipline: 'otro' },
    },
  },
  {
    time: '9:00 a. m.',
    slots: {
      mar: BOXEO_KICK,
      mie: BOXEO_KICK,
      jue: BOXEO_KICK,
      vie: { title: 'Sparring', discipline: 'otro' },
      sab: { title: 'Taekwon-Do', detail: '6 a 15 años', discipline: 'taekwondo' },
    },
  },
  {
    time: '10:00 a. m.',
    slots: {
      sab: { title: 'Sparring', discipline: 'otro' },
    },
  },
  {
    time: '4:00 p. m.',
    slots: {
      mar: TKD_KIDS,
      mie: TKD_612,
      jue: TKD_KIDS,
      vie: TKD_612,
    },
  },
  {
    time: '5:00 p. m.',
    slots: {
      lun: { title: 'Taekwon-Do', detail: 'Monitores', discipline: 'taekwondo' },
      mar: TKD_915,
      mie: TKD_915,
      jue: TKD_915,
      vie: TKD_915,
    },
  },
  {
    time: '6:00 p. m.',
    slots: {
      lun: { title: 'Acondicionamiento físico', detail: 'Adultos', discipline: 'acondicionamiento' },
      mar: TKD_13_MAS,
      mie: TKD_13_MAS,
      jue: TKD_13_MAS,
      vie: { title: 'Combates Taekwon-Do', discipline: 'taekwondo' },
    },
  },
  {
    time: '7:00 p. m.',
    slots: {
      lun: TKD_ADULTOS,
      mar: KICK_ADULTOS,
      mie: KICK_ADULTOS,
      jue: { title: 'Boxeo', detail: 'Adultos', discipline: 'combate' },
      vie: KICK_ADULTOS,
    },
  },
  {
    time: '8:00 p. m.',
    slots: {
      mar: TKD_ADULTOS,
      jue: TKD_ADULTOS,
    },
  },
];

/** Etiquetas de la leyenda, en el orden en que se muestran. */
export const SCHEDULE_LEGEND = [
  { discipline: 'taekwondo', label: 'Taekwon-Do ITF' },
  { discipline: 'combate', label: 'Kickboxing y Boxeo' },
  { discipline: 'acondicionamiento', label: 'Acondicionamiento' },
  { discipline: 'otro', label: 'Otros' },
] as const;

/**
 * Franjas en las que el dojang está abierto, derivadas del horario de arriba.
 * Alimentan `openingHoursSpecification` en el JSON-LD para que Google pueda mostrar
 * el horario en la ficha local. Cada clase dura una hora, así que el cierre es la
 * última franja + 1.
 */
export const OPENING_HOURS = [
  { days: ['Monday'], opens: '17:00', closes: '20:00' },
  { days: ['Tuesday', 'Thursday'], opens: '07:00', closes: '10:00' },
  { days: ['Tuesday', 'Thursday'], opens: '16:00', closes: '21:00' },
  { days: ['Wednesday', 'Friday'], opens: '07:00', closes: '10:00' },
  { days: ['Wednesday', 'Friday'], opens: '16:00', closes: '20:00' },
  { days: ['Saturday'], opens: '07:00', closes: '11:00' },
] as const;
