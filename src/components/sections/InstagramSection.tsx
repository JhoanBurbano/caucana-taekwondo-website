import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { COLORS, FONTS } from '@/lib/constants/theme';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_IFRAME_EMBED_URL,
  INSTAGRAM_PROFILE_URL,
} from '@/lib/constants/social';

export const InstagramSection = memo(function InstagramSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section
      id="instagram"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundTertiary }}
      aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Síguenos en Instagram"
          highlight="Instagram"
          subtitle="Entrenamientos, eventos y vida de la academia en tiempo real"
          isInView={isInView}
        />

        <div className="max-w-[540px] mx-auto">
          <div
            className="rounded-lg overflow-hidden border border-white/15 shadow-lg"
            style={{ backgroundColor: COLORS.backgroundSecondary }}
          >
            {/*
              Alto fijo en píxeles: sin height el iframe suele colapsar y “no se ve”.
              Si el perfil se ve vacío, cambia INSTAGRAM_IFRAME_EMBED_URL a una URL de post: …/p/CODIGO/embed/
            */}
            <iframe
              title={`${INSTAGRAM_HANDLE} en Instagram`}
              src={INSTAGRAM_IFRAME_EMBED_URL}
              width={540}
              height={720}
              className="block w-full border-0 bg-black"
              style={{ height: 720, maxWidth: '100%' }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
          </div>

          <p
            className="text-center mt-4 text-white/50 text-sm leading-relaxed"
            style={{ fontFamily: FONTS.body }}
          >
            Si el cuadro sale en blanco o solo con enlace, en Instagram abre un post → <strong>⋯</strong> →{' '}
            <strong>Insertar</strong> y copia la URL que termina en{' '}
            <code className="text-white/70 text-xs">/embed/</code>; sustituye{' '}
            <code className="text-white/70 text-xs">INSTAGRAM_IFRAME_EMBED_URL</code> en{' '}
            <code className="text-white/70 text-xs">src/lib/constants/social.ts</code>.
          </p>

          <div className="flex justify-center mt-6">
            <Button
              asChild
              className="text-white px-8 py-6 shadow-lg shadow-red-900/40"
              style={{
                fontFamily: FONTS.heading,
                fontSize: '18px',
                letterSpacing: '1px',
                borderRadius: 0,
                background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
              }}
            >
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>Abrir {INSTAGRAM_HANDLE}</span>
                <ExternalLink className="w-5 h-5" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});
