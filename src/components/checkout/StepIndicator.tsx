import React from 'react';
import { CheckIcon } from 'lucide-react';

export const checkoutSteps = ['Choose audits', 'Details & payment', 'Book kick-off'] as const;

export function StepIndicator({ current }: {current: number;}) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-wider">
      {checkoutSteps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex items-center gap-3">
            <span
              className={`flex items-center gap-2 ${active ? 'text-accent' : done ? 'text-fg' : 'text-faint'}`}
              aria-current={active ? 'step' : undefined}>
              
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] tabular-nums ${
                active ?
                'border-accent text-accent' :
                done ?
                'border-accent/50 bg-accent/10 text-accent' :
                'border-line2 text-faint'}`
                }>
                
                {done ? <CheckIcon className="h-3 w-3" aria-hidden="true" /> : i + 1}
              </span>
              {label}
            </span>
            {i < checkoutSteps.length - 1 &&
            <span className="h-px w-6 bg-line" aria-hidden="true" />
            }
          </li>);

      })}
    </ol>);

}