import type { EnrollmentCost } from '../types';

/**
 * Costos de una sola vez al inscribirse, aparte de la mensualidad.
 *
 * Están separados de PRICING_PLANS a propósito: un plan se paga cada mes y esto se paga
 * una vez, así que mezclarlos en la misma tarjeta haría parecer que el primer mes cuesta
 * lo mismo que los siguientes.
 */
export const ENROLLMENT_COSTS: EnrollmentCost[] = [
  {
    id: 'matricula',
    name: 'Matrícula',
    price: '100.000',
    detail: 'Pago único al inscribirse. Solo aplica a Taekwondo ITF.',
    category: 'matricula',
  },
  {
    id: 'dobok',
    name: 'Uniforme oficial (dobok)',
    price: '250.000',
    detail: 'El uniforme de entrenamiento de Taekwon-Do ITF.',
    category: 'uniforme',
    orderable: true,
  },
  {
    id: 'conjunto',
    name: 'Sudadera y chaqueta rompevientos',
    price: '230.000',
    detail: 'Conjunto completo para viajes y competencias.',
    category: 'uniforme',
    optional: true,
    orderable: true,
  },
  {
    id: 'chaqueta',
    name: 'Solo la chaqueta rompevientos',
    price: '150.000',
    detail: 'Si prefieres llevar la chaqueta por separado.',
    category: 'uniforme',
    optional: true,
    orderable: true,
  },
];

/** Ruta del formulario de pedido de uniforme. */
export const UNIFORM_ORDER_PATH = '/uniforme-oficial/';

/** Solo los conceptos de uniforme, para el panel de Uniforme. */
export const UNIFORM_COSTS = ENROLLMENT_COSTS.filter((c) => c.category === 'uniforme');

/** La matrícula, que acompaña a los planes mensuales. */
export const MATRICULA = ENROLLMENT_COSTS.find((c) => c.category === 'matricula')!;
