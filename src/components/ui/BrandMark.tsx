interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="brand-mark" aria-label="Academia Caucana de Taekwondo ITF">
      <div className="brand-mark__seal" aria-hidden="true">
        <span>ITF</span>
      </div>
      <div>
        <p className="brand-mark__name">Academia Caucana</p>
        <p className={`brand-mark__subtitle${compact ? ' brand-mark__subtitle--compact' : ''}`}>Taekwondo ITF · Popayán</p>
      </div>
    </div>
  );
}
