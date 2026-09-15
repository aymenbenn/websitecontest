import React, { useEffect, useState } from 'react';
import { CheckCircle2Icon, ClockIcon, ShieldCheckIcon } from 'lucide-react';
import { StepIndicator } from '../components/checkout/StepIndicator';
import { SelectStep } from '../components/checkout/SelectStep';
import { PaymentStep, type PaymentDetails } from '../components/checkout/PaymentStep';
import { ScheduleStep } from '../components/checkout/ScheduleStep';
import { Confirmation } from '../components/checkout/Confirmation';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { useSeo } from '../hooks/useSeo';

const trust = [
{ icon: ShieldCheckIcon, text: 'Five material findings or a full refund' },
{ icon: ClockIcon, text: 'Slot reserved the moment payment clears' },
{ icon: CheckCircle2Icon, text: 'Fixed price — no scope creep, no retainer' }];


export function Checkout() {
  useSeo(
    'Buy an Audit or Book a Call — Secure Checkout | Auditlab',
    'Choose your website audit, pay securely by card via Stripe, and book your kick-off slot in one sitting. Fixed price, full refund guarantee.'
  );

  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<PaymentDetails | null>(null);
  const [when, setWhen] = useState<string | null>(null);
  const [scopingCall, setScopingCall] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [step]);

  if (details && when) {
    return (
      <div className="mx-auto max-w-content px-5 py-16 lg:px-8 lg:py-24">
        <Confirmation details={details} when={when} />
      </div>);

  }

  return (
    <>
      <section className="border-b border-line" aria-labelledby="checkout-heading">
        <div className="mx-auto max-w-content px-5 pb-8 pt-12 lg:px-8 lg:pt-16">
          <h1 id="checkout-heading" className="text-[32px] font-semibold leading-tight tracking-tightest md:text-[42px]">
            Buy your audit and book the kick-off.
          </h1>
          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
            {trust.map((t) =>
            <li key={t.text} className="flex items-center gap-2 text-[13px] text-mute">
                <t.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {t.text}
              </li>
            )}
          </ul>
          <div className="mt-8 border-t border-line pt-6">
            <StepIndicator current={step} />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 lg:grid-cols-[1fr_360px] lg:gap-14 lg:px-8">
        <div>
          {step === 0 && <SelectStep onNext={() => setStep(1)} />}
          {step === 1 &&
          <PaymentStep
            onBack={() => setStep(0)}
            onPaid={(d) => {
              setDetails(d);
              setStep(2);
            }} />

          }
          {step === 2 && details && <ScheduleStep onConfirm={setWhen} />}
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <OrderSummary editable={step === 0} />
          <div className="mt-4 rounded-lg border border-line bg-panel/50 p-5">
            <p className="text-[13px] font-medium">Not ready to buy?</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Book a free 15-minute scoping call below and we will tell you which audit answers your question.
            </p>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-panel/40" aria-labelledby="scoping-heading">
        <div className="mx-auto max-w-content px-5 py-16 lg:px-8">
          <h2 id="scoping-heading" className="sr-only">
            Free scoping call
          </h2>
          {scopingCall ?
          <div id="schedule" className="scroll-mt-32 rounded-lg border border-accent/40 bg-accent/[0.05] p-7">
              <p className="flex items-center gap-2 text-[15px] font-semibold">
                <CheckCircle2Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                Scoping call booked for {scopingCall}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Invite sent. Bring your Analytics access if you have it — we can often spot the first finding live.
              </p>
            </div> :

          <ScheduleStep
            id="schedule"
            heading="Or book a free 15-minute scoping call"
            body="No payment, no obligation. We will tell you which audit fits — including when the honest answer is that you do not need one yet."
            ctaLabel="Book free call"
            idleNote="Free · 15 minutes · straight answer"
            duration="15 min"
            onConfirm={setScopingCall} />

          }
        </div>
      </section>
    </>);

}