import { motion } from 'motion/react';

/**
 * Brochazos visuales con los colores de la Academia Caucana
 * Colores: Negro, Rojo (#DC2626), Blanco
 * Inspirados en el diseño de camisetas y uniformes de la academia
 */
export function BrushStrokes() {
  return (
    <>
      {/* Brochazo Rojo - Superior izquierda */}
      <motion.div
        className="brush-stroke brush-stroke-red"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          top: '10%',
          left: '-5%',
          width: '40%',
          height: '120px',
        }}
      />

      {/* Brochazo Negro - Centro derecha */}
      <motion.div
        className="brush-stroke brush-stroke-black"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{
          top: '40%',
          right: '-5%',
          width: '35%',
          height: '150px',
        }}
      />

      {/* Brochazo Blanco - Inferior izquierda */}
      <motion.div
        className="brush-stroke brush-stroke-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        style={{
          bottom: '15%',
          left: '10%',
          width: '30%',
          height: '100px',
        }}
      />

      {/* Brochazo Rojo - Inferior derecha (sutil) */}
      <motion.div
        className="brush-stroke brush-stroke-red"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        style={{
          bottom: '25%',
          right: '15%',
          width: '25%',
          height: '80px',
        }}
      />
    </>
  );
}
