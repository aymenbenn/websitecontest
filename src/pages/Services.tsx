import React from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { services } from '../data/services';
import { ServiceModule } from '../components/services/ServiceModule';
import { ServiceNav } from '../components/services/ServiceNav';
import { BundleOffer } from '../components/services/BundleOffer';
import { CtaBand } from '../components/layout/CtaBand';
import { ButtonLink } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';

export function Services() {
  useSeo(
    'Audits & Pricing — Performance, SEO, UX, AEO, GA4, Google Ads | Auditlab',
    'Compare all six website audits: benefits, real sample findings and fixed pricing from £440. Snapshot and Deep Dive tiers, delivered in 3–10 working days.'
  );

  return (
    <>
      <section className="border-b border-line" aria-labelledby="services-page-heading">
        <div className="mx-auto max-w-content px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[11px] text-mute">
                <span className="text-accent">6 audits</span> · 12 fixed-price tiers · from £440
              </p>
              <h1
                id="services-page-heading"
                className="mt-5 max-w-2xl text-[36px] font-semibold leading-[1.05] tracking-tightest md:text-[50px]">
                
                Every audit, every price, and the findings they actually produce.
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">
                Each module below shows real anonymised findings from recent work — so you can judge the depth before
                you spend anything. Buy directly from any tier.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink to="/checkout" size="lg">
                Buy an audit
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/checkout#schedule" variant="outline" size="lg">
                <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                Not sure? Book 15 min
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ServiceNav />

      <div className="mx-auto max-w-content px-5 lg:px-8">
        {services.map((service, i) =>
        <ServiceModule key={service.id} service={service} index={i} />
        )}
      </div>

      <BundleOffer />

      <CtaBand
        heading="Still weighing up which one?"
        body="Fifteen minutes on a call and we will tell you which audit answers your question — including when the honest answer is that you do not need one yet."
        note="No obligation · No retainer pitch · Straight answer" />
      
    </>);

}