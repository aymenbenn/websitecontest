import React from 'react';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { guarantees } from '../data/faqs';
import { FaqList } from '../components/faq/FaqList';
import { ButtonLink } from '../components/ui/Button';
import { CtaBand } from '../components/layout/CtaBand';
import { useSeo } from '../hooks/useSeo';

export function Faq() {
  useSeo(
    'FAQ & Guarantee — Fixed-Price Website Audits | Auditlab',
    'How our website audits work: what you get, access needed, turnaround times, white-label options, and our five-material-findings-or-full-refund guarantee.'
  );

  return (
    <>
      <section className="border-b border-line" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-content px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] text-accent">
                <ShieldCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Guaranteed in writing
              </p>
              <h1
                id="faq-heading"
                className="mt-5 max-w-2xl text-[36px] font-semibold leading-[1.05] tracking-tightest md:text-[50px]">
                
                Five findings worth acting on, or you pay nothing.
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">
                The only real risk in buying an audit is a report full of things you already knew. So we carry that
                risk instead of you.
              </p>
            </div>
            <ButtonLink to="/checkout" size="lg" className="shrink-0">
              Buy an audit
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {guarantees.map((g) =>
            <div key={g.title} className="bg-panel p-7">
                <dt className="text-[15px] font-semibold">{g.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-mute">{g.body}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="questions-heading">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <h2
              id="questions-heading"
              className="text-[30px] font-semibold leading-[1.15] tracking-tightest md:text-[38px]">
              
              Everything people ask before they buy.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mute">
              If yours is not here, email{' '}
              <a href="mailto:hello@auditlab.example" className="text-accent underline underline-offset-4">
                hello@auditlab.example
              </a>{' '}
              — answered by a human, usually within two working hours.
            </p>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand
        heading="Nothing left to decide but which one."
        body="Fixed price, fixed date, full refund if the report underdelivers. Pick your audit and choose a kick-off slot in the next three minutes." />
      
    </>);

}