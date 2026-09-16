import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Share {
  id: string;
  she: string;
  weDo: string;
  on: boolean;
}

const initialShares: Share[] = [
{
  id: 'sleep',
  she: 'How the nights are going',
  weDo: 'We move her night visits to the nights she is actually awake.',
  on: true
},
{
  id: 'feeding',
  she: 'How feeding is going',
  weDo: 'We offer a lactation visit — once. If she says no, we do not ask again.',
  on: true
},
{
  id: 'body',
  she: 'How her body feels',
  weDo: 'We bring physio forward, or hold it back until she wants it.',
  on: false
},
{
  id: 'mood',
  she: 'How she is doing, in her own words',
  weDo: 'A perinatal specialist reads it. Not an algorithm, and never her family.',
  on: true
}];


const promises = [
'She can turn any of this off, at any time, and nothing else changes.',
'The person who bought the gift is never told what she shared, used, or skipped.',
'Nothing is sold, and nothing is used to advertise anything to her.',
'If she closes her file, the notes go with it. She keeps the object.'];


export function DataForward() {
  const [shares, setShares] = useState(initialShares);
  const reduced = useReducedMotion();

  const toggle = (id: string) =>
  setShares((prev) => prev.map((s) => s.id === id ? { ...s, on: !s.on } : s));

  return (
    <section id="data" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl lg:text-[3.25rem]">
              She decides what we know. Then we use it to leave her alone.
            </h2>
            <p className="mt-6 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
              The service only ever knows what she chooses to tell it, and every single thing she
              tells it has one job: to make her ask for less. Nothing she shares is ever turned
              into a chart, a score, or a notification.
            </p>
            <p className="mt-4 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
              Below is the whole of it. Four things she can share, what each one changes, and a
              switch beside each — the same switches she has in her own account.
            </p>
          </div>

          <div>
            <ul className="divide-y divide-line border-y border-line">
              {shares.map((share) =>
              <li key={share.id} className="py-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-serif text-xl leading-snug text-ink md:text-2xl">
                        {share.she}
                      </p>
                      <motion.p
                      key={String(share.on)}
                      initial={{ opacity: reduced ? 1 : 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="mt-2 max-w-[46ch] font-sans text-sm leading-relaxed text-ink-mute">
                      
                        {share.on ? share.weDo : 'Off. We do not ask, and we do not guess.'}
                      </motion.p>
                    </div>
                    <button
                    type="button"
                    role="switch"
                    aria-checked={share.on}
                    onClick={() => toggle(share.id)}
                    className={`mt-1 h-6 w-11 shrink-0 rounded-full border transition-colors duration-150 ease-out ${
                    share.on ? 'border-moss bg-moss/25' : 'border-line bg-shell'}`
                    }>
                    
                      <span className="sr-only">
                        {share.she}: {share.on ? 'sharing on' : 'sharing off'}
                      </span>
                      <motion.span
                      layout={!reduced}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className={`block h-4 w-4 rounded-full bg-ink ${
                      share.on ? 'ml-6' : 'ml-1'}`
                      } />
                    
                    </button>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-10 rounded-card border border-line bg-canvas p-6 md:p-8">
              <h3 className="font-serif text-lg text-ink md:text-xl">
                Four things that are true whatever she shares
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {promises.map((promise) =>
                <li key={promise} className="flex gap-3">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-plum/50" aria-hidden="true" />
                    <span className="font-sans text-sm leading-relaxed text-ink-soft">
                      {promise}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}