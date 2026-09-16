import React from 'react';
import { Field, inputClass } from './Field';
import type { StepProps } from '../../types/gift';

export function StepHer({ draft, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Her first name" htmlFor="herName">
          <input
            id="herName"
            type="text"
            value={draft.herName}
            onChange={(e) => update('herName', e.target.value)}
            placeholder="Nora"
            className={inputClass}
            autoComplete="off" />
          
        </Field>
        <Field
          label="When she is due"
          htmlFor="dueDate"
          hint="An estimate is fine. We ship two weeks before.">
          
          <input
            id="dueDate"
            type="date"
            value={draft.dueDate}
            onChange={(e) => update('dueDate', e.target.value)}
            className={inputClass} />
          
        </Field>
      </div>
      <p className="max-w-readable font-sans text-sm leading-relaxed text-ink-mute">
        That is everything we ask you for about her. Her address comes later, and anything else we
        need she tells us herself — in her own time, and only if she wants to.
      </p>
    </div>);

}