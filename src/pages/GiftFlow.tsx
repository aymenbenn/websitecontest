import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { flowSteps } from '../data/flow';
import { emptyDraft, type GiftDraft } from '../types/gift';
import { StepHer } from '../components/gift/StepHer';
import { StepPackage } from '../components/gift/StepPackage';
import { StepCircle } from '../components/gift/StepCircle';
import { StepDelivery } from '../components/gift/StepDelivery';
import { StepMessage } from '../components/gift/StepMessage';
import { StepReview } from '../components/gift/StepReview';

interface GiftFlowProps {
  showDesktopNotes: boolean;
}

export function GiftFlow({ showDesktopNotes }: GiftFlowProps) {
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState<GiftDraft>(emptyDraft);
  const reduced = useReducedMotion();
  const step = flowSteps[index];

  const update = <K extends keyof GiftDraft,>(key: K, value: GiftDraft[K]) =>
  setDraft((prev) => ({ ...prev, [key]: value }));

  const go = (next: number) => {
    setIndex(Math.max(0, Math.min(flowSteps.length - 1, next)));
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  const panels = [
  <StepHer key="her" draft={draft} update={update} />,
  <StepPackage key="package" draft={draft} update={update} />,
  <StepCircle key="circle" draft={draft} update={update} />,
  <StepDelivery key="delivery" draft={draft} update={update} />,
  <StepMessage key="message" draft={draft} update={update} />,
  <StepReview key="review" draft={draft} onEdit={go} />];


  return (
    <main className="bg-canvas pb-28 lg:pb-0">
      <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          {/* Progress — a rail on desktop, a single line on mobile */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
              Step {index + 1} of {flowSteps.length}
            </p>
            <div
              className="mt-3 flex h-px w-full gap-1 lg:hidden"
              role="progressbar"
              aria-valuenow={index + 1}
              aria-valuemin={1}
              aria-valuemax={flowSteps.length}
              aria-label="Gift flow progress">
              
              {flowSteps.map((s, i) =>
              <span
                key={s.id}
                className={`h-px flex-1 ${i <= index ? 'bg-plum' : 'bg-line'}`} />

              )}
            </div>
            <h1 className="mt-5 font-serif text-3xl leading-[1.08] tracking-tightish text-ink md:text-4xl lg:hidden">
              {step.title}
            </h1>

            <ol className="mt-6 hidden flex-col gap-1 lg:flex">
              {flowSteps.map((s, i) =>
              <li key={s.id}>
                  <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index ? 'step' : undefined}
                  className={`flex w-full items-baseline gap-4 border-l py-2.5 pl-4 text-left transition-colors duration-150 ease-out ${
                  i === index ?
                  'border-plum text-ink' :
                  'border-line text-ink-mute hover:text-ink-soft'}`
                  }>
                  
                    <span className="font-sans text-xs">{String(s.number).padStart(2, '0')}</span>
                    <span className="font-serif text-lg leading-snug">{s.title}</span>
                  </button>
                </li>
              )}
            </ol>
          </div>

          {/* Panel */}
          <div>
            <div className="hidden lg:block">
              <h1 className="font-serif text-4xl leading-[1.06] tracking-tightish text-ink">
                {step.title}
              </h1>
            </div>
            <p className="mt-3 max-w-readable font-sans text-base leading-relaxed text-ink-soft">
              {step.intent}
            </p>

            <AnimatePresence mode="wait" initial={false}>
              <motion.section
                key={step.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: reduced ? 0.12 : 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="mt-8"
                aria-label={step.title}>
                
                {panels[index]}
              </motion.section>
            </AnimatePresence>

            {showDesktopNotes &&
            <div className="mt-10 rounded-card border border-dashed border-line bg-shell/40 p-5">
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                  Desktop treatment note
                </p>
                <p className="mt-2 max-w-readable font-sans text-sm leading-relaxed text-ink-soft">
                  {step.desktopNote}
                </p>
              </div>
            }

            {/* Desktop navigation */}
            <div className="mt-10 hidden items-center justify-between border-t border-line pt-6 lg:flex">
              <button
                type="button"
                onClick={() => go(index - 1)}
                disabled={index === 0}
                className="inline-flex items-center gap-2 font-sans text-sm text-ink-soft transition-colors duration-150 ease-out hover:text-ink disabled:opacity-35">
                
                <ArrowLeftIcon className="h-4 w-4" />
                Back
              </button>
              {index < flowSteps.length - 1 &&
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 font-sans text-sm text-paper transition-colors duration-150 ease-out hover:bg-plum-soft">
                
                  Continue
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation — pinned, the only pinned element in the flow */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-canvas/95 px-5 py-4 backdrop-blur-sm lg:hidden">
        <div className="flex items-center gap-3">
          {index > 0 &&
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Back"
            className="rounded-full border border-line p-3 text-ink">
            
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
          }
          {index < flowSteps.length - 1 ?
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="flex-1 rounded-full bg-plum px-6 py-3.5 font-sans text-sm text-paper">
            
              Continue
            </button> :

          <span className="flex-1 rounded-full bg-plum/40 px-6 py-3.5 text-center font-sans text-sm text-paper">
              Send this gift
            </span>
          }
        </div>
      </div>
    </main>);

}