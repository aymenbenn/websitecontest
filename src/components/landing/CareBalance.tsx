import React from 'react';
import { careThings, balanceCopy } from '../../data/careBalance';

export function CareBalance() {
  return (
    <section id="balance" className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="max-w-[46ch]">
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl lg:text-[3.25rem]">
            {balanceCopy.heading}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-ink-soft">
            {balanceCopy.body}
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {balanceCopy.steps.map((step) =>
          <li key={step.label} className="bg-paper p-6 md:p-7">
              <p className="font-serif text-lg text-ink">{step.label}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-mute">{step.text}</p>
            </li>
          )}
        </ol>

        <div className="mt-14 border-t border-line pt-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h3 className="font-serif text-2xl text-ink md:text-3xl">
              What her balance looks like to her
            </h3>
            <p className="font-sans text-xs text-ink-mute md:text-right">
              No totals. No currency. This is the entire view she has.
            </p>
          </div>

          <div className="mt-8 flex h-3 w-full overflow-hidden rounded-full border border-line bg-shell">
            {careThings.map((thing, i) =>
            <span
              key={thing.id}
              style={{ width: `${thing.share}%` }}
              className={`h-full border-r border-paper/60 last:border-r-0 ${
              i % 2 === 0 ? 'bg-moss/70' : 'bg-plum/40'}`
              }
              aria-hidden="true" />

            )}
          </div>

          <ul className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {careThings.map((thing) =>
            <li key={thing.id} className="flex flex-col bg-paper p-6">
                <p className="font-serif text-2xl leading-none tracking-tightish text-ink">
                  {thing.unit}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">{thing.thing}</p>
                <p className="mt-auto pt-5 font-sans text-xs text-ink-mute">
                  Added by {thing.contributedBy}
                </p>
              </li>
            )}
          </ul>

          <p className="mt-8 max-w-readable font-sans text-sm leading-relaxed text-ink-mute">
            When something runs low, her care lead tells her what is left in the same language —
            “you have four nights left this month” — and asks whether she wants her circle told.
            She decides. Not us, and not them.
          </p>
        </div>
      </div>
    </section>);

}