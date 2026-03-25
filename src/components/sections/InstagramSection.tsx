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
        </div>
      </div>
    </section>
  );
});
