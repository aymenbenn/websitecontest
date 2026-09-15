import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import type { Service } from '../../types/audit';
import { Button } from '../ui/Button';
import { MetricBar, SeverityTag } from '../ui/Readout';
import { ServiceIcon } from '../ui/ServiceIcon';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { formatPrice } from '../../utils/format';
import { useCheckout } from '../../contexts/CheckoutContext';

export function ServiceModule({ service, index }: {service: Service;index: number;}) {
  const { add } = useCheckout();
  const navigate = useNavigate();

  function buy(tierId: string) {
    add({ serviceId: service.id, tierId });
    navigate('/checkout');
  }

  return (
    <article id={service.slug} className={`scroll-mt-28 border-t border-line py-16 lg:py-20 ${index % 2 === 0 ? 'light-section' : 'bg-[#f4f6f7]'}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-[11px] text-accent">
            <ServiceIcon name={service.icon} className="h-3.5 w-3.5" />
            {service.abbr}
            <span className="text-faint">/ 0{index + 1}</span>
          </p>
          <h3 className="mt-4 text-[28px] font-semibold leading-[1.1] tracking-tightest md:text-[34px]">
            {service.name}
          </h3>
          <p className="mt-4 text-[17px] leading-relaxed text-fg">{service.tagline}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">{service.problem}</p>

          <h4 className="mt-9 text-xs font-semibold text-fg">What you walk away with</h4>
          <ul className="mt-4 space-y-3">
            {service.benefits.map((b) =>
            <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-mute">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {b}
              </li>
            )}
          </ul>
        </div>

        <div className="rounded-lg border border-line bg-panel p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-mute">Sample findings</p>
            <p className="font-mono text-[10px] text-faint">anonymised client · {service.abbr}</p>
          </div>

          <div className="mt-5 grid gap-5 border-y border-line py-5 sm:grid-cols-3">
            {service.readout.map((r) =>
            <MetricBar key={r.label} label={r.label} value={r.value} note={r.target} />
            )}
          </div>

          <ul className="mt-5 divide-y divide-line">
            {service.findings.map((f) =>
            <li key={f.label} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <SeverityTag severity={f.severity} />
                  <span className="ml-auto font-mono text-[11px] tabular-nums text-accent">{f.metric}</span>
                </div>
                <p className="mt-1.5 text-sm font-medium">{f.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">{f.detail}</p>
              </li>
            )}
          </ul>

          <ImagePlaceholder
            label={`${service.abbr} report excerpt`}
            spec="1200 × 675 · PNG or WebP"
            className="mt-5 aspect-[16/9] w-full" />
          
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {service.tiers.map((tier) =>
        <div
          key={tier.id}
          className={`flex flex-col rounded-lg border p-6 ${
          tier.popular ? 'border-accent/45 bg-accent/[0.04]' : 'border-line bg-panel/50'}`
          }>
          
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-[15px] font-semibold">{tier.name}</h4>
                <p className="mt-1 font-mono text-[11px] text-faint">{tier.turnaround}</p>
              </div>
              {tier.popular &&
            <span className="rounded border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  Most bought
                </span>
            }
            </div>
            <p className="mt-5 text-[30px] font-semibold tabular-nums tracking-tightest">{formatPrice(tier.price)}</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">{tier.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {tier.includes.map((inc) =>
            <li key={inc} className="flex gap-2.5 text-sm leading-relaxed text-mute">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {inc}
                </li>
            )}
            </ul>
            <Button
            variant={tier.popular ? 'primary' : 'outline'}
            size="lg"
            className="mt-auto w-full"
            onClick={() => buy(tier.id)}>
            
              Buy {service.abbr} {tier.name}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    </article>);

}