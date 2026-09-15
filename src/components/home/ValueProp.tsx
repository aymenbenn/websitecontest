import React from 'react';
import { CircleDollarSignIcon, ClockIcon, ScanSearchIcon } from 'lucide-react';

const points = [
{
  icon: ClockIcon,
  title: 'A date, not a discovery phase',
  body: 'You pick the audit, pay, and choose your kick-off slot in the same sitting. No scoping calls you have to survive first.'
},
{
  icon: CircleDollarSignIcon,
  title: 'Every finding carries a number',
  body: 'Not "improve your images" — 2.4 MB of hero PNG, 2.9 seconds of LCP, 180 KB after conversion. Priorities argue themselves.'
},
{
  icon: ScanSearchIcon,
  title: 'Written by the specialist who ran it',
  body: 'Tools produce the data; a human decides what matters. If a free scanner could have found it, it does not make the report.'
}];


export function ValueProp() {
  return (
    <section className="light-section border-b border-line" aria-labelledby="value-heading">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <h2 id="value-heading" className="max-w-md text-[30px] font-semibold leading-[1.15] tracking-tightest md:text-[38px]">
            Most audits tell you what is wrong. Ours tells you what it is worth fixing first.
          </h2>
          <div className="lg:pt-2">
            <dl className="divide-y divide-line">
              {points.map((p) =>
              <div key={p.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-[15px] font-semibold">{p.title}</dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-mute">{p.body}</dd>
                  </div>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}