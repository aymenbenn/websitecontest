import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Selection } from '../types/audit';

interface CheckoutValue {
  selections: Selection[];
  bundleSelected: boolean;
  add: (selection: Selection) => void;
  remove: (tierId: string) => void;
  toggleBundle: () => void;
  clear: () => void;
  has: (tierId: string) => boolean;
  count: number;
}

const CheckoutContext = createContext<CheckoutValue | null>(null);

export function CheckoutProvider({ children }: {children: React.ReactNode;}) {
  const [selections, setSelections] = useState<Selection[]>([]);
  const [bundleSelected, setBundleSelected] = useState(false);

  const add = useCallback((selection: Selection) => {
    setBundleSelected(false);
    setSelections((prev) => {
      const withoutService = prev.filter((s) => s.serviceId !== selection.serviceId);
      return [...withoutService, selection];
    });
  }, []);

  const remove = useCallback((tierId: string) => {
    setSelections((prev) => prev.filter((s) => s.tierId !== tierId));
  }, []);

  const toggleBundle = useCallback(() => {
    setBundleSelected((prev) => {
      if (!prev) setSelections([]);
      return !prev;
    });
  }, []);

  const clear = useCallback(() => {
    setSelections([]);
    setBundleSelected(false);
  }, []);

  const value = useMemo<CheckoutValue>(
    () => ({
      selections,
      bundleSelected,
      add,
      remove,
      toggleBundle,
      clear,
      has: (tierId: string) => selections.some((s) => s.tierId === tierId),
      count: bundleSelected ? 1 : selections.length
    }),
    [selections, bundleSelected, add, remove, toggleBundle, clear]
  );

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error('useCheckout must be used inside CheckoutProvider');
  return ctx;
}