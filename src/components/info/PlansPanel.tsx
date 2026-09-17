import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/data/pricing';
import { MATRICULA } from '@/lib/data/enrollment';
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/data/contact';
import { analytics } from '@/lib/utils/analytics';
import { FONTS } from '@/lib/constants/theme';

export function PlansPanel() {
  return (
    <div>
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-card border p-6 ${
              plan.featured ? 'border-brand bg-black shadow-glow' : 'border-white/10 bg-black/50'
            }`}
          >
            {plan.featured && (
              <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-[12px] font-semibold text-white">
                El más elegido
              </p>
            )}
            <h4 className="text-white" style={{ fontFamily: FONTS.heading, fontSize: 30 }}>
              {plan.name}
            </h4>
            {plan.note && <p className="mb-4 text-[14px] text-white/55">{plan.note}</p>}
            <p className="mb-6">
              <span className="align-top text-[16px] text-white/45">$</span>
              <span className="text-[40px] leading-none text-brand" style={{ fontFamily: FONTS.heading }}>
                {plan.price}
              </span>
              <span className="ml-1 text-[14px] text-white/45">COP / {plan.period}</span>
            </p>
            <ul className="mb-7 flex-1 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-[14px] text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`${WHATSAPP_MESSAGES.trial} Me interesa el plan ${plan.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.whatsappClick(`plan_${plan.name.toLowerCase()}`)}
              className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>

      <p className="mt-6 flex flex-wrap items-baseline gap-x-2 rounded-card border border-white/10 bg-black/40 px-5 py-4 text-[15px] text-white/75">
        <span className="text-white">{MATRICULA.name}:</span>
        <span className="tabular-nums text-brand-light">${MATRICULA.price} COP</span>
        <span className="text-[14px] text-white/50">{MATRICULA.detail}</span>
      </p>
    </div>
  );
}
