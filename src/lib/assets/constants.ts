/**
 * Constantes centralizadas de assets.
 * Única fuente de verdad para URLs de imágenes externas.
 * Locales: ver ./local.ts
 *
 * @see docs/ASSETS.md
 */

import type { AssetMetaMap } from './types'

/** URLs de imágenes externas (Unsplash, CDN, etc.) - Fotos profesionales ALTA CALIDAD 2026 */
export const EXTERNAL_IMAGES = {
  // Hero Sections - ALTA DEFINICIÓN (2560px, quality 95) - Específicas por modalidad
  'hero-taekwondo':
    'https://images.pexels.com/photos/15937437/pexels-photo-15937437.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=2',
  // Taekwondo ITF: dobok blanco, patada alta, fondo oscuro - ESPECÍFICO ITF
  
  'hero-kickboxing':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=95&w=2560',
  // Kickboxing: Sparring real, acción dramática, lighting profesional
  
  'hero-acondicionamiento':
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=95&w=2560',
  // Fitness: Gym training, equipamiento, atletas en acción
  
  // About Section - Training en dojang
  'about-training':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  
  // Coaches - Fotos de instructores en acción (excepto director) - CALIDAD MEJORADA
  'coach-1':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1200',
  'coach-2':
    'https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1200',
  'coach-3':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1200',
  'coach-4':
    'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1200',
  
  // Gallery - Competencias, entrenamientos y eventos - CALIDAD MEJORADA
  'gallery-competition-1':
    'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  'gallery-competition-2':
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  'gallery-graduation':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  'gallery-training':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  'gallery-event-1':
    'https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
  'gallery-event-2':
    'https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=1600',
} as const

/** Metadata (alt, créditos) para cada asset. Usado por OptimizedImage y SEO. */
export const ASSET_META: AssetMetaMap = {
  'hero-taekwondo': { 
    alt: 'Taekwondo ITF - Atleta con dobok blanco ejecutando patada alta en combate', 
    credit: 'Pexels' 
  },
  'hero-kickboxing': { 
    alt: 'Kickboxing - Sparring de alta intensidad con técnica de patadas y puños', 
    credit: 'Unsplash' 
  },
  'hero-acondicionamiento': { 
    alt: 'Acondicionamiento físico - Entrenamiento funcional en gym con equipamiento profesional', 
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
