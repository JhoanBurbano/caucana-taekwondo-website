import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { PRICING_PLANS } from '@/lib/data/pricing';
import { SectionTitle } from '@/shared/SectionTitle';
import { FONTS } from '@/lib/constants/theme';
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';

export function PricingSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section id="planes" ref={ref} className="section-y bg-surface-grouped">
      <div className="container-page">
        <SectionTitle
          eyebrow="Inscripciones"
          title="Un plan claro, sin letra chica"
          subtitle="Empieza con una clase gratis. Después elige el ritmo que puedas sostener."
          isInView={isInView}
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`relative flex flex-col rounded-card border p-6 sm:p-8 ${
                plan.featured
                  ? 'border-brand bg-black shadow-glow lg:-translate-y-2'
                  : 'border-white/10 bg-black/50'
              }`}
            >
              {plan.featured && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[12px] font-semibold text-white">
                  El más elegido
                </p>
              )}
              <h3 className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 32 }}>
                {plan.name}
              </h3>
              {plan.note && <p className="mb-4 text-[14px] text-white/55">{plan.note}</p>}
              <p className="mb-6">
                <span className="align-top text-[16px] text-white/45">$</span>
                <span className="text-[44px] leading-none text-brand" style={{ fontFamily: FONTS.heading }}>
                  {plan.price}
                </span>
                <span className="ml-1 text-[14px] text-white/45">COP / {plan.period}</span>
              </p>
              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[14px] text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(`${WHATSAPP_MESSAGES.trial} Me interesa el plan ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
