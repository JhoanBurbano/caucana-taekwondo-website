import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { ABOUT_TIMELINE } from '@/lib/data/about-timeline';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

const MONTHS = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const CARD_WIDTH = 300;
const CARD_GAP = 24;
const ONE_COPY_WIDTH = ABOUT_TIMELINE.length * CARD_WIDTH + (ABOUT_TIMELINE.length - 1) * CARD_GAP;

function formatDate(year: number, month?: number) {
  if (month) return `${MONTHS[month]} ${year}`;
  return String(year);
}

export function AboutSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    let rafId: number;
    let offset = 0;
    const speed = 0.4; // px per frame

    function tick() {
      offset += speed;
      if (offset >= ONE_COPY_WIDTH) offset = 0;
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${offset}px)`;
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
          subtitle="Desde 2023 construyendo una academia de excelencia y logros en cada competencia"
          isInView={isInView}
        />

        {/* Carrusel horizontal auto-scrolleable */}
        <div className="overflow-hidden -mx-4 md:-mx-6">
          <motion.div
            ref={scrollRef}
            initial={false}
            className="flex gap-6 py-4 will-change-transform"
            style={{ width: ONE_COPY_WIDTH * 2 }}
            aria-label="Timeline de trayectoria con scroll automático"
          >
            {/* Dos copias para loop infinito */}
            {[1, 2].map((copy) => (
              <div key={copy} className="flex gap-6 flex-shrink-0" style={{ width: ONE_COPY_WIDTH }}>
                {ABOUT_TIMELINE.map((milestone, i) => (
                  <motion.div
                    key={`${copy}-${milestone.year}-${milestone.month ?? 0}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: ANIMATIONS.duration.fast,
                      delay: (copy - 1) * ABOUT_TIMELINE.length * ANIMATIONS.delay.stagger + i * ANIMATIONS.delay.stagger,
                    }}
                    className="flex-shrink-0 w-[280px] md:w-[300px] snap-start"
                    style={{ minWidth: 280 }}
                  >
                    <div
                      className="h-full p-5 md:p-6 border border-white/10 flex flex-col"
                      style={{ backgroundColor: COLORS.background }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2"
                          style={{ borderColor: COLORS.primary }}
                        >
                          <Calendar className="w-5 h-5" style={{ color: COLORS.primary }} aria-hidden />
                        </div>
                        <span
                          className="text-white font-bold"
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: '18px',
                            letterSpacing: '1px',
                          }}
                        >
                          {formatDate(milestone.year, milestone.month)}
                        </span>
                      </div>
                      <h3
                        className="text-white mb-2"
                        style={{
                          fontFamily: FONTS.heading,
                          fontSize: '20px',
                          letterSpacing: '1px',
                        }}
                      >
                        {milestone.title}
                      </h3>
                      {milestone.description && (
                        <p
                          className="mb-4 flex-1"
                          style={{
                            fontFamily: FONTS.body,
                            fontSize: '14px',
                            lineHeight: '1.55',
                            color: COLORS.textSecondary,
                          }}
                        >
                          {milestone.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.primary }} aria-hidden />
                        <span
                          className="text-white/90"
                          style={{ fontFamily: FONTS.heading, fontSize: '12px', letterSpacing: '0.5px' }}
                        >
                          Logros
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {milestone.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="flex gap-2"
                            style={{
                              fontFamily: FONTS.body,
                              fontSize: '13px',
                              color: COLORS.textSecondary,
                            }}
                          >
                            <span style={{ color: COLORS.primary }} aria-hidden>•</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <p
          className="text-center mt-4 text-white/50"
          style={{ fontFamily: FONTS.body, fontSize: '13px' }}
        >
          Desliza para ver más • Scroll automático
        </p>
      </div>
    </section>
  );
}
