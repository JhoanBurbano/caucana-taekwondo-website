import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { FAQ_ITEMS } from '@/lib/data/faq';
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';

export function FAQSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" ref={ref} className="section-y bg-black">
      <div className="container-page">
        <SectionTitle
          eyebrow="Dudas"
          title="Preguntas que sí importan"
          subtitle="Precios, edades, certificación y qué esperar en la primera clase."
          isInView={isInView}
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-btn-${index}`;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.04 }}
                className={`overflow-hidden rounded-card border ${isOpen ? 'border-brand/50 bg-surface-grouped' : 'border-white/10 bg-white/[0.03]'}`}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-tap w-full items-center justify-between gap-4 px-5 py-4 text-left text-[17px] font-medium text-white"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-5 pb-5 text-[15px] leading-relaxed text-white/70">
                  {item.answer}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center">
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.question)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            ¿Otra pregunta? Escríbenos
          </a>
        </p>
      </div>
    </section>
  );
}
