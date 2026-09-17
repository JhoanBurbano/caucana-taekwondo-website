export const CONTACT = {
  phoneDisplay: '+57 317 244 7000',
  phoneTel: '+573172447000',
  whatsapp: '573172447000',
  email: 'info@www.caucanadetaekwondo.com',
  addressLine: 'Transversal 9A # 55N-30',
  addressArea: 'Vía al Bosque · sector Montelugano',
  city: 'Popayán, Cauca',
  country: 'Colombia',
  /** Coordenadas exactas del dojang (Google Maps). Se usan para centrar el mapa. */
  coords: { lat: 2.483163, lng: -76.578619 },
} as const;

export const WHATSAPP_MESSAGES = {
  trial:
    'Hola, quiero reservar una clase de prueba gratis en Academia Caucana de Taekwondo ITF.',
  info: 'Hola, me interesa información sobre clases de Taekwondo ITF en Academia Caucana.',
  question: 'Hola, tengo una pregunta sobre Academia Caucana.',
} as const;

export function whatsappUrl(message: string = WHATSAPP_MESSAGES.info): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Mapa centrado en las coordenadas exactas: la búsqueda por texto no siempre
 * resuelve bien una dirección de nomenclatura "55N" en la zona norte.
 */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${CONTACT.coords.lat},${CONTACT.coords.lng}&z=17&output=embed`;

export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${CONTACT.coords.lat}%2C${CONTACT.coords.lng}`;
