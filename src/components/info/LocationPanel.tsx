import { Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { CONTACT, MAPS_EMBED_URL, MAPS_OPEN_URL } from '@/lib/data/contact';
import { analytics } from '@/lib/utils/analytics';

export function LocationPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-4">
        <div className="rounded-card border border-white/10 bg-black/40 p-5">
          <p className="mb-1 flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/45">
            <MapPin className="h-4 w-4 text-brand" aria-hidden /> Dirección
          </p>
          <p className="text-[17px] text-white">
            {CONTACT.addressLine}
            <br />
            {CONTACT.addressArea}
            <br />
            {CONTACT.city}
          </p>
        </div>

        <div className="rounded-card border border-white/10 bg-black/40 p-5">
          <p className="mb-1 flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/45">
            <Phone className="h-4 w-4 text-brand" aria-hidden /> Teléfono
          </p>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            onClick={() => analytics.phoneClick('tab_ubicacion')}
            className="text-[17px] text-white hover:text-brand-light"
          >
            {CONTACT.phoneDisplay}
          </a>
          <p className="mt-1 text-[13px] text-white/45">Atendemos por mensaje, no por llamada.</p>
        </div>

        <div className="rounded-card border border-white/10 bg-black/40 p-5">
          <p className="mb-1 flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/45">
            <Mail className="h-4 w-4 text-brand" aria-hidden /> Correo
          </p>
          <a href={`mailto:${CONTACT.email}`} className="text-[17px] text-white hover:text-brand-light">
            {CONTACT.email}
          </a>
        </div>

        <a
          href={MAPS_OPEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.ctaClick('Cómo llegar', 'tab_ubicacion')}
          className="btn-secondary w-full"
        >
          <Navigation className="h-4 w-4" aria-hidden />
          Cómo llegar
        </a>
      </div>

      <div className="overflow-hidden rounded-card border border-white/10">
        <iframe
          title="Mapa de la Academia Caucana en Popayán"
          src={MAPS_EMBED_URL}
          className="h-[320px] w-full border-0 lg:h-full lg:min-h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
