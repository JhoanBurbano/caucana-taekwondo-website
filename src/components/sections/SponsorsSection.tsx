import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SPONSORS } from '@/lib/data/sponsors';
import { SectionTitle } from '@/shared/SectionTitle';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export function SponsorsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.3 });

  return (
    <section
      id="eventos"
      ref={ref}
      className="py-16"
      style={{ backgroundColor: COLORS.backgroundTertiary }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Aliados"
          highlight="Aliados"
          className="mb-12"
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: ANIMATIONS.duration.slow, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: ANIMATIONS.duration.fast, delay: index * ANIMATIONS.delay.stagger }}
              className="flex items-center justify-center p-6 bg-[#1A1A1A] hover:bg-[#D30000]/10 transition-colors duration-300 border border-white/5 group"
            >
              <div className="text-center">
                <div
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '32px',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.4)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)')}
                >
                  {sponsor.logo}
                </div>
                <div
                  className="transition-colors duration-300 mt-1"
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: '10px',
                    color: 'rgba(255, 255, 255, 0.2)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.2)')}
                >
                  {sponsor.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
