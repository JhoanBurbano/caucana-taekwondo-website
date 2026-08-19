import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { PROGRAMS } from '@/lib/data/programs';
import { AGE_GROUPS } from '@/lib/data/groups';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { FONTS } from '@/lib/constants/theme';

export function ProgramsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.15 });

  return (
    <section id="programas" ref={ref} className="section-y bg-black">
      <div className="container-page">
        <SectionTitle
          eyebrow="Qué entrenamos"
          title="Tres caminos, un mismo dojang"
          subtitle="Taekwondo ITF como base. Kickboxing y acondicionamiento para completar el proceso."
          isInView={isInView}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative isolate overflow-hidden rounded-card border border-white/10 bg-surface-grouped"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={getImageUrl(program.imageId)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-light">
                  {program.tagline}
                </p>
                <h3 className="mb-2 text-white" style={{ fontFamily: FONTS.heading, fontSize: 28, letterSpacing: '0.04em' }}>
                  {program.title}
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed text-white/70">{program.description}</p>
                <p className="text-[13px] text-white/50">{program.audience}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AGE_GROUPS.map((group) => (
            <article
              key={group.id}
              className="rounded-card border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 22, letterSpacing: '0.05em' }}>
                {group.label}
              </h3>
              <p className="mb-2 text-[13px] font-medium text-brand-light">{group.ages}</p>
              <p className="text-[14px] leading-relaxed text-white/65">{group.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
