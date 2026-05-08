import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Award, Flag, Check } from 'lucide-react';
import type { TimelineKind, TimelineMilestone } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { ABOUT_TIMELINE } from '@/lib/data/about-timeline';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

const MONTHS = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const CARD_WIDTH = 320;
const CARD_GAP = 24;
const ONE_COPY_WIDTH = ABOUT_TIMELINE.length * CARD_WIDTH + (ABOUT_TIMELINE.length - 1) * CARD_GAP;

const KIND_META: Record<TimelineKind, { icon: typeof Sparkles; label: string }> = {
  founding: { icon: Sparkles, label: 'Inicio' },
  championship: { icon: Trophy, label: 'Campeonato' },
  recognition: { icon: Award, label: 'Reconocimiento' },
  milestone: { icon: Flag, label: 'Hito' },
};

function getKindMeta(m: TimelineMilestone) {
  return KIND_META[m.kind ?? 'milestone'];
}

export function AboutSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let rafId: number;
    let offset = 0;
    const speed = 0.4;

    function tick() {
      if (!pausedRef.current && el) {
        offset += speed;
        if (offset >= ONE_COPY_WIDTH) offset = 0;
        el.style.transform = `translateX(-${offset}px)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="academia"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundSecondary }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full"
        style={{
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)',
          background: `linear-gradient(to bottom right, ${COLORS.primary}1A, transparent)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nuestra Trayectoria"
          highlight="Trayectoria"
          subtitle="Desde Popayán: más de 100 estudiantes, títulos nacionales e internacionales y reconocimiento como Academia Revelación ITF 2025"
          isInView={isInView}
        />

        <div
          className="overflow-hidden -mx-4 md:-mx-6 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <motion.div
            ref={scrollRef}
            initial={false}
            className="flex gap-6 py-6 will-change-transform"
            style={{ width: ONE_COPY_WIDTH * 2 }}
            aria-label="Timeline de trayectoria con scroll automático"
          >
            {[1, 2].map((copy) => (
              <div key={copy} className="flex gap-6 flex-shrink-0" style={{ width: ONE_COPY_WIDTH }}>
                {ABOUT_TIMELINE.map((milestone, i) => (
                  <TimelineCard
                    key={`${copy}-${milestone.year}-${milestone.month ?? 0}-${i}`}
                    milestone={milestone}
                    index={i}
                    copy={copy}
                    isInView={isInView}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <p
          className="text-center mt-4 text-white/50"
          style={{ fontFamily: FONTS.body, fontSize: '13px' }}
        >
          Pasa el cursor para detener · Desliza para explorar
        </p>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  milestone: TimelineMilestone;
  index: number;
  copy: number;
  isInView: boolean;
}

function TimelineCard({ milestone, index, copy, isInView }: TimelineCardProps) {
  const { icon: KindIcon, label: kindLabel } = getKindMeta(milestone);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: ANIMATIONS.duration.fast,
        delay: (copy - 1) * ABOUT_TIMELINE.length * ANIMATIONS.delay.stagger + index * ANIMATIONS.delay.stagger,
      }}
      whileHover={{ y: -6 }}
      className="group relative flex-shrink-0 snap-start"
      style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH }}
    >
      {/* Glow rojo en hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at 50% 0%, ${COLORS.primary}33, transparent 60%)`,
        }}
        aria-hidden
      />

      <div
        className="relative h-full overflow-hidden border border-white/10 transition-colors duration-300 group-hover:border-white/25"
        style={{
          background: `linear-gradient(160deg, ${COLORS.background} 0%, ${COLORS.backgroundSecondary} 100%)`,
        }}
      >
        {/* Stripe vertical roja izquierda */}
        <div
          className="absolute inset-y-0 left-0 w-[3px] transition-all duration-300 group-hover:w-[5px]"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.primary}, ${COLORS.primaryDark})`,
            boxShadow: `0 0 14px ${COLORS.primary}66`,
          }}
          aria-hidden
        />

        {/* Esquina decorativa superior derecha */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-20 h-20"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${COLORS.primary}1F 50%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2"
          style={{ borderColor: COLORS.primary }}
          aria-hidden
        />

        {/* Header: año badge + tipo */}
        <header className="relative px-6 pt-8 pb-4 flex items-start justify-between gap-3">
          <div>
            <div
              className="leading-none"
              style={{
                fontFamily: FONTS.heading,
                fontSize: '52px',
                letterSpacing: '1px',
                background: `linear-gradient(135deg, #ffffff 0%, ${COLORS.primary} 120%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {milestone.year}
            </div>
            {milestone.month && (
              <div
                className="mt-1 inline-flex items-center gap-1.5 text-white/70"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '12px',
                  letterSpacing: '2px',
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS.primary }}
                  aria-hidden
                />
                {MONTHS[milestone.month].toUpperCase()}
              </div>
            )}
          </div>

          <div
            className="flex flex-col items-center gap-1.5"
            aria-label={kindLabel}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                borderColor: COLORS.primary,
                background: `radial-gradient(circle at 30% 30%, ${COLORS.primary}33, transparent 70%)`,
                boxShadow: `0 0 0 4px ${COLORS.background}, 0 0 18px ${COLORS.primary}55`,
              }}
            >
              <KindIcon className="w-5 h-5 text-white" aria-hidden />
            </div>
            <span
              className="px-2 py-0.5 text-[10px] uppercase tracking-[1.5px] text-white/70"
              style={{
                fontFamily: FONTS.heading,
                backgroundColor: `${COLORS.primary}1A`,
                border: `1px solid ${COLORS.primary}40`,
              }}
            >
              {kindLabel}
            </span>
          </div>
        </header>

        {/* Divider con acento */}
        <div className="px-6">
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(to right, ${COLORS.primary}, transparent)`,
            }}
            aria-hidden
          />
        </div>

        {/* Body */}
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
          <h3
            className="text-white"
            style={{
              fontFamily: FONTS.heading,
              fontSize: '22px',
              lineHeight: '1.15',
              letterSpacing: '0.5px',
            }}
          >
            {milestone.title}
          </h3>

          {milestone.description && (
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: '13.5px',
                lineHeight: '1.6',
                color: COLORS.textSecondary,
              }}
            >
              {milestone.description}
            </p>
          )}

          <ul className="flex flex-col gap-2 pt-1">
            {milestone.achievements.map((a, j) => (
              <li
                key={j}
                className="flex items-start gap-2.5"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: COLORS.textSecondary,
                }}
              >
                <span
                  className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${COLORS.primary}22`,
                    border: `1px solid ${COLORS.primary}66`,
                  }}
                  aria-hidden
                >
                  <Check className="w-2.5 h-2.5" style={{ color: COLORS.primary }} />
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
