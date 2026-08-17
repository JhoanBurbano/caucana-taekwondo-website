import { MessageCircle } from 'lucide-react';
import { COLORS } from '@/lib/constants/theme';

const WHATSAPP_NUMBER = '573124567890';
const DEFAULT_MESSAGE = 'Hola, me interesa información sobre clases de Taekwondo ITF en Academia Caucana';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40 group"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="text-sm font-medium">Chatea con nosotros</span>
      </div>
    </a>
  );
}
