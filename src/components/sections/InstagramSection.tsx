import { memo } from 'react';
import { Instagram } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from '@/lib/constants/social';
import { GALLERY_ITEMS } from '@/lib/data/gallery';
import { getImageUrl } from '@/lib/assets';

export const InstagramSection = memo(function InstagramSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section id="instagram" ref={ref} className="section-y bg-black" aria-label={`Instagram ${INSTAGRAM_HANDLE}`}>
      <div className="container-page">
        <SectionTitle
          eyebrow="Comunidad"
          title="El dojang también se vive afuera"
          subtitle="Entrenamientos, viajes y competencias. Síguenos y ve el proceso en tiempo real."
          isInView={isInView}
        />

        <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {GALLERY_ITEMS.map((item) => (
            <a
              key={item.title}
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={getImageUrl(item.image)}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="sr-only">Ver {INSTAGRAM_HANDLE} en Instagram</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
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
