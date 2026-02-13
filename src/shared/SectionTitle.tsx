import { motion } from 'motion/react';
import { COLORS, FONTS } from '@/lib/constants/theme';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  animate?: boolean;
  isInView?: boolean;
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  className = '',
  animate = true,
  isInView = true,
}: SectionTitleProps) {
  const content = (
    <>
      <h2
        className={`text-white mb-4 ${className}`}
        style={{
          fontFamily: FONTS.heading,
          fontSize: 'clamp(36px, 5vw, 64px)',
          letterSpacing: '2px',
        }}
      >
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span style={{ color: COLORS.primary }}>{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className="text-white/70 max-w-2xl mx-auto"
          style={{ fontFamily: FONTS.body, fontSize: '18px' }}
        >
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: COLORS.primary }} />
    </>
  );

  if (!animate) {
    return <div className="text-center mb-16">{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {content}
    </motion.div>
  );
}

