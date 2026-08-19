import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { CONTACT, MAPS_EMBED_URL, MAPS_OPEN_URL } from '@/lib/data/contact';

export function LocationSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section id="contacto" ref={ref} className="section-y bg-surface-grouped">
      <div className="container-page">
        <SectionTitle
          eyebrow="Visítanos"
          title="El dojang está en el centro de Popayán"
          subtitle="Agenda tu clase de prueba y llega con ropa cómoda. Te recibimos y te ubicamos en tu grupo."
          isInView={isInView}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-card border border-white/10 bg-black/40 p-5">
              <p className="mb-1 flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/45">
                <MapPin className="h-4 w-4 text-brand" aria-hidden /> Dirección
              </p>
              <p className="text-[17px] text-white">
                {CONTACT.addressLine}
                <br />
                {CONTACT.city}
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-black/40 p-5">
              <p className="mb-1 flex items-center gap-2 text-[13px] uppercase tracking-wider text-white/45">
                <Phone className="h-4 w-4 text-brand" aria-hidden /> Teléfono
              </p>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-[17px] text-white hover:text-brand-light">
                {CONTACT.phoneDisplay}
              </a>
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
              className="btn-secondary w-full"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Cómo llegar
            </a>
          </div>

          <div className="overflow-hidden rounded-card border border-white/10">
            <iframe
              title="Mapa de Academia Caucana en Popayán"
              src={MAPS_EMBED_URL}
              className="h-[320px] w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
