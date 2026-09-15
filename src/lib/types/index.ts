import type { ImageAssetId, LocalAssetId } from '../assets/types';

export interface HeroSlide {
  id: string;
  /** ID de imagen en @/lib/assets (background cover) */
  imageId: ImageAssetId;
  title: string;
  subtitle: string;
  /** Línea de contexto sobre el título */
  eyebrow?: string;
  /** Si true, es la modalidad principal (Taekwondo) */
  primary?: boolean;
}

export interface Coach {
  name: string;
  rank: string;
  bio: string;
  /** ID del asset en @/lib/assets (ej: coach-1) */
  image: ImageAssetId;
}

/** Icono para destacados del perfil del maestro (lucide) */
export type MaestroHighlightIcon = 'star' | 'medal' | 'trophy' | 'users';

export interface MaestroHighlight {
  icon: MaestroHighlightIcon;
  label: string;
}

/** Maestro principal: biografía, disciplinas/rangos y logros */
export interface Maestro {
  name: string;
  /** ID del asset en @/lib/assets */
  image: LocalAssetId;
  /** Línea de rol (ej. Director y Primer Maestro) */
  roleSubtitle: string;
  /** Párrafo narrativo (trayectoria, filosofía breve) */
  narrative: string;
  /** Formación y credenciales (párrafo corto) */
  bio: string;
  /** Disciplinas y rangos */
  disciplines: { name: string; rank: string }[];
  /** Logros deportivos (listado completo) */
  achievements: string[];
  /** Cuatro destacados visuales bajo la biografía */
  highlights: MaestroHighlight[];
  quote: string;
  /** Valores al pie, separados por | en UI */
  footerPillars: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured: boolean;
  cta: string;
  note?: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  /** ID del asset en @/lib/assets (ej: gallery-training) */
  image: ImageAssetId;
  /** Puesto obtenido (ej: "Campeones", "3.er puesto"). Omitir si no aplica. */
  result?: string;
  /**
   * Cómo se presenta `result`. 'podium' (por defecto) lo marca con medalla y acento de
   * marca; 'participation' lo muestra en tono neutro, para resultados fuera del podio.
   */
  resultKind?: 'podium' | 'participation';
  /** Ciudad o país donde se compitió */
  place?: string;
}

export interface Sponsor {
  name: string;
  /** Logo PNG en @/lib/assets/local */
  image: LocalAssetId;
  /** Sitio web oficial */
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
}

/** Tipos para FAQ */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Tipo semántico del hito (gobierna el ícono y acento visual). */
export type TimelineKind = 'founding' | 'championship' | 'recognition' | 'milestone';

/** Hito del timeline "Nuestra trayectoria" (desde 2023) */
export interface TimelineMilestone {
  year: number;
  /** Mes opcional (ej. 3 = marzo) */
  month?: number;
  title: string;
  description?: string;
  /** Logros en competencias ese periodo */
  achievements: string[];
  /** Categoría del hito; default: 'milestone' */
  kind?: TimelineKind;
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  imageId: ImageAssetId;
}

export interface AgeGroup {
  id: string;
  label: string;
  ages: string;
  focus: string;
}

export interface AcademyStat {
  id: string;
  value: string;
  label: string;
  hint: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export interface TrialFormData {
  name: string;
  phone: string;
  group: string;
  program: string;
}
