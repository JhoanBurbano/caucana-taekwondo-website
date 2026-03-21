import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { getImageUrl } from '@/lib/assets';
import { HERO_SLIDES } from '@/lib/data/hero';
import { COLORS, FONTS } from '@/lib/constants/theme';

const AUTOPLAY_MS = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const slide = HERO_SLIDES[index];

  const goTo = useCallback((i: number) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => {
    goTo(index + 1);
  }, [index, goTo]);

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Carrusel de modalidades: Taekwondo, Kickboxing, Acondicionamiento físico"
    >
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
          >
            {/* Imagen de fondo: cover en toda la sección */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${getImageUrl(s.imageId)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60" />
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
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(42px, 7vw, 100px)',
                  lineHeight: '0.95',
                  letterSpacing: '2px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {slide.title.toUpperCase()}
              </h1>
              <p
                className="text-white/90 mb-8 max-w-2xl"
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
                  className="text-white px-8 py-6 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '20px',
                    letterSpacing: '1.5px',
                    borderRadius: '0',
                    background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                  }}
                  onClick={() => document.getElementById('inscripciones')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Ir a sección de inscripciones"
                >
                  Inscríbete Hoy
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 transition-all duration-300"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '20px',
                    letterSpacing: '1.5px',
                    borderRadius: '0',
                  }}
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Ir a galería de eventos"
                >
                  Ver Galería
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
