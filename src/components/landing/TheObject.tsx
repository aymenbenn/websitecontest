import React from 'react';
import { Placeholder } from '../Placeholder';

const steps = [
{
  label: 'One',
  title: 'You choose a length of care',
  text: 'Six weeks, a season, or a year. You pay once; nothing recurs and nothing expires early.'
},
{
  label: 'Two',
  title: 'The object arrives at her door',
  text: 'A linen box with a folded throw and a card in your handwriting. No branding on the outside.'
},
{
  label: 'Three',
  title: 'A care lead introduces herself',
  text: 'By message, on the day she comes home. One person, the same person, for the whole time.'
},
{
  label: 'Four',
  title: 'It runs quietly behind her',
  text: 'Nights, meals, appointments, washing. She asks in a sentence; we take it from there.'
}];


export function TheObject() {
  return (
    <>
      <section id="object" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Placeholder
                label="The object, unstyled — linen box open, throw folded, card resting on top"
                ratio="3 / 2" />
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Placeholder label="Detail — weave of the throw" ratio="1 / 1" />
                <Placeholder label="Detail — handwritten card" ratio="1 / 1" />
              </div>
            </div>
            <div className="lg:pt-6">
              <h2 className="font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl">
                A parcel is the part you can hold. It is not the part that matters.
              </h2>
              <p className="mt-6 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
                We send something real because a gift should arrive. A box, a throw heavy enough to
                fall asleep under, and a card you write yourself. It sits in the room with her.
              </p>
              <p className="mt-4 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
                Inside the card is one line and one number. That is the entire on-ramp to the
                service — no app to install, no account to build, no password on the day she comes
                home from hospital.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8">
                {[
                ['Ships', 'Two weeks before her due date, or any date you choose'],
                ['Care begins', 'The day she comes home'],
                ['Care ends', 'When she says so'],
                ['She needs', 'One sentence, by message']].
                map(([term, def]) =>
                <div key={term}>
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                      {term}
                    </dt>
                    <dd className="mt-2 font-serif text-lg leading-snug text-ink">{def}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <h2 className="max-w-[36ch] font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl">
            Four things happen. She only has to notice the last one.
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) =>
            <li key={step.label} className="flex flex-col bg-paper p-6 md:p-7">
                <span className="font-sans text-xs uppercase tracking-[0.14em] text-plum">
                  {step.label}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{step.title}</h3>
                <p className="mt-auto pt-4 font-sans text-sm leading-relaxed text-ink-mute">
                  {step.text}
                </p>
              </li>
            )}
          </ol>
        </div>
      </section>
    </>);

}