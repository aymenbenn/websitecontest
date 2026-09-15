import React, { useMemo, useState } from 'react';
import { addDays, format, isWeekend } from 'date-fns';
import { CalendarCheckIcon, CheckIcon, VideoIcon } from 'lucide-react';
import { Button } from '../ui/Button';

const slots = ['09:00', '10:30', '13:00', '14:30', '16:00'];

function nextWorkingDays(count: number) {
  const days: Date[] = [];
  let cursor = addDays(new Date(), 1);
  while (days.length < count) {
    if (!isWeekend(cursor)) days.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return days;
}

interface ScheduleStepProps {
  onConfirm: (when: string) => void;
  id?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  idleNote?: string;
  duration?: string;
  headingLevel?: 'h2' | 'h3';
}

export function ScheduleStep({
  onConfirm,
  id = 'schedule',
  heading = 'Book your kick-off',
  body = 'Thirty minutes to confirm scope, hand over read-only access and agree what “done” looks like. Your turnaround starts from this call.',
  ctaLabel = 'Confirm kick-off',
  idleNote = 'Choose a time to confirm. Payment is already secured.',
  duration = '30 min',
  headingLevel = 'h2'
}: ScheduleStepProps) {
  const days = useMemo(() => nextWorkingDays(5), []);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const Heading = headingLevel;

  return (
    <div id={id} className="scroll-mt-32">
      <Heading className="text-[22px] font-semibold tracking-tight">{heading}</Heading>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">{body}</p>

      <div className="mt-7 rounded-lg border border-line bg-panel p-6">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-faint">
          <CalendarCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Calendly · Europe/London
        </div>

        <fieldset className="mt-5">
          <legend className="text-[13px] font-medium">Pick a day</legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {days.map((d, i) =>
            <button
              key={d.toISOString()}
              type="button"
              aria-pressed={day === i}
              onClick={() => {
                setDay(i);
                setSlot(null);
              }}
              className={`rounded-md border px-3 py-2.5 text-center transition-colors duration-150 ease-swift ${
              day === i ? 'border-accent bg-accent/[0.06]' : 'border-line bg-ink hover:border-accent/50'}`
              }>
              
                <span className="block font-mono text-[10px] uppercase tracking-wider text-faint">
                  {format(d, 'EEE')}
                </span>
                <span className="mt-1 block text-sm font-medium">{format(d, 'd MMM')}</span>
              </button>
            )}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-[13px] font-medium">Pick a time</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {slots.map((s) =>
            <button
              key={s}
              type="button"
              aria-pressed={slot === s}
              onClick={() => setSlot(s)}
              className={`rounded-md border px-4 py-2 font-mono text-[13px] tabular-nums transition-colors duration-150 ease-swift ${
              slot === s ?
              'border-accent bg-accent/[0.06] text-accent' :
              'border-line bg-ink hover:border-accent/50'}`
              }>
              
                {s}
              </button>
            )}
          </div>
        </fieldset>

        <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 font-mono text-[10px] text-faint">
          <VideoIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
          Google Meet link and calendar invite sent immediately after confirming.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          size="lg"
          disabled={!slot}
          onClick={() => slot && onConfirm(`${format(days[day], 'EEEE d MMMM')} at ${slot}`)}>
          
          <CheckIcon className="h-4 w-4" aria-hidden="true" />
          {ctaLabel}
        </Button>
        <p className="font-mono text-[11px] text-faint">
          {slot ? `${format(days[day], 'EEE d MMM')} · ${slot} · ${duration}` : idleNote}
        </p>
      </div>
    </div>);

}