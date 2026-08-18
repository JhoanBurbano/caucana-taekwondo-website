import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SPONSORS } from '@/lib/data/sponsors';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';

export function SponsorsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-black">
      <div className="container-page">
        <SectionTitle
          eyebrow="Respaldo"
          title="Aliados del proceso"
          subtitle="ITF, ACTD y Mightyfist. El sello de un Taekwon-Do con criterio."
          isInView={isInView}
          className="mb-8"
        />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          {SPONSORS.map((sponsor) => (
            <li key={sponsor.name}>
              <a
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[160px] flex-col items-center justify-center gap-3 rounded-card border border-white/10 bg-surface-grouped p-6 transition-colors hover:border-brand/40"
                aria-label={`${sponsor.name} — sitio oficial`}
              >
                <img
                  src={getImageUrl(sponsor.image)}
                  alt=""
                  width={120}
                  height={120}
                  className="h-20 w-20 object-contain opacity-90"
                  loading="lazy"
                />
                <span className="text-center text-[13px] text-white/55">{sponsor.name}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
