import { memo, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Medal } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/data/gallery';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { FONTS } from '@/lib/constants/theme';

export const GallerySection = memo(function GallerySection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="galeria" ref={ref} className="section-y bg-black">
      <div className="container-page">
        <SectionTitle
          eyebrow="Portafolio"
          title="Logros que se pueden ver"
          subtitle="Los podios de la academia, del resultado más reciente al primero."
          isInView={isInView}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-card"
            >
              <button
                type="button"
                className="absolute inset-0 z-10 text-left"
                onClick={() => setActive(index)}
                aria-label={`Ampliar: ${item.title}`}
              />
              <img
                src={getImageUrl(item.image)}
                alt={`${item.title}${item.result ? ` — ${item.result}` : ''}. ${item.category}.`}
                className="h-full w-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                loading="lazy"
              />
              {item.result && (
                <p className="absolute right-3 top-3 z-[5] inline-flex items-center gap-1.5 rounded-full border border-brand/50 bg-black/70 px-3 py-1.5 text-[12px] font-semibold text-brand-light backdrop-blur-md">
                  <Medal className="h-3.5 w-3.5" aria-hidden />
                  {item.result}
                </p>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-16">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-light">{item.category}</p>
                <h3 className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 22 }}>
                  {item.title}
                </h3>
                {item.place && <p className="mt-0.5 text-[13px] text-white/60">{item.place}</p>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY_ITEMS[active].title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <img
            src={getImageUrl(GALLERY_ITEMS[active].image)}
            alt={GALLERY_ITEMS[active].title}
            className="max-h-[80vh] max-w-full rounded-card object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
});
