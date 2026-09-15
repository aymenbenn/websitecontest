import { bundle, findService, findTier } from '../data/services';
import type { Selection } from '../types/audit';

export interface LineItem {
  id: string;
  name: string;
  detail: string;
  price: number;
  turnaround: string;
}

export function buildLineItems(selections: Selection[], bundleSelected: boolean): LineItem[] {
  if (bundleSelected) {
    return [
    {
      id: bundle.id,
      name: bundle.name,
      detail: 'All six Deep Dive audits + combined roadmap',
      price: bundle.price,
      turnaround: bundle.turnaround
    }];

  }

  return selections.flatMap((sel) => {
    const service = findService(sel.serviceId);
    const tier = findTier(sel.serviceId, sel.tierId);
    if (!service || !tier) return [];
    return [
    {
      id: tier.id,
      name: service.name,
      detail: `${tier.name} tier`,
      price: tier.price,
      turnaround: tier.turnaround
    }];

  });
}

export const VAT_RATE = 0.2;

export function totals(items: LineItem[]) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  const vat = Math.round(subtotal * VAT_RATE);
  return { subtotal, vat, total: subtotal + vat };
}