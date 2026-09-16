import React from 'react';
import type { StepProps } from '../../types/gift';

const IDEAL = 180;

export function StepMessage({ draft, update }: StepProps) {
  const fill = Math.min(draft.message.length / IDEAL, 1);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div>
        <label htmlFor="message" className="block font-serif text-xl leading-snug text-ink">
          Write the line she reads first.
        </label>
        <p className="mt-2 max-w-readable font-sans text-sm leading-relaxed text-ink-mute">
          Short is better than warm. She will read it once, at a bad hour, and then keep the card.
        </p>
        <textarea
          id="message"
          value={draft.message}
          onChange={(e) => update('message', e.target.value.slice(0, 240))}
          rows={5}
          placeholder="You do not have to hold all of this. Someone is coming."
          className="mt-4 w-full resize-none rounded-card border border-line bg-paper px-4 py-3 font-serif text-lg leading-relaxed text-ink placeholder:text-ink-mute/60 transition-colors duration-150 ease-out focus:border-plum/60" />
        
        <div className="mt-3 flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-line">
            <div
              className="h-px bg-plum/60 transition-[width] duration-150 ease-out"
              style={{ width: `${fill * 100}%` }} />
            
          </div>
          <span className="font-sans text-xs text-ink-mute">
            {fill < 0.4 ? 'Room for more' : fill < 1 ? 'Good length' : 'Full card'}
          </span>
        </div>
      </div>

      <div>
        <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
          On the card, in your hand
        </p>
        <div className="mt-4 flex aspect-[5/3] flex-col justify-between rounded-card border border-line bg-canvas p-6">
          <p className="max-w-[28ch] font-serif text-xl leading-snug text-ink">
            {draft.message || 'You do not have to hold all of this. Someone is coming.'}
          </p>
          <div>
            <div className="h-px w-16 bg-plum/40" />
            <p className="mt-3 font-sans text-xs leading-relaxed text-ink-mute">
              Message this number and someone answers. That is all you have to do.
            </p>
          </div>
        </div>
      </div>
    </div>);

}