import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Medal, Trophy, Users, Quote } from 'lucide-react';
import type { MaestroHighlightIcon } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MAESTRO, MAESTRO_PHOTO_SRC } from '@/lib/data/maestro';
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
      <div className="absolute inset-0 opacity-5" aria-hidden>
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
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-[minmax(220px,2fr)_minmax(0,3fr)] border border-white/15 overflow-hidden"
          style={{ backgroundColor: COLORS.backgroundSecondary }}
        >
          <PortraitColumn name={m.name} src={MAESTRO_PHOTO_SRC} />

          <div className="px-6 py-8 sm:px-8 md:px-10 md:py-10 flex flex-col gap-6 lg:gap-7">
            <header className="flex flex-col gap-2">
              <span
                className="inline-flex items-center gap-2 self-start px-2.5 py-1 text-[11px] uppercase tracking-[2px] text-white/85"
                style={{
                  fontFamily: FONTS.heading,
                  backgroundColor: `${COLORS.primary}1F`,
                  border: `1px solid ${COLORS.primary}55`,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: COLORS.primary }}
                  aria-hidden
                />
                Director
              </span>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(28px, 4.5vw, 44px)',
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
              <div
                className="mt-2 h-px w-16"
                style={{ background: `linear-gradient(to right, ${COLORS.primary}, transparent)` }}
                aria-hidden
              />
            </header>

            <div className="space-y-3">
              <p
                className="text-white/90"
                style={{ fontFamily: FONTS.body, fontSize: '15px', lineHeight: '1.7' }}
              >
                {m.narrative}
              </p>
              <p
                className="text-white/70"
                style={{ fontFamily: FONTS.body, fontSize: '14px', lineHeight: '1.65' }}
              >
                {m.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Disciplinas y rangos">
              {m.disciplines.map((d) => (
                <span
                  key={d.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-[13px] text-white/85"
                  style={{
                    fontFamily: FONTS.body,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span
                    className="text-white"
                    style={{ fontFamily: FONTS.heading, letterSpacing: '0.5px' }}
                  >
                    {d.name}
                  </span>
                  <span className="text-white/40" aria-hidden>·</span>
                  <span style={{ color: COLORS.primary }}>{d.rank}</span>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {m.highlights.map((h) => {
                const Icon = HIGHLIGHT_ICONS[h.icon];
                return (
                  <div
                    key={h.label}
                    className="flex flex-col items-center text-center gap-2 p-3 transition-colors duration-300 hover:bg-white/[0.03]"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: COLORS.primary,
                        background: `radial-gradient(circle at 30% 30%, ${COLORS.primary}33, transparent 70%)`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" aria-hidden />
                    </div>
                    <span
                      className="text-white/80 leading-snug"
                      style={{ fontFamily: FONTS.body, fontSize: '11.5px', lineHeight: '1.35' }}
                    >
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className="relative px-5 py-5 sm:px-6 sm:py-6"
              style={{
                background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundSecondary} 100%)`,
                borderLeft: `3px solid ${COLORS.primary}`,
              }}
            >
              <Quote
                className="absolute top-3 right-3 opacity-15"
                style={{ width: 36, height: 36, color: COLORS.primary }}
                aria-hidden
              />
              <blockquote
                className="text-white/90 italic"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 'clamp(14px, 1.6vw, 17px)',
                  lineHeight: '1.6',
                }}
              >
                &ldquo;{m.quote}&rdquo;
              </blockquote>
            </div>

            <p
              className="text-center text-white/45 text-xs md:text-sm pt-1"
              style={{ fontFamily: FONTS.body }}
            >
              {m.footerPillars.join(' · ')}
            </p>

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

interface PortraitColumnProps {
  name: string;
  src: string;
}

/** Foto vertical: aspect-[4/5] solo en mobile (<sm), h-full estirada desde sm+. */
function PortraitColumn({ name, src }: PortraitColumnProps) {
  return (
    <div className="relative w-full bg-black aspect-[4/5] sm:aspect-auto sm:h-full sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px]">
      <img
        src={src}
        alt={`${name} - Director de la Academia Caucana`}
        width={2048}
        height={2560}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{ background: `linear-gradient(to right, transparent 70%, ${COLORS.backgroundSecondary} 100%)` }}
        aria-hidden
      />

      <div
        className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 z-10 pointer-events-none"
        style={{ borderColor: COLORS.primary }}
        aria-hidden
      />
      <div
        className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 z-10 pointer-events-none"
        style={{ borderColor: COLORS.primary }}
        aria-hidden
      />

      <div className="absolute bottom-4 left-4 right-4 sm:hidden z-10">
        <span
          className="inline-block px-2.5 py-1 text-[11px] uppercase tracking-[2px] text-white/90"
          style={{
            fontFamily: FONTS.heading,
            backgroundColor: `${COLORS.primary}33`,
            border: `1px solid ${COLORS.primary}66`,
            backdropFilter: 'blur(4px)',
          }}
        >
          Director
        </span>
      </div>
    </div>
  );
}
