import { LinkButton } from '@/components/ui/LinkButton';

export function FinalCtaSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="final-cta">
          <p className="final-cta__eyebrow">Da el primer paso</p>
          <h2 className="final-cta__title">Inicia un proceso de formación con identidad, estructura y propósito.</h2>
          <p className="final-cta__description">
            Agenda una clase de prueba y conoce una academia diseñada para formar con serenidad, firmeza y excelencia técnica.
          </p>
          <div className="final-cta__actions">
            <LinkButton href="#contacto" size="lg">Inscríbete ahora</LinkButton>
            <LinkButton href="https://wa.me/573150000000" rel="noreferrer" size="lg" target="_blank" variant="secondary">
              Contáctanos por WhatsApp
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
