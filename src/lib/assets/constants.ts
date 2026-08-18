/**
 * Constantes centralizadas de assets.
 * Única fuente de verdad para URLs de imágenes externas.
 * Locales: ver ./local.ts
 *
 * @see docs/ASSETS.md
 */

import type { AssetMetaMap } from './types'

/** URLs de imágenes externas (Unsplash, CDN, etc.) - Fotos profesionales de taekwondo y artes marciales 2026 */
export const EXTERNAL_IMAGES = {
  // Hero Sections - Fotos de acción high-energy con fondos oscuros/dramáticos
  'hero-fighter':
    'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  // Competencia de artes marciales - fondo oscuro, acción dinámica (Jan 2026)
  
  'hero-taekwondo':
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  // Sparring de taekwondo - shallow focus, acción real
  
  'hero-kickboxing':
    'https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  // Kickboxing gym con sacos - lighting profesional, múltiples atletas (Sep 2025)
  
  'hero-acondicionamiento':
    'https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  // Dark gym interior con equipamiento - moody, cinematic (Feb 2026)
  
  // About Section - Training en dojang
  'about-training':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  
  // Coaches - Fotos de instructores en acción (excepto director)
  'coach-1':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  'coach-2':
    'https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  // Muay Thai sparring - acción dinámica
  'coach-3':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  // Muay Thai training en gym
  'coach-4':
    'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  // Competencia de artes marciales
  
  // Gallery - Competencias, entrenamientos y eventos
  'gallery-competition-1':
    'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Competencia point fighting
  'gallery-competition-2':
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Sparring taekwondo
  'gallery-graduation':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Training en dojang
  'gallery-training':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Muay Thai training
  'gallery-event-1':
    'https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Kickboxing gym
  'gallery-event-2':
    'https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  // Muay Thai sparring
} as const

/** Metadata (alt, créditos) para cada asset. Usado por OptimizedImage y SEO. */
export const ASSET_META: AssetMetaMap = {
  'hero-fighter': {
    alt: 'Competencia de artes marciales - fighters en acción durante point fighting',
    credit: 'Unsplash',
  },
  'hero-taekwondo': { 
    alt: 'Sparring de Taekwondo ITF - dos atletas en combate', 
    credit: 'Unsplash' 
  },
  'hero-kickboxing': { 
    alt: 'Entrenamiento de kickboxing en gym con sacos de boxeo', 
    credit: 'Unsplash' 
  },
  'hero-acondicionamiento': { 
    alt: 'Gym de acondicionamiento físico con equipamiento profesional en iluminación dramática', 
    credit: 'Unsplash' 
  },
  'about-training': {
    alt: 'Instructor de Taekwondo enseñando técnicas de combate a estudiantes en el dojang',
    credit: 'Unsplash',
  },
  'hero-pattern': {
    alt: '',
  },
  'director-academia': { alt: 'Jonathan Daniel López Cepeda, director y maestro de la Academia Caucana' },
  'coach-1': { alt: 'Maestro Carlos Rodríguez, 6to Dan ITF' },
  'coach-2': { alt: 'Maestra Ana López, 5to Dan ITF - Muay Thai sparring' },
  'coach-3': { alt: 'Instructor Miguel Torres, 4to Dan ITF - Muay Thai training' },
  'coach-4': { alt: 'Instructora Laura Mendoza, 3er Dan ITF - Competencia' },
  'gallery-competition-1': { alt: 'Campeonato Nacional 2024 - Point Fighting Competition' },
  'gallery-competition-2': { alt: 'Torneo Regional - Sparring de Taekwondo' },
  'gallery-graduation': { alt: 'Examen de Cinturón Negro - Entrenamiento en Dojang' },
  'gallery-training': { alt: 'Entrenamiento Intensivo - Muay Thai Training' },
  'gallery-event-1': { alt: 'Seminario Internacional - Kickboxing Gym' },
  'gallery-event-2': { alt: 'Demostración Pública - Muay Thai Sparring' },
  'sponsor-itf-internacional': {
    alt: 'Logo International Taekwon-Do Federation (ITF)',
    credit: 'Wikimedia Commons · ITF Logo New (CC BY-SA 4.0)',
  },
  'sponsor-actd-colombia': { alt: 'Logo Asociación Colombiana de Taekwon-Do' },
  'sponsor-mightyfist': { alt: 'Logo Mightyfist Taekwon-Do' },
}
