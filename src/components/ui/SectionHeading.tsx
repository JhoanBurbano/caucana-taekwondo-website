import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'section-heading section-heading--center' : 'section-heading';

  return (
    <div className={alignmentClass}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__description">{description}</div>
    </div>
  );
}
