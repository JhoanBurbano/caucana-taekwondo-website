import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data/navigation';
import { COLORS, FONTS } from '@/lib/constants/theme';
import { notify } from '@/lib/utils';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      notify.error('Campos incompletos', 'Por favor complete todos los campos');
      return;
    }

    // Aquí iría la llamada a la API
    try {
      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));
      notify.success('¡Suscripción exitosa!', 'Gracias por suscribirte a nuestro newsletter');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      notify.error('Error al suscribirse', 'Por favor intenta nuevamente');
    }
  };

  return (
    <footer className="bg-black border-t" style={{ borderColor: `${COLORS.primary}33` }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '24px' }}>
                  AC
                </span>
              </div>
              <div>
                <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px', lineHeight: '1.2' }}>
                  Academia Caucana
                </div>
                <div style={{ color: COLORS.primary, fontSize: '12px', letterSpacing: '1px' }}>
                  TAEKWONDO ITF
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ fontFamily: FONTS.body, fontSize: '14px', lineHeight: '1.6', color: COLORS.textTertiary }}>
              Forjando guerreros con honor y disciplina desde 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/academiacaucana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: COLORS.backgroundSecondary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.backgroundSecondary)}
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/academiacaucana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: COLORS.backgroundSecondary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.backgroundSecondary)}
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@academiacaucana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: COLORS.backgroundSecondary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.backgroundSecondary)}
                aria-label="Síguenos en YouTube"
              >
                <Youtube className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: FONTS.heading, fontSize: '20px', letterSpacing: '1px' }}
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300"
                    style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textTertiary }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textTertiary)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: FONTS.heading, fontSize: '20px', letterSpacing: '1px' }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <div>
                  <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textTertiary }}>
                    info@academiacaucana.com
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <div>
                  <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textTertiary }}>
                    +57 312 456 7890
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <div>
                  <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textTertiary }}>
                    Calle 5 #10-25<br />
                    Popayán, Cauca
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: FONTS.heading, fontSize: '20px', letterSpacing: '1px' }}
            >
              Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  fontFamily: FONTS.body,
                  borderRadius: '0',
                  backgroundColor: COLORS.backgroundSecondary,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.white,
                }}
                className="placeholder:text-white/40"
                required
                aria-label="Nombre completo para newsletter"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  fontFamily: FONTS.body,
                  borderRadius: '0',
                  backgroundColor: COLORS.backgroundSecondary,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.white,
                }}
                className="placeholder:text-white/40"
                required
                aria-label="Correo electrónico para newsletter"
              />
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  fontFamily: FONTS.body,
                  borderRadius: '0',
                  backgroundColor: COLORS.backgroundSecondary,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.white,
                }}
                className="placeholder:text-white/40"
                required
                aria-label="Teléfono para newsletter"
              />
              <Button
                type="submit"
                className="w-full text-white"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '16px',
                  letterSpacing: '1px',
                  borderRadius: '0',
                  backgroundColor: COLORS.primary,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primaryLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center">
            <p
              className="mb-2"
              style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}
            >
              © 2025 Academia Caucana de Taekwondo ITF. Todos los derechos reservados.
            </p>
            <p
              style={{ fontFamily: FONTS.heading, fontSize: '16px', letterSpacing: '1px', color: COLORS.textTertiary }}
            >
              Forjando guerreros con honor y disciplina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
