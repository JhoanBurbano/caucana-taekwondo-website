import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Medal, Trophy, Users, Quote } from 'lucide-react';
import type { MaestroHighlightIcon } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MAESTRO, MAESTRO_PHOTO_SRC } from '@/lib/data/maestro';
import { COACHES } from '@/lib/data/coaches';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { FONTS } from '@/lib/constants/theme';

const HIGHLIGHT_ICONS: Record<MaestroHighlightIcon, typeof Star> = {
  star: Star,
  medal: Medal,
  trophy: Trophy,
  users: Users,
};

export const CoachesSection = memo(function CoachesSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });
  const m = MAESTRO;

  return (
    <section id="instructores" ref={ref} className="section-y bg-black">
      <div className="container-page">
        <SectionTitle
          eyebrow="Equipo"
          title="Quién te espera en el dojang"
          subtitle="Un director con palmarés internacional y un cuerpo técnico certificado para cada etapa."
          isInView={isInView}
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="overflow-hidden rounded-card border border-white/10 bg-surface-grouped lg:grid lg:grid-cols-[minmax(280px,0.9fr)_1.2fr]"
        >
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
            <img
              src={MAESTRO_PHOTO_SRC}
              alt={`${m.name}, director de la Academia Caucana`}
              width={2048}
              height={2560}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface-grouped" />
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
            <header>
              <p className="mb-2 inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-light">
                Director
              </p>
              <h3
                className="text-white"
                style={{ fontFamily: FONTS.heading, fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', letterSpacing: '0.03em' }}
              >
                {m.name}
              </h3>
              <p className="mt-1 text-[15px] text-white/70">{m.roleSubtitle}</p>
            </header>

            <p className="text-[15px] leading-relaxed text-white/85">{m.narrative}</p>
            <p className="text-[14px] leading-relaxed text-white/60">{m.bio}</p>

            <div className="flex flex-wrap gap-2">
              {m.disciplines.map((d) => (
                <span
                  key={d.name}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/80"
                >
                  {d.name} · <span className="text-brand-light">{d.rank}</span>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {m.highlights.map((h) => {
                const Icon = HIGHLIGHT_ICONS[h.icon];
                return (
                  <div key={h.label} className="rounded-2xl border border-white/8 p-3 text-center">
                    <Icon className="mx-auto mb-2 h-5 w-5 text-brand" aria-hidden />
                    <p className="text-[12px] leading-snug text-white/75">{h.label}</p>
                  </div>
                );
              })}
            </div>

            <blockquote className="relative rounded-2xl border-l-[3px] border-brand bg-black/40 px-5 py-4">
              <Quote className="absolute right-3 top-3 h-7 w-7 text-brand/20" aria-hidden />
              <p className="text-[16px] italic leading-relaxed text-white/90">“{m.quote}”</p>
            </blockquote>

            <p className="text-center text-[13px] text-white/45">{m.footerPillars.join(' · ')}</p>

            <ul className="sr-only">
              {m.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </motion.article>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach, i) => (
            <motion.article
              key={coach.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="overflow-hidden rounded-card border border-white/10 bg-surface-grouped"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={getImageUrl(coach.image)}
                  alt={`${coach.name}, ${coach.rank}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 20 }}>
                  {coach.name}
                </h4>
                <p className="mb-2 text-[13px] text-brand-light">{coach.rank}</p>
                <p className="text-[13px] leading-relaxed text-white/65">{coach.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
});
