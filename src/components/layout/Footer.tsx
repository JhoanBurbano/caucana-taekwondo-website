import { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data/navigation';
import { CONTACT } from '@/lib/data/contact';
import { INSTAGRAM_PROFILE_URL } from '@/lib/constants/social';
import { FONTS } from '@/lib/constants/theme';
import { notify } from '@/lib/utils';
import { getImageUrl } from '@/lib/assets';

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      notify.error('Faltan datos', 'Completa nombre, correo y teléfono.');
      return;
    }
    setSending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      notify.success('Listo', 'Te avisaremos de clases, exámenes y competencias.');
      setFormData({ name: '', email: '', phone: '' });
    } catch {
      notify.error('No se pudo enviar', 'Inténtalo de nuevo o escríbenos por WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-black pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={getImageUrl('logo-academia-caucana')}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
                width={48}
                height={48}
              />
              <div>
                <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 18 }}>
                  Academia Caucana
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-light">
                  Taekwondo ITF
                </div>
              </div>
            </div>
            <p className="mb-5 text-[15px] leading-relaxed text-white/60">
              Formamos personas con honor y disciplina. El deporte es el camino; el carácter es el resultado.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://facebook.com/academiacaucana', label: 'Facebook', Icon: Facebook },
                { href: INSTAGRAM_PROFILE_URL, label: 'Instagram', Icon: Instagram },
                { href: 'https://youtube.com/@academiacaucana', label: 'YouTube', Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  aria-label={`Síguenos en ${label}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-white" style={{ fontFamily: FONTS.heading, fontSize: 20, letterSpacing: '0.06em' }}>
              Explorar
            </h2>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="inline-flex min-h-tap items-center text-[15px] text-white/60 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-white" style={{ fontFamily: FONTS.heading, fontSize: 20, letterSpacing: '0.06em' }}>
              Contacto
            </h2>
            <ul className="space-y-4 text-[15px] text-white/70">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  {CONTACT.addressLine}
                  <br />
                  {CONTACT.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-white" style={{ fontFamily: FONTS.heading, fontSize: 20, letterSpacing: '0.06em' }}>
              Novedades
            </h2>
            <p className="mb-4 text-[14px] text-white/55">Clases, exámenes y competencias. Sin spam.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="sr-only" htmlFor="news-name">
                Nombre
              </label>
              <input
                id="news-name"
                type="text"
                autoComplete="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 w-full rounded-control border border-white/10 bg-white/5 px-3 text-[16px] text-white placeholder:text-white/35"
                required
              />
              <label className="sr-only" htmlFor="news-email">
                Correo
              </label>
              <input
                id="news-email"
                type="email"
                autoComplete="email"
                placeholder="Correo"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-11 w-full rounded-control border border-white/10 bg-white/5 px-3 text-[16px] text-white placeholder:text-white/35"
                required
              />
              <label className="sr-only" htmlFor="news-phone">
                Teléfono
              </label>
              <input
                id="news-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-11 w-full rounded-control border border-white/10 bg-white/5 px-3 text-[16px] text-white placeholder:text-white/35"
                required
              />
              <button type="submit" className="btn-primary w-full" disabled={sending}>
                {sending ? 'Enviando…' : 'Recibir novedades'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Academia Caucana de Taekwondo ITF. Popayán, Cauca.
          </p>
          <p className="text-[13px] text-white/50">No buscamos solo campeones. Formamos mejores personas.</p>
        </div>
      </div>
    </footer>
  );
}
