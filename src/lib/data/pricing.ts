import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Mensual',
    price: '120.000',
    period: 'mes',
    features: [
      'Acceso ilimitado a entrenamientos',
      '3 clases semanales',
      'Asesoría personalizada',
      'Eventos internos',
      'Material de práctica incluido',
    ],
    featured: false,
  },
  {
    name: 'Trimestral',
    price: '330.000',
    period: '3 meses',
    features: [
      'Acceso ilimitado a entrenamientos',
      'Clases ilimitadas',
      'Asesoría personalizada',
      'Eventos internos',
      'Material de práctica incluido',
      'Evaluación de progreso mensual',
      '10% de descuento',
    ],
    featured: true,
  },
  {
    name: 'Anual',
    price: '1.200.000',
    period: 'año',
    features: [
      'Acceso ilimitado a entrenamientos',
      'Clases ilimitadas',
      'Asesoría personalizada premium',
      'Todos los eventos incluidos',
      'Material de práctica incluido',
      'Evaluación de progreso mensual',
      'Seminarios especiales',
      'Preparación para exámenes de grado',
      '20% de descuento',
    ],
    featured: false,
  },
];

