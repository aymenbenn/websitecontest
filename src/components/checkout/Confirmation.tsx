import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2Icon, MailIcon } from 'lucide-react';
import { buildLineItems, totals } from '../../utils/pricing';
import { formatPrice } from '../../utils/format';
import { useCheckout } from '../../contexts/CheckoutContext';
import type { PaymentDetails } from './PaymentStep';

interface ConfirmationProps {
  details: PaymentDetails;
  when: string;
}

export function Confirmation({ details, when }: ConfirmationProps) {
  const { selections, bundleSelected } = useCheckout();
  const items = buildLineItems(selections, bundleSelected);
  const { total } = totals(items);

  return (
    <div className="mx-auto max-w-2xl py-6 text-center">
      <CheckCircle2Icon className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
      <h1 className="mt-6 text-[32px] font-semibold leading-tight tracking-tightest md:text-[40px]">
        Booked. Your audit starts {when.split(' at ')[0]}.
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-mute">
        We have emailed {details.email} a receipt for {formatPrice(total)}, the calendar invite for{' '}
        <span className="text-fg">{when}</span>, and the read-only access request for {details.website}.
      </p>

      <dl className="mt-10 divide-y divide-line rounded-lg border border-line bg-panel text-left">
        {items.map((item) =>
        <div key={item.id} className="flex items-center gap-4 p-5">
            <div>
              <dt className="text-sm font-medium">{item.name}</dt>
              <dd className="mt-1 font-mono text-[10px] text-faint">
                {item.detail} · report in {item.turnaround}
              </dd>
            </div>
            <span className="ml-auto font-mono text-[13px] tabular-nums">{formatPrice(item.price)}</span>
          </div>
        )}
      </dl>

      <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] text-faint">
        <MailIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Nothing in your inbox within 10 minutes? Email hello@auditlab.example
      </p>

      <Link
        to="/"
        className="mt-10 inline-block text-sm text-accent underline underline-offset-4 transition-colors duration-150 ease-swift hover:text-fg">
        
        Back to the overview
      </Link>
    </div>);

}