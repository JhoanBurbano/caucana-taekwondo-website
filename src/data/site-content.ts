import heroIllustration from '@/assets/illustrations/hero-ceremony.svg';
import infantilIllustration from '@/assets/illustrations/program-infantil.svg';
import juvenilIllustration from '@/assets/illustrations/program-juvenil.svg';
import adultosIllustration from '@/assets/illustrations/program-adultos.svg';
import type {
  BeltLevel,
  ContactItem,
  HeroContent,
  NavigationLink,
  ProgramItem,
  ScheduleItem,
  SocialLink,
  ValueItem,
} from '@/types/site';

export const navigationLinks: NavigationLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'La Academia', href: '#academia' },
  { label: 'Programas', href: '#programas' },
  { label: 'Ascensos', href: '#ascensos' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
];

export const heroContent: HeroContent = {
  title: 'Academia Caucana de Taekwondo ITF',
  tagline: 'Formando guerreros con honor y disciplina',
  description:
    'Una formación marcial integral donde la tradición coreana, la preparación técnica y el crecimiento humano se encuentran para forjar carácter, temple y excelencia en cada etapa del camino.',
  metadata: 'Popayán, Cauca | Más de 10 años de excelencia',
  primaryAction: {
    label: 'Agenda tu clase de prueba',
    href: '#contacto',
  },
  secondaryAction: {
    label: 'Ver programas',
    href: '#programas',
  },
};

export const values: ValueItem[] = [
  {
    title: 'Disciplina & Honor',
    description:
      'Cada saludo, cada técnica y cada práctica fortalecen el respeto, la constancia y la presencia interior del practicante.',
    accent: 'Etiqueta marcial, autocontrol y propósito.',
  },
  {
    title: 'Entrenamiento Profesional',
    description:
      'Sesiones estructuradas con metodología progresiva, corrección técnica y acompañamiento cercano para una evolución sólida.',
    accent: 'Base técnica, condición física y enfoque seguro.',
  },
  {
    title: 'Competencias & Logros',
    description:
      'La academia impulsa procesos de superación que preparan a sus alumnos para exámenes, exhibiciones y escenarios competitivos.',
    accent: 'Rendimiento, confianza y espíritu de superación.',
  },
];

export const programs: ProgramItem[] = [
  {
    title: 'Infantil',
    description:
      'Un programa formativo que desarrolla coordinación, confianza, disciplina y hábitos positivos desde los primeros años.',
    imageSrc: infantilIllustration,
    imageAlt: 'Ilustración ceremonial de entrenamiento infantil de taekwondo.',
    href: '#contacto',
    audience: 'De 5 a 11 años',
  },
  {
    title: 'Juvenil',
    description:
      'Entrenamiento dinámico para fortalecer carácter, técnica, autocontrol y mentalidad competitiva en la adolescencia.',
    imageSrc: juvenilIllustration,
    imageAlt: 'Ilustración de práctica juvenil con energía marcial y disciplina.',
    href: '#contacto',
    audience: 'De 12 a 17 años',
  },
  {
    title: 'Adultos',
    description:
      'Espacios de práctica para mejorar condición física, defensa personal, temple mental y progreso técnico con visión integral.',
    imageSrc: adultosIllustration,
    imageAlt: 'Ilustración de entrenamiento de taekwondo para adultos.',
    href: '#contacto',
    audience: '18 años en adelante',
  },
];

export const beltLevels: BeltLevel[] = [
  { name: 'Blanca', color: '#F8F4EE', textColor: '#171717' },
  { name: 'Amarilla', color: '#D8B246', textColor: '#171717' },
  { name: 'Verde', color: '#4D7B4F', textColor: '#FBF7F0' },
  { name: 'Azul', color: '#416DAA', textColor: '#FBF7F0' },
  { name: 'Roja', color: '#B1382F', textColor: '#FBF7F0' },
  { name: 'Negra', color: '#171717', textColor: '#FBF7F0' },
];

export const contactItems: ContactItem[] = [
  { label: 'Ciudad', value: 'Popayán, Cauca' },
  { label: 'Teléfono', value: '+57 315 000 0000', href: 'tel:+573150000000' },
  {
    label: 'Correo',
    value: 'academiacaucanaitf@gmail.com',
    href: 'mailto:academiacaucanaitf@gmail.com',
  },
];

export const schedules: ScheduleItem[] = [
  { label: 'Infantil', time: 'Lunes, miércoles y viernes · 4:00 PM – 5:00 PM' },
  { label: 'Juvenil', time: 'Lunes a viernes · 5:15 PM – 6:30 PM' },
  { label: 'Adultos', time: 'Lunes a viernes · 6:45 PM – 8:00 PM' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'WhatsApp', href: 'https://wa.me/573150000000' },
];

export const academyHighlights = [
  'Formación técnica basada en Taekwondo ITF tradicional.',
  'Ambiente de respeto, proceso y disciplina sostenida.',
  'Acompañamiento en ascensos, exhibiciones y competencias.',
] as const;

export const heroVisual = {
  imageSrc: heroIllustration,
  imageAlt: 'Ilustración ceremonial inspirada en un diploma de taekwondo con montañas y pergamino.',
};
