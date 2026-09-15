import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, LayersIcon } from 'lucide-react';
import { bundle } from '../../data/services';
import { Button } from '../ui/Button';
import { formatPrice } from '../../utils/format';
import { useCheckout } from '../../contexts/CheckoutContext';

export function BundleOffer() {
  const { toggleBundle, bundleSelected } = useCheckout();
  const navigate = useNavigate();

  function buy() {
    if (!bundleSelected) toggleBundle();
    navigate('/checkout');
  }

  return (
    <section
      id="bundle"
      aria-labelledby="bundle-heading"
      className="scroll-mt-28 border-t border-line bg-panel">
      
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-[11px] text-accent">
            <LayersIcon className="h-3.5 w-3.5" aria-hidden="true" />
            ALL SIX
          </p>
          <h2 id="bundle-heading" className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tightest md:text-[38px]">
            {bundle.name}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">{bundle.summary}</p>
          <div className="mt-8 flex flex-wrap items-baseline gap-4">
            <span className="text-[40px] font-semibold tabular-nums tracking-tightest">
              {formatPrice(bundle.price)}
            </span>
            <span className="font-mono text-[13px] text-faint line-through">{formatPrice(bundle.listPrice)}</span>
            <span className="rounded border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              Save {formatPrice(bundle.listPrice - bundle.price)}
            </span>
          </div>
          <Button size="lg" className="mt-8" onClick={buy}>
            Buy the Full-Stack Audit
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="mt-4 font-mono text-[11px] text-faint">{bundle.turnaround} · one team, one roadmap</p>
        </div>

        <ul className="space-y-3 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          {bundle.includes.map((inc) =>
          <li key={inc} className="flex gap-3 text-[15px] leading-relaxed text-mute">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {inc}
            </li>
          )}
        </ul>
      </div>
    </section>);

}