import React from 'react';
import { storyboardFrames, storyboardNotes } from '../data/storyboard';
import { HeroSequence } from '../components/landing/HeroSequence';

export function MotionDirection() {
  return (
    <main className="bg-canvas">
      <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
          Motion direction
        </p>
        <h1 className="mt-4 max-w-[30ch] font-serif text-4xl leading-[1.06] tracking-tightish text-ink md:text-5xl lg:text-[3.5rem]">
          A message arriving, small things resolving, weight lifting.
        </h1>
        <p className="mt-6 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
          The hero sequence explains the product before the headline is read. It runs once, it is
          short, and it is removable — the hero must hold without it. Four frames, specified below,
          then the sequence itself as built.
        </p>

        <div className="mt-14">
          <HeroSequence />
          <p className="mt-3 font-sans text-xs text-ink-mute">
            End state. Reload to watch the sequence play.
          </p>
        </div>

        <ol className="mt-16 flex flex-col gap-px overflow-hidden rounded-card border border-line bg-line">
          {storyboardFrames.map((frame) =>
          <li key={frame.id} className="bg-paper p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-12">
                <div>
                  <p className="font-serif text-4xl leading-none tracking-tightish text-plum">
                    {frame.index}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-ink">{frame.title}</h2>
                  <p className="mt-2 max-w-[30ch] font-sans text-sm leading-relaxed text-ink-mute">
                    {frame.beat}
                  </p>
                </div>
                <dl className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                      On screen
                    </dt>
                    <dd className="mt-2 max-w-readable font-sans text-sm leading-relaxed text-ink-soft">
                      {frame.onScreen}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                      Motion
                    </dt>
                    <dd className="mt-2 max-w-readable font-sans text-sm leading-relaxed text-ink-soft">
                      {frame.motion}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                      Timing
                    </dt>
                    <dd className="mt-2 font-serif text-lg text-ink">{frame.timing}</dd>
                  </div>
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                      Easing
                    </dt>
                    <dd className="mt-2 font-serif text-lg text-ink">{frame.easing}</dd>
                  </div>
                </dl>
              </div>
            </li>
          )}
        </ol>

        <div className="mt-12 rounded-card border border-line bg-shell/50 p-6 md:p-8">
          <h2 className="font-serif text-xl text-ink">Rules for the whole sequence</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {storyboardNotes.map((note) =>
            <li key={note} className="flex gap-3">
                <span className="mt-2 h-1 w-4 shrink-0 bg-plum/50" aria-hidden="true" />
                <span className="max-w-readable font-sans text-sm leading-relaxed text-ink-soft">
                  {note}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>);

}