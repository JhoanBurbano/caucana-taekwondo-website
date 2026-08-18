export const CONTACT = {
  phoneDisplay: '+57 312 456 7890',
  phoneTel: '+573124567890',
  whatsapp: '573124567890',
  email: 'info@academiacaucana.com',
  addressLine: 'Calle 5 #10-25',
  city: 'Popayán, Cauca',
  country: 'Colombia',
  mapsQuery: 'Calle 5 #10-25, Popayán, Cauca, Colombia',
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

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT.mapsQuery,
)}&z=16&output=embed`;

export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.mapsQuery,
)}`;
