import { memo } from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MAESTRO } from '@/lib/data/maestro';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { OptimizedImage } from '@/shared/OptimizedImage';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export const CoachesSection = memo(function CoachesSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });
  const m = MAESTRO;

  return (
    <section
      id="instructores"
      ref={ref}
      className="py-14 md:py-16 relative overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        backgroundImage: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundSecondary} 50%, ${COLORS.background} 100%)`,
      }}
    >
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
          title="Nuestro Maestro"
          highlight="Maestro"
          subtitle="La experiencia y el compromiso detrás de nuestra academia"
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: ANIMATIONS.duration.normal }}
          className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-stretch max-w-6xl mx-auto"
        >
          {/* Foto del maestro - más pequeña, sección horizontal */}
          <div className="flex-shrink-0 w-full max-w-[140px] md:max-w-[160px]">
            <div className="relative overflow-hidden" style={{ backgroundColor: COLORS.backgroundSecondary }}>
              <div className="aspect-[3/4] overflow-hidden relative">
                <OptimizedImage
                  src={getImageUrl(m.image)}
                  alt={`${m.name} - Maestro de la Academia Caucana de Taekwondo ITF`}
                  className="w-full h-full object-cover object-center"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
              </div>
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: COLORS.primary }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: COLORS.primary }}
              />
            </div>
          </div>

          {/* Biografía, disciplinas y logros - ocupa el resto en horizontal */}
          <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <h2
              className="text-white lg:col-span-3"
              style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '1px' }}
            >
              {m.name}
            </h2>

            {/* Biografía deportiva */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5" style={{ color: COLORS.primary }} aria-hidden />
                <h3
                  className="text-white"
                  style={{ fontFamily: FONTS.heading, fontSize: '18px', letterSpacing: '1px' }}
                >
                  Biografía deportiva
                </h3>
              </div>
              <p
                className="text-white/90"
                style={{ fontFamily: FONTS.body, fontSize: '16px', lineHeight: '1.75' }}
              >
                {m.bio}
              </p>
            </div>

            {/* Disciplinas y rangos */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5" style={{ color: COLORS.primary }} aria-hidden />
                <h3
                  className="text-white"
                  style={{ fontFamily: FONTS.heading, fontSize: '18px', letterSpacing: '1px' }}
                >
                  Disciplinas y rangos
                </h3>
              </div>
              <ul className="space-y-2">
                {m.disciplines.map((d) => (
                  <li
                    key={d.name}
                    className="flex justify-between items-baseline gap-4 py-2 border-b border-white/10"
                    style={{ fontFamily: FONTS.body, fontSize: '15px' }}
                  >
                    <span className="text-white/90">{d.name}</span>
                    <span className="text-white font-medium" style={{ color: COLORS.primary }}>
                      {d.rank}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logros deportivos */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5" style={{ color: COLORS.primary }} aria-hidden />
                <h3
                  className="text-white"
                  style={{ fontFamily: FONTS.heading, fontSize: '18px', letterSpacing: '1px' }}
                >
                  Logros deportivos
                </h3>
              </div>
              <ul className="space-y-2">
                {m.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{ fontFamily: FONTS.body, fontSize: '15px', color: COLORS.textSecondary }}
                  >
                    <span className="text-red-500 mt-1.5" style={{ color: COLORS.primary }} aria-hidden>
                      •
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
