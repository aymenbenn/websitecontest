import React from 'react';
import { packages } from '../../data/packages';
import type { GiftDraft } from '../../types/gift';

interface StepReviewProps {
  draft: GiftDraft;
  onEdit: (stepIndex: number) => void;
}

export function StepReview({ draft, onEdit }: StepReviewProps) {
  const pkg = packages.find((p) => p.id === draft.packageId);
  const address = [draft.addressLine1, draft.addressLine2, draft.city, draft.postcode].
  filter(Boolean).
  join(', ');

  const rows: {label: string;value: string;step: number;}[] = [
  { label: 'For', value: draft.herName || 'Not yet written', step: 0 },
  { label: 'Due', value: draft.dueDate || 'Not yet chosen', step: 0 },
  { label: 'Care', value: pkg ? `${pkg.name} — ${pkg.duration.toLowerCase()}` : '—', step: 1 },
  {
    label: 'Her circle',
    value: draft.openToCircle ?
    `Open. ${draft.invitees.filter(Boolean).length} invited so far.` :
    'Closed. Only your gift.',
    step: 2
  },
  { label: 'Ships to', value: address || 'Not yet written', step: 3 },
  { label: 'Arrives', value: draft.deliveryDate || 'Not yet chosen', step: 3 },
  { label: 'Card reads', value: draft.message || 'Not yet written', step: 4 }];


  return (
    <div className="mx-auto max-w-readable">
      <ul className="flex flex-col divide-y divide-line border-y border-line">
        {rows.map((row) =>
        <li key={row.label} className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                {row.label}
              </p>
              <p className="mt-1.5 max-w-[42ch] font-serif text-lg leading-snug text-ink">
                {row.value}
              </p>
            </div>
            <button
            type="button"
            onClick={() => onEdit(row.step)}
            className="mt-1 shrink-0 font-sans text-sm text-plum underline decoration-plum/30 underline-offset-4 transition-colors duration-150 ease-out hover:text-plum-soft">
            
              Edit
            </button>
          </li>
        )}
      </ul>

      <div className="mt-8 rounded-card border border-line bg-paper p-6">
        <p className="font-serif text-lg leading-snug text-ink">
          One payment. Nothing recurring, nothing expires early.
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-mute">
          Payment is shown here in the live product. This is the design, so nothing is charged.
        </p>
        <button
          type="button"
          disabled
          className="mt-5 w-full cursor-not-allowed rounded-full bg-plum/40 px-6 py-3.5 font-sans text-sm text-paper">
          
          Send this gift
        </button>
      </div>
    </div>);

}