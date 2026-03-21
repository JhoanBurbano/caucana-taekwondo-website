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

/** Maestro principal: biografía deportiva, disciplinas/rangos y logros */
export interface Maestro {
  name: string;
  /** ID del asset en @/lib/assets */
  image: LocalAssetId;
  /** Biografía deportiva */
  bio: string;
  /** Disciplinas y rangos (ej. Taekwondo ITF 6to Dan) */
  disciplines: { name: string; rank: string }[];
  /** Logros deportivos */
  achievements: string[];
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
  logo: string;
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

