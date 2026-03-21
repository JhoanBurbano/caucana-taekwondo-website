import { programs } from '@/data/site-content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/LinkButton';

export function ProgramsSection() {
  return (
    <section className="section" id="programas">
      <div className="shell">
        <SectionHeading
          eyebrow="Programas"
          title="Rutas de formación adaptadas a cada etapa del practicante"
          description="Cada programa cuida el ritmo de aprendizaje, el contexto del alumno y el progreso técnico necesario para avanzar con solidez."
        />

        <div className="program-grid">
          {programs.map((program) => (
            <article key={program.title} className="program-card">
              <div className="program-card__media">
                <img alt={program.imageAlt} className="program-card__image" src={program.imageSrc} />
              </div>
              <div className="program-card__body">
                <p className="program-card__audience">{program.audience}</p>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__description">{program.description}</p>
                <LinkButton href={program.href} variant="ghost">
                  Ver más
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
