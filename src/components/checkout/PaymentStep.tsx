import React, { useState } from 'react';
import { ArrowLeftIcon, CreditCardIcon, LoaderCircleIcon, LockIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Field } from './Field';

export interface PaymentDetails {
  name: string;
  email: string;
  company: string;
  website: string;
}

type Errors = Partial<Record<'name' | 'email' | 'company' | 'website' | 'card' | 'expiry' | 'cvc', string>>;

function formatCard(value: string) {
  return value.
  replace(/\D/g, '').
  slice(0, 16).
  replace(/(.{4})/g, '$1 ').
  trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}

interface PaymentStepProps {
  onBack: () => void;
  onPaid: (details: PaymentDetails) => void;
}

export function PaymentStep({ onBack, onPaid }: PaymentStepProps) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    card: '',
    expiry: '',
    cvc: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [processing, setProcessing] = useState(false);

  function set<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = 'Enter the name on the account';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = 'Enter a valid work email';
    if (values.company.trim().length < 2) next.company = 'Enter your company name';
    if (!/^([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(values.website.replace(/^https?:\/\//i, '')))
    next.website = 'Enter the site to audit, e.g. example.com';
    if (values.card.replace(/\s/g, '').length !== 16) next.card = 'Card number must be 16 digits';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expiry)) next.expiry = 'Use MM/YY';
    if (!/^\d{3,4}$/.test(values.cvc)) next.cvc = '3 or 4 digits';
    return next;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      onPaid({ name: values.name, email: values.email, company: values.company, website: values.website });
    }, 1100);
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form onSubmit={submit} noValidate>
      <h2 className="text-[22px] font-semibold tracking-tight">Your details &amp; payment</h2>
      <p className="mt-2 text-sm leading-relaxed text-mute">
        One charge, no subscription. You pick your kick-off slot on the next screen.
      </p>

      <div aria-live="polite" className="sr-only">
        {errorCount > 0 ? `${errorCount} fields need attention` : ''}
      </div>

      <fieldset className="mt-8">
        <legend className="font-mono text-[10px] uppercase tracking-wider text-faint">Who the report goes to</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field
            id="name"
            label="Full name"
            autoComplete="name"
            placeholder="Alex Morgan"
            value={values.name}
            error={errors.name}
            onChange={(e) => set('name', e.target.value)} />
          
          <Field
            id="email"
            label="Work email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            value={values.email}
            error={errors.email}
            onChange={(e) => set('email', e.target.value)} />
          
          <Field
            id="company"
            label="Company"
            autoComplete="organization"
            placeholder="Company Ltd"
            value={values.company}
            error={errors.company}
            onChange={(e) => set('company', e.target.value)} />
          
          <Field
            id="website"
            label="Website to audit"
            placeholder="example.com"
            hint="Staging URLs welcome — add credentials after payment"
            value={values.website}
            error={errors.website}
            onChange={(e) => set('website', e.target.value)} />
          
        </div>
      </fieldset>

      <fieldset className="mt-9">
        <legend className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
          <CreditCardIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Card details
          <span className="rounded border border-line2 px-1.5 py-0.5 normal-case tracking-normal text-mute">
            Stripe
          </span>
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1.6fr_0.7fr_0.7fr]">
          <Field
            id="card"
            label="Card number"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="4242 4242 4242 4242"
            value={values.card}
            error={errors.card}
            onChange={(e) => set('card', formatCard(e.target.value))} />
          
          <Field
            id="expiry"
            label="Expiry"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="04/28"
            value={values.expiry}
            error={errors.expiry}
            onChange={(e) => set('expiry', formatExpiry(e.target.value))} />
          
          <Field
            id="cvc"
            label="CVC"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="123"
            value={values.cvc}
            error={errors.cvc}
            onChange={(e) => set('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))} />
          
        </div>
      </fieldset>

      <div className="mt-9 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button type="submit" size="lg" disabled={processing}>
          {processing ?
          <>
              <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
              Authorising…
            </> :

          <>
              <LockIcon className="h-4 w-4" aria-hidden="true" />
              Pay &amp; reserve my slot
            </>
          }
        </Button>
        <p className="font-mono text-[10px] leading-relaxed text-faint sm:max-w-[16rem]">
          Refundable in full for 14 days under the findings guarantee.
        </p>
      </div>
    </form>);

}