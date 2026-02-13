import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { OptimizedImage } from '@/shared/OptimizedImage';
import { getImageUrl, getAssetAlt } from '@/lib/assets';
import { COLORS, FONTS } from '@/lib/constants/theme';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${getImageUrl('hero-pattern')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Fighter silhouettes */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
          <OptimizedImage
            src={getImageUrl('hero-fighter')}
            alt={getAssetAlt('hero-fighter')}
            className="w-full h-full"
            priority={false}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: FONTS.heading,
                fontSize: 'clamp(48px, 8vw, 120px)',
                lineHeight: '0.9',
                letterSpacing: '2px',
                background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              CONVIÉRTETE EN<br />MÁS FUERTE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 mb-8 max-w-2xl"
            style={{
              fontFamily: FONTS.body,
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6',
            }}
          >
            Fortalece tu mente y cuerpo con entrenamiento disciplinado de Taekwondo ITF.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              className="text-white px-8 py-6 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80"
              style={{
                fontFamily: FONTS.heading,
                fontSize: '20px',
                letterSpacing: '1.5px',
                borderRadius: '0',
                background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
              }}
              onClick={() => {
                document.getElementById('inscripciones')?.scrollIntoView({ behavior: 'smooth' });
              }}
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
              onClick={() => {
                document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Ir a galería de eventos"
            >
              Ver Galería
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Red accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
        style={{
          background: `linear-gradient(to right, transparent, ${COLORS.primary}, transparent)`,
        }}
      />
    </section>
  );
}
