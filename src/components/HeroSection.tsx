import { motion } from 'motion/react';
import { Button } from './ui/button';
import diagonalPattern from 'figma:asset/7d88a0ddc9fa339c7172cbd46a9c8d728aead3c2.png';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${diagonalPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Fighter silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjB0cmFpbmluZyUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2MjIwNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fighter"
            className="w-full h-full object-cover"
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
                fontFamily: 'Bebas Neue, sans-serif',
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
              fontFamily: 'Inter, sans-serif',
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
              className="bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white px-8 py-6 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '20px',
                letterSpacing: '1.5px',
                borderRadius: '0',
              }}
            >
              Inscríbete Hoy
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 transition-all duration-300"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '20px',
                letterSpacing: '1.5px',
                borderRadius: '0',
              }}
            >
              Ver Galería
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D30000] to-transparent" />
    </section>
  );
}
