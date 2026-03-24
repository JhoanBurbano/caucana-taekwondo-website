import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Medal, Trophy, Users } from 'lucide-react';
import type { MaestroHighlightIcon } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MAESTRO } from '@/lib/data/maestro';
import { getImageUrl } from '@/lib/assets';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

const HIGHLIGHT_ICONS: Record<MaestroHighlightIcon, typeof Star> = {
  star: Star,
  medal: Medal,
  trophy: Trophy,
  users: Users,
};

export const CoachesSection = memo(function CoachesSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });
  const m = MAESTRO;

  return (
    <section
      id="instructores"
      ref={ref}
      className="py-14 md:py-20 relative overflow-hidden"
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
        <motion.article
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: ANIMATIONS.duration.normal }}
          className="max-w-5xl mx-auto border border-white/15 overflow-hidden flex flex-col md:flex-row md:min-h-[420px]"
          style={{ backgroundColor: COLORS.backgroundSecondary }}
        >
          {/* Columna imagen ~40% — estilo landing, borde acento tipo esquinas */}
          <div className="relative w-full md:w-[40%] min-h-[300px] md:min-h-[420px] shrink-0">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
              }}
            >
              {/* img nativo: OptimizedImage con lazy + posición absoluta dejaba altura 0 y no disparaba la carga */}
              <img
                src={getImageUrl(m.image)}
                alt={`${m.name} - Director y maestro de la Academia Caucana`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/35 pointer-events-none" />
            </div>
            <div
              className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 z-10 pointer-events-none"
              style={{ borderColor: COLORS.primary }}
            />
            <div
              className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 z-10 pointer-events-none"
              style={{ borderColor: COLORS.primary }}
            />
          </div>

          {/* Columna contenido ~60% */}
          <div className="w-full md:w-[60%] px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center gap-6">
            <header>
              <p
                className="text-white/60 mb-1"
                style={{ fontFamily: FONTS.heading, fontSize: '14px', letterSpacing: '2px' }}
              >
                NUESTRO MAESTRO
              </p>
              <h2
                className="mb-2"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  letterSpacing: '1px',
                  color: COLORS.primary,
                }}
              >
                {m.name}
              </h2>
              <p
                className="text-white/80 italic"
                style={{ fontFamily: FONTS.body, fontSize: '15px' }}
              >
                {m.roleSubtitle}
              </p>
            </header>

            <div className="space-y-3">
              <p
                className="text-white/90"
                style={{ fontFamily: FONTS.body, fontSize: '15px', lineHeight: '1.7' }}
              >
                {m.narrative}
              </p>
              <p
                className="text-white/75"
                style={{ fontFamily: FONTS.body, fontSize: '14px', lineHeight: '1.65' }}
              >
                {m.bio}
              </p>
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: FONTS.body }}
              >
                {m.disciplines.map((d) => `${d.name}: ${d.rank}`).join(' · ')}
              </p>
            </div>

            {/* Cuatro destacados en fila */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {m.highlights.map((h) => {
                const Icon = HIGHLIGHT_ICONS[h.icon];
                return (
                  <div key={h.label} className="flex flex-col items-center text-center gap-2">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: COLORS.primary, backgroundColor: `${COLORS.primary}22` }}
                    >
                      <Icon className="w-6 h-6 text-white" aria-hidden />
                    </div>
                    <span
                      className="text-white/85 leading-snug"
                      style={{ fontFamily: FONTS.body, fontSize: '12px', lineHeight: '1.35' }}
                    >
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-white/10 pt-6">
              <blockquote
                className="text-center text-white/90 italic mb-3"
                style={{ fontFamily: FONTS.body, fontSize: '16px', lineHeight: '1.6' }}
              >
                &ldquo;{m.quote}&rdquo;
              </blockquote>
              <div className="flex justify-center" aria-hidden>
                <span style={{ color: COLORS.primary, fontSize: '18px' }}>♦</span>
              </div>
            </div>

            <p
              className="text-center text-white/45 text-xs md:text-sm pt-2"
              style={{ fontFamily: FONTS.body }}
            >
              {m.footerPillars.join(' | ')}
            </p>

            {/* Logros completos accesibles / SEO */}
            <ul className="sr-only">
              {m.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
});
