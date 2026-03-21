import { contactItems, schedules, socialLinks } from '@/data/site-content';
import { BrandMark } from '@/components/ui/BrandMark';

export function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="shell site-footer__grid">
        <div>
          <BrandMark />
          <p className="site-footer__text">
            Tradición, carácter y excelencia técnica en una academia concebida como un espacio de crecimiento marcial y humano.
          </p>
        </div>

        <div>
          <h3 className="site-footer__title">Contacto</h3>
          <ul className="site-footer__list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}: </span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div id="horarios">
          <h3 className="site-footer__title">Horarios</h3>
          <ul className="site-footer__list">
            {schedules.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__title">Redes</h3>
          <ul className="site-footer__list site-footer__list--inline">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} rel="noreferrer" target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 Academia Caucana de Taekwondo ITF. Honor, disciplina y camino.</p>
      </div>
    </footer>
  );
}
