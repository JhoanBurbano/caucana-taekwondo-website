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
  // Hero Sections - Fotos de acción high-energy
  'hero-fighter':
    'https://images.unsplash.com/photo-1555597408-26bc8e548a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  'hero-taekwondo':
    'https://images.unsplash.com/photo-1555597408-26bc8e548a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  'hero-kickboxing':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  'hero-acondicionamiento':
    'https://images.unsplash.com/photo-1773289338379-5bad1838a860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920',
  
  // About Section - Training en dojang
  'about-training':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  
  // Coaches - Fotos de instructores en acción (excepto director)
  'coach-1':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  'coach-2':
    'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  'coach-3':
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  'coach-4':
    'https://images.unsplash.com/photo-1555597408-26bc8e548a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=800',
  
  // Gallery - Competencias, entrenamientos y eventos
  'gallery-competition-1':
    'https://images.unsplash.com/photo-1555597408-26bc8e548a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  'gallery-competition-2':
    'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  'gallery-graduation':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  'gallery-training':
    'https://images.unsplash.com/photo-1773289338370-6197ab131713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  'gallery-event-1':
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
  'gallery-event-2':
    'https://images.unsplash.com/photo-1773289338379-5bad1838a860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200',
} as const

/** Metadata (alt, créditos) para cada asset. Usado por OptimizedImage y SEO. */
export const ASSET_META: AssetMetaMap = {
  'hero-fighter': {
    alt: 'Silueta de luchador de Taekwondo en posición de combate',
    credit: 'Unsplash',
  },
  'hero-taekwondo': { alt: 'Entrenamiento de Taekwondo ITF', credit: 'Unsplash' },
  'hero-kickboxing': { alt: 'Clase de kickboxing', credit: 'Unsplash' },
  'hero-acondicionamiento': { alt: 'Acondicionamiento físico y fuerza', credit: 'Unsplash' },
  'about-training': {
    alt: 'Instructor de Taekwondo enseñando técnicas de combate a estudiantes en el dojang',
    credit: 'Unsplash',
  },
  'hero-pattern': {
    alt: '',
  },
  'director-academia': { alt: 'Jonathan Daniel López Cepeda, director y maestro de la Academia Caucana' },
  'coach-1': { alt: 'Maestro Carlos Rodríguez, 6to Dan ITF' },
  'coach-2': { alt: 'Maestra Ana López, 5to Dan ITF' },
  'coach-3': { alt: 'Instructor Miguel Torres, 4to Dan ITF' },
  'coach-4': { alt: 'Instructora Laura Mendoza, 3er Dan ITF' },
  'gallery-competition-1': { alt: 'Campeonato Nacional 2024 - Competencias' },
  'gallery-competition-2': { alt: 'Torneo Regional - Competencias' },
  'gallery-graduation': { alt: 'Examen de Cinturón Negro - Graduaciones' },
  'gallery-training': { alt: 'Entrenamiento Intensivo - Entrenamientos' },
  'gallery-event-1': { alt: 'Seminario Internacional - Eventos' },
  'gallery-event-2': { alt: 'Demostración Pública - Eventos' },
  'sponsor-itf-internacional': {
    alt: 'Logo International Taekwon-Do Federation (ITF)',
    credit: 'Wikimedia Commons · ITF Logo New (CC BY-SA 4.0)',
  },
  'sponsor-actd-colombia': { alt: 'Logo Asociación Colombiana de Taekwon-Do' },
  'sponsor-mightyfist': { alt: 'Logo Mightyfist Taekwon-Do' },
}
