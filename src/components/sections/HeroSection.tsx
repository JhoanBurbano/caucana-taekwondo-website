import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { Button } from '../ui/button';
import { getImageUrl } from '@/lib/assets';
import { HERO_SLIDES } from '@/lib/data/hero';
import { COLORS, FONTS } from '@/lib/constants/theme';
import { AchievementStats } from '../features/AchievementStats';
import { BrushStrokes } from '../effects/BrushStrokes';

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 50;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const slide = HERO_SLIDES[index];
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => {
    goTo(index + 1);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo(index - 1);
  }, [index, goTo]);

  useEffect(() => {
    if (isDragging) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, isDragging]);

  // Touch/swipe handlers para mobile
  const handleDragEnd = useCallback(
    (_: any, info: { offset: { x: number } }) => {
      setIsDragging(false);
      const offsetX = info.offset.x;
      
      if (offsetX > SWIPE_THRESHOLD) {
        prev();
      } else if (offsetX < -SWIPE_THRESHOLD) {
        next();
      }
      
      x.set(0);
    },
    [next, prev, x]
  );

  return (
    <section
      id="inicio"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Carrusel de modalidades: Taekwondo, Kickboxing, Acondicionamiento físico"
    >
      {/* Brochazos visuales de la marca */}
      <BrushStrokes />

      {/* Slides: cada uno con imagen en cover para toda la sección */}
      <AnimatePresence mode="wait" initial={false}>
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? 'auto' : 'none',
            }}
            transition={{ duration: 0.6 }}
            aria-hidden={i !== index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            {/* Imagen de fondo: cover en toda la sección */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image-dramatic"
              style={{
                backgroundImage: `url(${getImageUrl(s.imageId)})`,
              }}
            />
            {/* Overlay dramático con gradiente rojo */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.9) 100%)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Contenido (sincronizado con el slide activo) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              {/* Achievement Stats - Solo en el primer slide */}
              {index === 0 && <AchievementStats />}
              
              <h1
                className="text-white mb-6 hero-title-neon"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(50px, 9vw, 120px)',
                  lineHeight: '0.95',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  textShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.5), 0 4px 8px rgba(0, 0, 0, 0.8)',
                }}
              >
                {slide.title}
              </h1>
              <p
                className="text-white mb-3 max-w-2xl"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 'clamp(13px, 2vw, 16px)',
                  lineHeight: '1.4',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                Popayán, Cauca
              </p>
              <p
                className="text-white/85 mb-8 max-w-2xl"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 'clamp(15px, 1.8vw, 19px)',
                  lineHeight: '1.6',
                }}
              >
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="text-white px-10 py-7 transition-all duration-300 neon-button-red"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '22px',
                    letterSpacing: '1.5px',
                    borderRadius: '0',
                    background: `linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                    boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.4), 0 8px 16px rgba(0, 0, 0, 0.4)',
                  }}
                  onClick={() => document.getElementById('inscripciones')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Reservar clase de prueba gratis"
                >
                  CLASE DE PRUEBA GRATIS
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-8 py-6 transition-all duration-300"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '18px',
                    letterSpacing: '1.5px',
                    borderRadius: '0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  }}
                  onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Conocer más sobre la academia"
                >
                  CONOCER MÁS
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicadores (dots) */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        role="tablist"
        aria-label="Seleccionar modalidad"
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Ver ${s.title}`}
            onClick={() => goTo(i)}
            className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{
              backgroundColor: i === index ? COLORS.primary : 'rgba(255,255,255,0.4)',
              transform: i === index ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Línea de acento inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, transparent, ${COLORS.primary}, transparent)`,
        }}
      />
    </section>
  );
}
