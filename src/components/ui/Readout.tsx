import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Severity } from '../../types/audit';

export const severityStyles: Record<Severity, {label: string;dot: string;text: string;}> = {
  critical: { label: 'Critical', dot: 'bg-bad', text: 'text-bad' },
  warning: { label: 'Warning', dot: 'bg-warn', text: 'text-warn' },
  opportunity: { label: 'Opportunity', dot: 'bg-accent', text: 'text-accent' }
};

function barTone(value: number) {
  if (value < 45) return 'bg-bad';
  if (value < 70) return 'bg-warn';
  return 'bg-accent';
}

interface MetricBarProps {
  label: string;
  value: number;
  note: string;
}

/** A single measured line in an audit readout: label, score bar, and the raw number behind it. */
export function MetricBar({ label, value, note }: MetricBarProps) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-mute">{label}</span>
        <span className="font-mono text-[13px] tabular-nums text-fg">{value}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-raise">
        <motion.div
          className={`h-full rounded-full ${barTone(value)}`}
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={reduce ? { width: `${value}%` } : undefined} />
        
      </div>
      <p className="mt-2 font-mono text-[10px] text-faint">{note}</p>
    </div>);

}

export function SeverityTag({ severity }: {severity: Severity;}) {
  const s = severityStyles[severity];
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-mute">
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {s.label}
    </span>);

}