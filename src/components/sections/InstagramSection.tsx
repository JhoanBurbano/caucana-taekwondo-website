import { memo } from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_IFRAME_EMBED_URL,
  INSTAGRAM_PROFILE_URL,
} from '@/lib/constants/social';
import { analytics } from '@/lib/utils/analytics';

export const InstagramSection = memo(function InstagramSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section id="instagram" ref={ref} className="section-y bg-black" aria-label={`Instagram ${INSTAGRAM_HANDLE}`}>
      <div className="container-page">
        <SectionTitle
          eyebrow="Comunidad"
          title="El dojang también se vive afuera"
          subtitle="Entrenamientos, viajes y competencias, directo desde nuestro Instagram."
          isInView={isInView}
        />

        <div className="mx-auto max-w-2xl overflow-hidden rounded-card border border-white/10 bg-surface-grouped">
          {/* Barra de marca: da contexto y cose el embed blanco con la sección oscura */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-light">
              <Instagram className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-semibold text-white">{INSTAGRAM_HANDLE}</span>
              <span className="block text-[12px] text-white/50">Perfil oficial de la academia</span>
            </span>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex min-h-tap items-center gap-1.5 rounded-control px-3 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
            >
              Abrir
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/*
            El embed de Instagram se pinta sobre fondo blanco y es cross-origin,
            así que no se le puede aplicar el tema del sitio por dentro. Se integra
            enmarcándolo: tarjeta oscura, borde de marca y cabecera propia.
          */}
          <iframe
            title={`Publicaciones recientes de ${INSTAGRAM_HANDLE} en Instagram`}
            src={INSTAGRAM_IFRAME_EMBED_URL}
            className="block h-[540px] w-full border-0 bg-white sm:h-[620px]"
            loading="lazy"
            scrolling="no"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="border-t border-white/10 px-4 py-3 text-center text-[12px] text-white/45">
            ¿No ves las publicaciones?{' '}
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-light hover:underline"
            >
              Ábrelas en Instagram
            </a>
            .
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.socialClick('instagram', INSTAGRAM_PROFILE_URL)}
            className="btn-secondary inline-flex"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            Seguir {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
});
