import { motion } from 'motion/react';
import { Trophy, Target, Shield } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { OptimizedImage } from '@/shared/OptimizedImage';
import { getImageUrl, getAssetAlt } from '@/lib/assets';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export function AboutSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.3 });

  return (
    <section
      id="academia"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundSecondary }}
    >
      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br to-transparent"
        style={{
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)',
          background: `linear-gradient(to bottom right, ${COLORS.primary}1A, transparent)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nuestro Legado de Excelencia"
          highlight="Excelencia"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: ANIMATIONS.duration.normal, delay: 0.2 }}
          >
            <p className="mb-6" style={{ fontFamily: FONTS.body, fontSize: '18px', lineHeight: '1.8', color: COLORS.textSecondary }}>
              En la Academia Caucana de Taekwondo ITF, formamos guerreros con valores inquebrantables.
              Nuestra misión es desarrollar no solo habilidades físicas excepcionales, sino también
              fortalecer el carácter, la disciplina y el honor de cada estudiante.
            </p>
            <p className="mb-8" style={{ fontFamily: FONTS.body, fontSize: '18px', lineHeight: '1.8', color: COLORS.textSecondary }}>
              Con más de una década de experiencia, hemos cultivado campeones nacionales y formado
              personas íntegras que llevan los principios del Taekwondo ITF más allá del tatami.
            </p>

            {/* Highlight Box */}
            <div className="bg-black p-6 mb-8" style={{ borderLeftWidth: '4px', borderLeftColor: COLORS.primary }}>
              <div className="mb-2" style={{ fontFamily: FONTS.heading, fontSize: '48px', lineHeight: '1', color: COLORS.primary }}>
                +10 Años
              </div>
              <p style={{ fontFamily: FONTS.body, color: COLORS.textPrimary }}>
                Formando campeones nacionales
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="w-10 h-10 mx-auto mb-2" style={{ color: COLORS.primary }} />
                <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px' }}>
                  Valor
                </div>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 mx-auto mb-2" style={{ color: COLORS.primary }} />
                <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px' }}>
                  Disciplina
                </div>
              </div>
              <div className="text-center">
                <Trophy className="w-10 h-10 mx-auto mb-2" style={{ color: COLORS.primary }} />
                <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px' }}>
                  Poder
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: ANIMATIONS.duration.normal, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <OptimizedImage
                src={getImageUrl('about-training')}
                alt={getAssetAlt('about-training')}
                className="w-full h-full"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Red overlay on hover */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${COLORS.primary}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              />
            </div>
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-20 h-20"
              style={{ borderTopWidth: '4px', borderRightWidth: '4px', borderColor: COLORS.primary }}
            />
            <div
              className="absolute bottom-0 left-0 w-20 h-20"
              style={{ borderBottomWidth: '4px', borderLeftWidth: '4px', borderColor: COLORS.primary }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
