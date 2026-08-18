import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Mensual',
    price: '120.000',
    period: 'mes',
    features: [
      '3 clases semanales',
      'Acceso a entrenamientos de tu grupo',
      'Asesoría del cuerpo técnico',
      'Eventos internos',
      'Material de práctica en clase',
    ],
    featured: false,
    cta: 'Elegir mensual',
    note: 'Flexibilidad para probar el ritmo.',
  },
  {
    name: 'Trimestral',
    price: '330.000',
    period: '3 meses',
    features: [
      'Clases ilimitadas en tu grupo',
      'Acceso a entrenamientos',
      'Asesoría personalizada',
      'Eventos internos',
      'Material de práctica en clase',
      'Evaluación de progreso mensual',
      '10% de ahorro frente al mes a mes',
    ],
    featured: true,
    cta: 'Elegir trimestral',
    note: 'El más elegido para sostener el hábito.',
  },
  {
    name: 'Anual',
    price: '1.200.000',
    period: 'año',
    features: [
      'Clases ilimitadas en tu grupo',
      'Asesoría personalizada',
      'Todos los eventos internos',
      'Material de práctica en clase',
      'Evaluación de progreso mensual',
      'Seminarios especiales',
      'Preparación para exámenes de grado',
      '20% de ahorro frente al mes a mes',
    ],
    featured: false,
    cta: 'Elegir anual',
    note: 'Para quien ya decidió el proceso.',
  },
];
