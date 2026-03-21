import { academyHighlights, heroContent, heroVisual } from '@/data/site-content';
import { LinkButton } from '@/components/ui/LinkButton';

export function HeroSection() {
  return (
    <section className="hero section-frame" id="inicio">
      <div className="shell hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">Escuela oficial · Taekwondo ITF tradicional</p>
          <h1 className="hero__title">{heroContent.title}</h1>
          <p className="hero__tagline">{heroContent.tagline}</p>
          <p className="hero__description">{heroContent.description}</p>
          <p className="hero__meta">{heroContent.metadata}</p>

          <div className="hero__actions">
            <LinkButton href={heroContent.primaryAction.href} size="lg">
              {heroContent.primaryAction.label}
            </LinkButton>
            <LinkButton href={heroContent.secondaryAction.href} size="lg" variant="secondary">
              {heroContent.secondaryAction.label}
            </LinkButton>
          </div>

          <ul className="hero__highlights" aria-label="Fortalezas de la academia">
            {academyHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__seal">道</div>
          <img alt={heroVisual.imageAlt} className="hero__image" src={heroVisual.imageSrc} />
          <div className="hero__ornament hero__ornament--top" />
          <div className="hero__ornament hero__ornament--bottom" />
        </div>
      </div>
    </section>
  );
}
