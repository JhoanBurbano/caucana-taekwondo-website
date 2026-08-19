import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 material-nav px-4 pt-3 lg:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a href="#inscripciones" className="btn-primary min-h-12 flex-1 text-[15px]">
          Clase de prueba gratis
        </a>
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-control bg-[#25D366] text-white"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
        </a>
      </div>
    </div>
  );
}
