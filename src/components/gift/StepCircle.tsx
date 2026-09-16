import React from 'react';
import { PlusIcon, XIcon } from 'lucide-react';
import { inputClass } from './Field';
import type { StepProps } from '../../types/gift';

export function StepCircle({ draft, update }: StepProps) {
  const setInvitee = (index: number, value: string) =>
  update(
    'invitees',
    draft.invitees.map((v, i) => i === index ? value : v)
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-12">
      <div>
        <button
          type="button"
          role="switch"
          aria-checked={draft.openToCircle}
          onClick={() => update('openToCircle', !draft.openToCircle)}
          className={`flex w-full items-start gap-4 rounded-card border p-5 text-left transition-colors duration-150 ease-out ${
          draft.openToCircle ? 'border-moss bg-moss/10' : 'border-line bg-paper'}`
          }>
          
          <span
            className={`mt-1 h-6 w-11 shrink-0 rounded-full border ${
            draft.openToCircle ? 'border-moss bg-moss/30' : 'border-line bg-shell'}`
            }
            aria-hidden="true">
            
            <span
              className={`mt-[3px] block h-4 w-4 rounded-full bg-ink transition-[margin] duration-150 ease-calm ${
              draft.openToCircle ? 'ml-6' : 'ml-1'}`
              } />
            
          </span>
          <span>
            <span className="block font-serif text-xl text-ink">
              Let others add to this gift after you send it
            </span>
            <span className="mt-1 block font-sans text-sm leading-relaxed text-ink-mute">
              They receive the same card you do, and can add nights, meals or appointments. She is
              never shown who gave what unless she asks.
            </span>
          </span>
        </button>

        {draft.openToCircle &&
        <div className="mt-8">
            <p className="font-sans text-sm text-ink">Who should be invited?</p>
            <p className="mt-1 font-sans text-xs text-ink-mute">
              Optional. You can also share a link instead.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {draft.invitees.map((invitee, i) =>
            <li key={i} className="flex gap-2">
                  <input
                type="email"
                value={invitee}
                onChange={(e) => setInvitee(i, e.target.value)}
                placeholder="name@email.com"
                aria-label={`Invitee ${i + 1}`}
                className={inputClass} />
              
                  {draft.invitees.length > 1 &&
              <button
                type="button"
                onClick={() =>
                update(
                  'invitees',
                  draft.invitees.filter((_, index) => index !== i)
                )
                }
                aria-label={`Remove invitee ${i + 1}`}
                className="shrink-0 rounded-card border border-line px-3 text-ink-mute transition-colors duration-150 ease-out hover:text-ink">
                
                      <XIcon className="h-4 w-4" />
                    </button>
              }
                </li>
            )}
            </ul>
            <button
            type="button"
            onClick={() => update('invitees', [...draft.invitees, ''])}
            className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-plum transition-colors duration-150 ease-out hover:text-plum-soft">
            
              <PlusIcon className="h-4 w-4" />
              Add someone
            </button>
          </div>
        }
      </div>

      <div>
        <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
          What her circle receives
        </p>
        <div className="mt-4 rounded-card border border-line bg-paper p-6">
          <p className="font-serif text-lg leading-snug text-ink">
            {draft.herName || 'Nora'} is being looked after for the months after the birth.
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
            You can add a night where someone else is awake, a week of dinners, or an appointment at
            her door. No account needed.
          </p>
          <span className="mt-5 inline-block rounded-full bg-plum px-5 py-2.5 font-sans text-xs text-paper">
            Add to her care
          </span>
        </div>
        <p className="mt-3 font-sans text-xs leading-relaxed text-ink-mute">
          Preview only. On mobile this collapses into a single tappable sample.
        </p>
      </div>
    </div>);

}