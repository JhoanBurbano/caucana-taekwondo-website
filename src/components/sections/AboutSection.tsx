import { Award, Check, Flag, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import type { TimelineKind, TimelineMilestone } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { ABOUT_TIMELINE } from '@/lib/data/about-timeline';
import { FONTS } from '@/lib/constants/theme';

const MONTHS = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const KIND_META: Record<TimelineKind, { icon: typeof Sparkles; label: string }> = {
  founding: { icon: Sparkles, label: 'Inicio' },
  championship: { icon: Trophy, label: 'Campeonato' },
  recognition: { icon: Award, label: 'Reconocimiento' },
  milestone: { icon: Flag, label: 'Hito' },
};

export function AboutSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section id="academia" ref={ref} className="section-y bg-surface-grouped">
      <div className="container-page">
        <SectionTitle
          eyebrow="Nuestra historia"
          title="De un dojang en Popayán a un proceso que se ve"
          subtitle="Desde octubre de 2023: más de 100 estudiantes, títulos nacionales e internacionales y el sello Academia Revelación ITF 2025."
          isInView={isInView}
        />

        <ol className="relative mx-auto max-w-3xl space-y-4 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-white/10 sm:before:left-8">
          {ABOUT_TIMELINE.map((milestone, i) => (
            <TimelineItem key={`${milestone.year}-${milestone.month ?? 0}-${i}`} milestone={milestone} index={i} visible={isInView} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
  visible,
}: {
  milestone: TimelineMilestone;
  index: number;
  visible: boolean;
}) {
  const meta = KIND_META[milestone.kind ?? 'milestone'];
  const Icon = meta.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative pl-12 sm:pl-20"
    >
      <span className="absolute left-0 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/50 bg-black text-brand sm:left-3.5">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <article className="rounded-card border border-white/10 bg-black/40 p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <time className="text-[28px] leading-none text-white" style={{ fontFamily: FONTS.heading }}>
            {milestone.year}
            {milestone.month ? ` · ${MONTHS[milestone.month]}` : ''}
          </time>
          <span className="rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 text-[11px] uppercase tracking-wider text-brand-light">
            {meta.label}
          </span>
        </div>
        <h3 className="mb-2 text-white" style={{ fontFamily: FONTS.heading, fontSize: 22, letterSpacing: '0.04em' }}>
          {milestone.title}
        </h3>
        {milestone.description && (
          <p className="mb-3 text-[15px] leading-relaxed text-white/70">{milestone.description}</p>
        )}
        <ul className="space-y-1.5">
          {milestone.achievements.map((item) => (
            <li key={item} className="flex gap-2 text-[14px] text-white/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
