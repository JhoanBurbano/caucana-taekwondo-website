import { memo } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GALLERY_ITEMS } from '@/lib/data/gallery';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { OptimizedImage } from '@/shared/OptimizedImage';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export const GallerySection = memo(function GallerySection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section id="galeria" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Logros y Eventos"
          highlight="Eventos"
          subtitle="Celebrando nuestros triunfos y momentos memorables"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={`gallery-${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: ANIMATIONS.duration.fast, delay: index * ANIMATIONS.delay.stagger }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              role="article"
              aria-label={`${item.title} - ${item.category}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Aquí iría la acción de ver más detalles
                }
              }}
            >
              <OptimizedImage
                src={getImageUrl(item.image)}
                alt={`${item.title} - ${item.category} de la Academia Caucana de Taekwondo ITF`}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: '4/3' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span
                    className="inline-block px-3 py-1 bg-black/50"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '12px',
                      letterSpacing: '1px',
                      color: COLORS.primary,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: FONTS.heading, fontSize: '24px', letterSpacing: '1px' }}
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span style={{ fontFamily: FONTS.body, fontSize: '14px' }}>Ver más</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderTopWidth: '40px', borderTopColor: COLORS.primary }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
