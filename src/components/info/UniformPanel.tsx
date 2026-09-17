import { ShoppingBag } from 'lucide-react';
import { UNIFORM_COSTS, UNIFORM_ORDER_PATH } from '@/lib/data/enrollment';
import { analytics } from '@/lib/utils/analytics';
import { FONTS } from '@/lib/constants/theme';

export function UniformPanel() {
  return (
    <div className="rounded-card border border-white/10 bg-black/40 p-6 sm:p-8">
      <ul className="divide-y divide-white/8">
        {UNIFORM_COSTS.map((item) => (
          <li key={item.id} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 first:pt-0">
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2 text-[16px] text-white">
                {item.name}
                {item.optional && (
                  <span className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] uppercase tracking-wider text-white/60">
                    Opcional
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-[14px] text-white/55">{item.detail}</p>
            </div>
            <p
              className="text-[20px] tabular-nums text-white"
              style={{ fontFamily: FONTS.heading, letterSpacing: '0.02em' }}
            >
              ${item.price}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[14px] leading-relaxed text-white/55">
        Los precios son por prenda y se pagan una sola vez. El pedido se hace desde el
        formulario oficial, donde eliges talla y confirmas la entrega en el dojang.
      </p>

      <a
        href={UNIFORM_ORDER_PATH}
        onClick={() => analytics.ctaClick('Pedir uniforme', 'tab_uniforme')}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        <ShoppingBag className="h-4 w-4" aria-hidden />
        Pedir el uniforme
      </a>
    </div>
  );
}
