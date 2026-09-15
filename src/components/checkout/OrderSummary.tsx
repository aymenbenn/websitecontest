import React from 'react';
import { LockIcon, XIcon } from 'lucide-react';
import { useCheckout } from '../../contexts/CheckoutContext';
import { buildLineItems, totals } from '../../utils/pricing';
import { formatPrice } from '../../utils/format';

export function OrderSummary({ editable = true }: {editable?: boolean;}) {
  const { selections, bundleSelected, remove, toggleBundle } = useCheckout();
  const items = buildLineItems(selections, bundleSelected);
  const { subtotal, vat, total } = totals(items);

  return (
    <aside aria-label="Order summary" className="rounded-lg border border-line bg-panel p-6">
      <h2 className="font-mono text-[11px] uppercase tracking-wider text-mute">Order summary</h2>

      {items.length === 0 ?
      <p className="mt-5 text-sm leading-relaxed text-mute">
          No audits selected yet. Choose one or more on the left — or the Full-Stack bundle.
        </p> :

      <ul className="mt-5 divide-y divide-line border-y border-line">
          {items.map((item) =>
        <li key={item.id} className="flex items-start gap-4 py-4">
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug">{item.name}</p>
                <p className="mt-1 font-mono text-[10px] text-faint">
                  {item.detail} · {item.turnaround}
                </p>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-3">
                <span className="font-mono text-[13px] tabular-nums">{formatPrice(item.price)}</span>
                {editable &&
            <button
              type="button"
              onClick={() => bundleSelected ? toggleBundle() : remove(item.id)}
              className="text-faint transition-colors duration-150 ease-swift hover:text-bad"
              aria-label={`Remove ${item.name}`}>
              
                    <XIcon className="h-3.5 w-3.5" />
                  </button>
            }
              </div>
            </li>
        )}
        </ul>
      }

      <dl className="mt-5 space-y-2 font-mono text-[12px]">
        <div className="flex justify-between text-mute">
          <dt>Subtotal</dt>
          <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-mute">
          <dt>VAT (20%)</dt>
          <dd className="tabular-nums">{formatPrice(vat)}</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-3 text-[15px] text-fg">
          <dt className="font-sans font-semibold">Total due today</dt>
          <dd className="tabular-nums">{formatPrice(total)}</dd>
        </div>
      </dl>

      <p className="mt-5 flex items-center gap-2 font-mono text-[10px] leading-relaxed text-faint">
        <LockIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
        Card processed by Stripe. We never see or store your card details.
      </p>
    </aside>);

}