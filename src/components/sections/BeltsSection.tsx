import { beltLevels } from '@/data/site-content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/LinkButton';

export function BeltsSection() {
  return (
    <section className="section section--muted" id="ascensos">
      <div className="shell belts-section">
        <div>
          <SectionHeading
            eyebrow="Ascenso y superación"
            title="Cada cinturón representa disciplina acumulada y una nueva responsabilidad"
            description="El camino del alumno se mide por constancia, técnica y espíritu. La progresión de grados celebra la evolución integral del practicante con respeto por el proceso."
          />
          <LinkButton href="#contacto" size="lg">
            Ver grados y logros
          </LinkButton>
        </div>

        <div className="belt-display" aria-label="Progresión de cinturones">
          {beltLevels.map((belt) => (
            <div key={belt.name} className="belt-display__item" style={{ ['--belt-color' as string]: belt.color, ['--belt-text-color' as string]: belt.textColor ?? '#171717' }}>
              <span>{belt.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
