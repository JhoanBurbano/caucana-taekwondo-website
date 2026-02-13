import { memo } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { COACHES } from '@/lib/data/coaches';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { OptimizedImage } from '@/shared/OptimizedImage';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export const CoachesSection = memo(function CoachesSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section
      id="instructores"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        backgroundImage: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundSecondary} 50%, ${COLORS.background} 100%)`,
      }}
    >
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, ${COLORS.primary} 35px, ${COLORS.primary} 70px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nuestros Maestros"
          highlight="Maestros"
          subtitle="Guiados por expertos comprometidos con la excelencia y el desarrollo de cada guerrero"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COACHES.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATIONS.duration.normal, delay: index * ANIMATIONS.delay.stagger }}
              className="group"
            >
              <div className="overflow-hidden relative" style={{ backgroundColor: COLORS.backgroundSecondary }}>
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <OptimizedImage
                    src={getImageUrl(coach.image)}
                    alt={`${coach.name}, ${coach.rank} - ${coach.bio}`}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{ aspectRatio: '3/4' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                  {/* Rank badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 flex items-center gap-1"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '14px' }}>
                      {coach.rank}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: FONTS.heading, fontSize: '24px', letterSpacing: '1px' }}
                  >
                    {coach.name}
                  </h3>
                  <p className="mb-4" style={{ fontFamily: FONTS.body, fontSize: '14px', lineHeight: '1.6', color: COLORS.textSecondary }}>
                    {coach.bio}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '16px',
                      borderRadius: '0',
                      borderColor: COLORS.primary,
                      color: COLORS.primary,
                    }}
                  >
                    Ver Perfil
                  </Button>
                </div>

                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: COLORS.primary }}
                />
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: COLORS.primary }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
