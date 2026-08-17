import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { FAQ_ITEMS } from '@/lib/data/faq';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export function FAQSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Preguntas Frecuentes"
          highlight="Frecuentes"
          subtitle="Respuestas a las dudas más comunes sobre nuestros programas"
          isInView={isInView}
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: ANIMATIONS.duration.normal,
                  delay: index * ANIMATIONS.delay.stagger,
                }}
                className="border-2 overflow-hidden"
                style={{
                  backgroundColor: COLORS.backgroundSecondary,
                  borderColor: isOpen ? COLORS.primary : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 transition-colors duration-300 hover:bg-white/5"
                  style={{ fontFamily: FONTS.body }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '18px',
                      letterSpacing: '0.5px',
                      color: isOpen ? COLORS.primary : COLORS.white,
                    }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: isOpen ? COLORS.primary : COLORS.textSecondary,
                    }}
                    size={24}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    className="px-6 pb-4"
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: COLORS.textSecondary,
                    }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p style={{ fontFamily: FONTS.body, fontSize: '16px', color: COLORS.textSecondary, marginBottom: '16px' }}>
            ¿Tienes más preguntas?
          </p>
          <a
            href="https://wa.me/573124567890?text=Hola,%20tengo%20una%20pregunta%20sobre%20Academia%20Caucana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: FONTS.heading,
              fontSize: '18px',
              letterSpacing: '1px',
              background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
              boxShadow: `0 4px 12px ${COLORS.primary}50`,
            }}
          >
            Contáctanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
