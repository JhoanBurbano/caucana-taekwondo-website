/**
 * Constantes centralizadas de assets.
 * Única fuente de verdad para URLs de imágenes externas.
 * Locales: ver ./local.ts
 *
 * @see docs/ASSETS.md
 */

import type { AssetMetaMap } from './types'

/** URLs de imágenes externas (Unsplash, CDN, etc.) */
export const EXTERNAL_IMAGES = {
  'hero-fighter':
    'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'hero-taekwondo':
    'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'hero-kickboxing':
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'hero-acondicionamiento':
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'about-training':
    'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'coach-1':
    'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'coach-2':
    'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'coach-3':
    'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'coach-4':
    'https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-competition-1':
    'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-competition-2':
    'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-graduation':
    'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-training':
    'https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-event-1':
    'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'gallery-event-2':
    'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
}
