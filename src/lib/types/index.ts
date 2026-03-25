import type { ExternalImageId, LocalAssetId } from '../assets/types';

export interface HeroSlide {
  id: string;
  /** ID de imagen en @/lib/assets (background cover) */
  imageId: ExternalImageId;
  title: string;
  subtitle: string;
  /** Si true, es la modalidad principal (Taekwondo) */
  primary?: boolean;
}

export interface Coach {
  name: string;
  rank: string;
  bio: string;
  /** ID del asset en @/lib/assets (ej: coach-1) */
  image: ExternalImageId;
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
}

export interface GalleryItem {
  title: string;
  category: string;
  /** ID del asset en @/lib/assets (ej: gallery-training) */
  image: ExternalImageId;
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

export interface PaymentFormData {
  identificationType: string;
  identification: string;
  name: string;
  email: string;
  phone: string;
  selectedBank: string;
}

export type PaymentStep = 'identification' | 'summary' | 'pse';

export interface PaymentConcept {
  concept: string;
  amount: number;
}

/** Hito del timeline "Nuestra trayectoria" (desde 2023) */
export interface TimelineMilestone {
  year: number;
  /** Mes opcional (ej. 3 = marzo) */
  month?: number;
  title: string;
  description?: string;
  /** Logros en competencias ese periodo */
  achievements: string[];
}

