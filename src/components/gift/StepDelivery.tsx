import React from 'react';
import { Field, inputClass } from './Field';
import type { StepProps } from '../../types/gift';

export function StepDelivery({ draft, update }: StepProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div className="flex flex-col gap-6">
        <Field label="Address" htmlFor="addressLine1">
          <input
            id="addressLine1"
            type="text"
            value={draft.addressLine1}
            onChange={(e) => update('addressLine1', e.target.value)}
            placeholder="Street and number"
            className={inputClass}
            autoComplete="shipping address-line1" />
          
        </Field>
        <Field label="Apartment, floor, care of" htmlFor="addressLine2">
          <input
            id="addressLine2"
            type="text"
            value={draft.addressLine2}
            onChange={(e) => update('addressLine2', e.target.value)}
            className={inputClass}
            autoComplete="shipping address-line2" />
          
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="City" htmlFor="city">
            <input
              id="city"
              type="text"
              value={draft.city}
              onChange={(e) => update('city', e.target.value)}
              className={inputClass}
              autoComplete="shipping address-level2" />
            
          </Field>
          <Field label="Postcode" htmlFor="postcode">
            <input
              id="postcode"
              type="text"
              value={draft.postcode}
              onChange={(e) => update('postcode', e.target.value)}
              className={inputClass}
              autoComplete="shipping postal-code" />
            
          </Field>
        </div>
      </div>

      <div className="rounded-card border border-line bg-paper p-6">
        <Field
          label="When it should arrive"
          htmlFor="deliveryDate"
          hint="We suggest two weeks before she is due, so it is in the house before the hospital bag leaves it.">
          
          <input
            id="deliveryDate"
            type="date"
            value={draft.deliveryDate}
            onChange={(e) => update('deliveryDate', e.target.value)}
            className={inputClass} />
          
        </Field>
        <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          {[
          'Unbranded outer box. Nothing on it says what is inside.',
          'No signature required. It can be left with a neighbour.',
          'If the birth comes early, the care starts anyway.'].
          map((note) =>
          <li key={note} className="flex gap-3">
              <span className="mt-2 h-1 w-3 shrink-0 bg-moss" aria-hidden="true" />
              <span className="font-sans text-sm leading-relaxed text-ink-soft">{note}</span>
            </li>
          )}
        </ul>
      </div>
    </div>);

}