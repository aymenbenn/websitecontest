import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';
import { formatPrice } from '../../utils/format';
import { ServiceIcon } from '../ui/ServiceIcon';

export function ServiceIndex() {
  return (
    <section className="border-b border-line bg-panel/40" aria-labelledby="services-heading">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="services-heading" className="max-w-lg text-[30px] font-semibold leading-[1.15] tracking-tightest md:text-[38px]">
            Six audits. Pick the one that answers your question.
          </h2>
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-accent transition-colors duration-150 ease-swift hover:text-fg">
            
            Full breakdowns &amp; pricing
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 border-t border-line">
          <div
            aria-hidden="true"
            className="hidden grid-cols-[1.1fr_1.4fr_auto_auto] gap-6 border-b border-line py-3 font-mono text-[10px] uppercase tracking-wider text-faint md:grid">
            
            <span>Audit</span>
            <span>What it answers</span>
            <span className="text-right">From</span>
            <span className="text-right">Turnaround</span>
          </div>
          <ul>
            {services.map((s) =>
            <li key={s.id} className="border-b border-line">
                <Link
                to={`/services#${s.slug}`}
                className="group grid gap-2 py-5 transition-colors duration-150 ease-swift hover:bg-raise/60 md:grid-cols-[1.1fr_1.4fr_auto_auto] md:items-center md:gap-6">
                
                  <span className="flex items-center gap-3">
                    <span className="text-accent">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <span className="text-[15px] font-semibold">{s.name}</span>
                  </span>
                  <span className="text-sm leading-relaxed text-mute">{s.tagline}</span>
                  <span className="font-mono text-[13px] tabular-nums text-fg md:text-right">
                    {formatPrice(s.tiers[0].price)}
                  </span>
                  <span className="flex items-center justify-between gap-3 font-mono text-[11px] text-faint md:justify-end">
                    {s.tiers[0].turnaround}
                    <ArrowRightIcon
                    className="h-4 w-4 text-faint transition-transform duration-150 ease-swift group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true" />
                  
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}