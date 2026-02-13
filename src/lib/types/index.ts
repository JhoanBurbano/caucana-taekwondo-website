import type { ExternalImageId } from '../assets/types';

export interface Coach {
  name: string;
  rank: string;
  bio: string;
  /** ID del asset en @/lib/assets (ej: coach-1) */
  image: ExternalImageId;
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

