import React from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

interface CtaBandProps {
  heading: string;
  body: string;
  note?: string;
}

export function CtaBand({ heading, body, note = 'Fixed price · Report in 3–10 working days · Full refund guarantee' }: CtaBandProps) {
  return (
    <section className="border-t border-line bg-panel" aria-labelledby="cta-band-heading">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 id="cta-band-heading" className="text-3xl font-semibold tracking-tightest md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mute">{body}</p>
          <p className="mt-5 font-mono text-[11px] text-faint">{note}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink to="/checkout" size="lg">
            Buy an audit
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/checkout#schedule" variant="outline" size="lg">
            <CalendarIcon className="h-4 w-4" aria-hidden="true" />
            Book a 15-min call
          </ButtonLink>
        </div>
      </div>
    </section>);

}