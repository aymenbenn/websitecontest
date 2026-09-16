import React from 'react';
import { CheckIcon } from 'lucide-react';
import { packages } from '../../data/packages';
import type { StepProps } from '../../types/gift';

export function StepPackage({ draft, update }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
      <legend className="sr-only">Choose a length of care</legend>
      {packages.map((pkg) => {
        const selected = draft.packageId === pkg.id;
        return (
          <label
            key={pkg.id}
            className={`flex cursor-pointer flex-col rounded-card border bg-paper p-5 transition-colors duration-150 ease-out md:p-6 ${
            selected ? 'border-plum' : 'border-line hover:border-ink/25'}`
            }>
            
            <span className="flex items-start justify-between gap-4">
              <span className="font-serif text-2xl tracking-tightish text-ink">{pkg.name}</span>
              <span
                className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                selected ? 'border-plum bg-plum text-paper' : 'border-line'}`
                }
                aria-hidden="true">
                
                {selected && <CheckIcon className="h-3 w-3" />}
              </span>
            </span>
            <input
              type="radio"
              name="package"
              value={pkg.id}
              checked={selected}
              onChange={() => update('packageId', pkg.id)}
              className="sr-only" />
            
            <span className="mt-1 font-sans text-sm text-ink-mute">{pkg.duration}</span>
            <span className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">
              {pkg.summary}
            </span>
            <span className="mt-auto pt-5 font-sans text-xs text-ink-mute">{pkg.note}</span>
          </label>);

      })}
    </fieldset>);

}