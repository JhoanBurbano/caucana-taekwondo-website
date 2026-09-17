import { memo } from 'react';
import type { ClassDiscipline, ClassSlot } from '@/lib/types';
import { SCHEDULE, SCHEDULE_DAYS, SCHEDULE_LEGEND } from '@/lib/data/schedule';
import { CONTACT, WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';
import { analytics } from '@/lib/utils/analytics';
import { FONTS } from '@/lib/constants/theme';

/** Un color por disciplina. El dorado recoge la estrella del escudo. */
const DISCIPLINE_STYLES: Record<ClassDiscipline, string> = {
  taekwondo: 'border-brand/40 bg-brand/10 text-brand-light',
  combate: 'border-white/25 bg-white/[0.07] text-white',
  acondicionamiento: 'border-[#E0B252]/40 bg-[#E0B252]/10 text-[#E8C478]',
  otro: 'border-white/12 bg-white/[0.03] text-white/60',
};

function SlotCard({ slot }: { slot: ClassSlot }) {
  return (
    <div className={`rounded-xl border px-3 py-2 ${DISCIPLINE_STYLES[slot.discipline]}`}>
      <p className="text-[13px] font-semibold leading-tight">{slot.title}</p>
      {slot.detail && <p className="mt-0.5 text-[12px] leading-tight opacity-75">{slot.detail}</p>}
    </div>
  );
}

export const SchedulePanel = memo(function SchedulePanel() {
  return (
    <div>
      {/* Leyenda: la misma para las dos vistas */}
      <ul className="mb-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {SCHEDULE_LEGEND.map((item) => (
          <li key={item.discipline} className="flex items-center gap-2 text-[13px] text-white/65">
            <span
              className={`h-3 w-3 shrink-0 rounded-full border ${DISCIPLINE_STYLES[item.discipline]}`}
              aria-hidden
            />
            {item.label}
          </li>
        ))}
      </ul>

      {/*
        Dos vistas del mismo dato. Una malla de 6 días × 9 franjas es ilegible en un
        teléfono —y ahí es donde un padre consulta el horario—, así que en móvil se
        agrupa por día y la tabla completa aparece solo cuando hay ancho para ella.
      */}

      {/* Móvil y tablet: por día */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {SCHEDULE_DAYS.map((day) => {
          const rows = SCHEDULE.filter((row) => row.slots[day.id]);
          return (
            <article
              key={day.id}
              className="rounded-card border border-white/10 bg-surface-grouped p-5"
            >
              <h3
                className="mb-4 text-white"
                style={{ fontFamily: FONTS.heading, fontSize: 22, letterSpacing: '0.04em' }}
              >
                {day.label}
              </h3>
              {rows.length === 0 ? (
                <p className="text-[14px] text-white/45">Sin clases programadas.</p>
              ) : (
                <ul className="space-y-2.5">
                  {rows.map((row) => (
                    <li key={row.time} className="grid grid-cols-[76px_1fr] items-center gap-3">
                      <span className="text-[13px] tabular-nums text-white/55">{row.time}</span>
                      <SlotCard slot={row.slots[day.id]!} />
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>

      {/* Escritorio: la malla completa */}
      <div className="hidden overflow-x-auto rounded-card border border-white/10 lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Horario de clases de la Academia Caucana de Taekwon-Do ITF, 2026
          </caption>
          <thead>
            <tr className="bg-surface-grouped">
              <th scope="col" className="w-[92px] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-white/50">
                Hora
              </th>
              {SCHEDULE_DAYS.map((day) => (
                <th
                  key={day.id}
                  scope="col"
                  className="px-3 py-3 text-[13px] font-semibold uppercase tracking-wider text-white"
                >
                  {day.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((row) => (
              <tr key={row.time} className="border-t border-white/8">
                <th
                  scope="row"
                  className="whitespace-nowrap px-4 py-3 align-middle text-[13px] font-medium tabular-nums text-white/60"
                >
                  {row.time}
                </th>
                {SCHEDULE_DAYS.map((day) => {
                  const slot = row.slots[day.id];
                  return (
                    <td key={day.id} className="px-2 py-2 align-middle">
                      {slot ? <SlotCard slot={slot} /> : <span className="sr-only">Sin clase</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-[14px] text-white/55">
        ¿Ninguna franja te sirve?{' '}
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.info)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.whatsappClick('horarios')}
          className="font-medium text-brand-light hover:underline"
        >
          Escríbenos al {CONTACT.phoneDisplay}
        </a>{' '}
        y buscamos cómo ubicarte.
      </p>
    </div>
  );
});
