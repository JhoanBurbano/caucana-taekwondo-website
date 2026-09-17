import type { NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Academia', href: '#academia' },
  { name: 'Programas', href: '#programas' },
  { name: 'Horarios', href: '#horarios' },
  { name: 'Equipo', href: '#instructores' },
  { name: 'Planes', href: '#planes' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
  // Ruta propia (página estática), no un ancla de la landing.
  { name: 'Uniforme oficial', href: '/uniforme-oficial/' },
];
