import { useState } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { AGE_GROUPS } from '@/lib/data/groups';
import { PROGRAMS } from '@/lib/data/programs';
import { CONTACT, WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';
import { notify } from '@/lib/utils';
import { validators } from '@/lib/utils/validators';

export function TrialSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.15 });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState(AGE_GROUPS[0].id);
  const [program, setProgram] = useState(PROGRAMS[0].id);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validators.required(name) || name.trim().split(/\s+/).length < 2) {
      notify.error('Nombre incompleto', 'Escribe nombre y apellido.');
      return;
    }
    if (!validators.phone(phone)) {
      notify.error('Teléfono inválido', 'Usa 10 dígitos, con o sin +57.');
      return;
    }
    setSending(true);
    const groupLabel = AGE_GROUPS.find((g) => g.id === group)?.label ?? group;
    const programLabel = PROGRAMS.find((p) => p.id === program)?.title ?? program;
    const message = `${WHATSAPP_MESSAGES.trial} Soy ${name.trim()}, grupo ${groupLabel}, programa ${programLabel}. Tel: ${phone}.`;
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    notify.success('Te abrimos WhatsApp', 'Completa el mensaje y lo enviamos al dojang.');
    setSending(false);
  };

  return (
    <section id="inscripciones" ref={ref} className="section-y bg-black">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <SectionTitle
          align="left"
          eyebrow="Clase de prueba"
          title="Ven una vez. Decide después."
          subtitle="60 minutos, ropa cómoda, sin uniforme. Te ubicamos en el grupo correcto según edad y objetivo."
          isInView={isInView}
          className="mb-0"
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="rounded-card border border-white/10 bg-surface-grouped p-5 sm:p-7"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="trial-name" className="mb-1.5 block text-[13px] font-medium text-white/80">
                Nombre y apellido
              </label>
              <input
                id="trial-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 w-full rounded-control border border-white/12 bg-black/40 px-3 text-[16px] text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="trial-phone" className="mb-1.5 block text-[13px] font-medium text-white/80">
                WhatsApp
              </label>
              <input
                id="trial-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="312 456 7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 w-full rounded-control border border-white/12 bg-black/40 px-3 text-[16px] text-white"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="trial-group" className="mb-1.5 block text-[13px] font-medium text-white/80">
                  Grupo
                </label>
                <select
                  id="trial-group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="h-12 w-full rounded-control border border-white/12 bg-black/40 px-3 text-[16px] text-white"
                >
                  {AGE_GROUPS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.label} ({g.ages})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="trial-program" className="mb-1.5 block text-[13px] font-medium text-white/80">
                  Programa
                </label>
                <select
                  id="trial-program"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="h-12 w-full rounded-control border border-white/12 bg-black/40 px-3 text-[16px] text-white"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn-primary h-12 w-full" disabled={sending}>
              {sending ? 'Abriendo…' : 'Reservar por WhatsApp'}
            </button>
            <p className="text-center text-[13px] text-white/45">
              O llama al {CONTACT.phoneDisplay}. Respondemos en horario de clases.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
