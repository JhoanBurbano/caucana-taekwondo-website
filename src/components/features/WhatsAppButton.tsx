import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(WHATSAPP_MESSAGES.info)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sheet transition-transform duration-200 ease-apple hover:scale-105 lg:flex"
      style={{
        right: 'max(1.5rem, env(safe-area-inset-right))',
        bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
      }}
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
