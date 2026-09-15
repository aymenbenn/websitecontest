import React from 'react';
import { ArrowRightIcon, CheckIcon, LayersIcon } from 'lucide-react';
import { bundle, services } from '../../data/services';
import { useCheckout } from '../../contexts/CheckoutContext';
import { Button } from '../ui/Button';
import { ServiceIcon } from '../ui/ServiceIcon';
import { formatPrice } from '../../utils/format';

export function SelectStep({ onNext }: {onNext: () => void;}) {
  const { selections, bundleSelected, add, remove, toggleBundle, has, count } = useCheckout();

  return (
    <div>
      <h2 className="text-[22px] font-semibold tracking-tight">Choose your audits</h2>
      <p className="mt-2 text-sm leading-relaxed text-mute">
        Pick any combination of tiers, or take all six as the discounted Full-Stack Audit.
      </p>

      <button
        type="button"
        onClick={toggleBundle}
        aria-pressed={bundleSelected}
        className={`mt-6 flex w-full items-center gap-4 rounded-lg border p-5 text-left transition-colors duration-150 ease-swift ${
        bundleSelected ? 'border-accent bg-accent/[0.06]' : 'border-line2 bg-panel hover:border-accent/50'}`
        }>
        
        <LayersIcon className={`h-5 w-5 shrink-0 ${bundleSelected ? 'text-accent' : 'text-mute'}`} aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold">{bundle.name} — all six Deep Dives</span>
          <span className="mt-1 block text-sm text-mute">
            {bundle.turnaround} · save {formatPrice(bundle.listPrice - bundle.price)} against buying separately
          </span>
        </span>
        <span className="ml-auto shrink-0 text-right">
          <span className="block font-mono text-[15px] tabular-nums">{formatPrice(bundle.price)}</span>
          <span className="block font-mono text-[10px] text-faint line-through">{formatPrice(bundle.listPrice)}</span>
        </span>
      </button>

      <p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-faint">Or buy individually</p>

      <ul className="mt-4 space-y-3">
        {services.map((service) =>
        <li key={service.id} className="rounded-lg border border-line bg-panel/50 p-5">
            <div className="flex items-center gap-3">
              <span className="text-accent">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="text-[15px] font-semibold">{service.name}</h3>
            </div>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {service.tiers.map((tier) => {
              const selected = !bundleSelected && has(tier.id);
              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                  selected ? remove(tier.id) : add({ serviceId: service.id, tierId: tier.id })
                  }
                  className={`flex items-center gap-3 rounded-md border p-3.5 text-left transition-colors duration-150 ease-swift ${
                  selected ?
                  'border-accent bg-accent/[0.06]' :
                  'border-line bg-ink hover:border-accent/50'}`
                  }>
                  
                    <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                    selected ? 'border-accent bg-accent text-accentFg' : 'border-line2'}`
                    }
                    aria-hidden="true">
                    
                      {selected && <CheckIcon className="h-3 w-3" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{tier.name}</span>
                      <span className="block font-mono text-[10px] text-faint">{tier.turnaround}</span>
                    </span>
                    <span className="ml-auto font-mono text-[13px] tabular-nums">{formatPrice(tier.price)}</span>
                  </button>);

            })}
            </div>
          </li>
        )}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button size="lg" onClick={onNext} disabled={count === 0}>
          Continue to payment
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
        {count === 0 &&
        <p className="font-mono text-[11px] text-faint">Select at least one audit to continue.</p>
        }
        {count > 0 &&
        <p className="font-mono text-[11px] text-faint">
            {bundleSelected ? 'Full-Stack Audit selected' : `${selections.length} audit(s) selected`}
          </p>
        }
      </div>
    </div>);

}