import { values } from '@/data/site-content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ValuesSection() {
  return (
    <section className="section section--muted" id="academia">
      <div className="shell">
        <SectionHeading
          eyebrow="La Academia"
          title="Una práctica que honra la tradición y prepara para el presente"
          description="La experiencia formativa combina ceremonialidad, exigencia técnica y acompañamiento constante para consolidar disciplina, confianza y dominio corporal."
        />

        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <p className="value-card__accent">{value.accent}</p>
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__description">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
