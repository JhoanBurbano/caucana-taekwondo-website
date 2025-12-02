import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <footer className="bg-black border-t border-[#D30000]/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D30000] flex items-center justify-center">
                <span className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
                  AC
                </span>
              </div>
              <div>
                <div className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', lineHeight: '1.2' }}>
                  Academia Caucana
                </div>
                <div className="text-[#D30000]" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                  TAEKWONDO ITF
                </div>
              </div>
            </div>
            <p className="text-white/60 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
              Forjando guerreros con honor y disciplina desde 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#D30000] flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#D30000] flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#D30000] flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '1px' }}
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {['Inicio', 'Instructores', 'Academia', 'Eventos', 'Galería', 'Inscripciones'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-[#D30000] transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '1px' }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                    info@academiacaucana.com
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                    +57 312 456 7890
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
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
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '1px' }}
            >
              Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-white/40"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-white/40"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                required
              />
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#1A1A1A] border-white/10 text-white placeholder:text-white/40"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#D30000] hover:bg-[#FF0000] text-white"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '1px', borderRadius: '0' }}
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
              className="text-white/40 mb-2"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
            >
              © 2025 Academia Caucana de Taekwondo ITF. Todos los derechos reservados.
            </p>
            <p
              className="text-white/60"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '1px' }}
            >
              Forjando guerreros con honor y disciplina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
