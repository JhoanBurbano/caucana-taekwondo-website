import { motion } from 'motion/react';
import { FONTS } from '@/lib/constants/theme';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
  isInView?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  className = '',
  align = 'center',
  isInView = true,
}: SectionTitleProps) {
  const reduced = usePrefersReducedMotion();
  const alignCls = align === 'left' ? 'text-left' : 'text-center mx-auto';

  const heading = highlight ? (
    <>
      {title.split(highlight)[0]}
      <span className="text-brand">{highlight}</span>
      {title.split(highlight)[1]}
    </>
  ) : (
    title
  );

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 sm:mb-14 max-w-3xl ${alignCls} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-light">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-ink mb-3"
        style={{
          fontFamily: FONTS.heading,
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          letterSpacing: '0.04em',
          lineHeight: 0.98,
        }}
      >
        {heading}
      </h2>
      {subtitle && (
        <p className="text-body text-white/70 max-w-2xl" style={{ marginInline: align === 'center' ? 'auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
