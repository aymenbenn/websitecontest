import React from 'react';

export const inputClass =
'w-full rounded-card border border-line bg-paper px-4 py-3 font-sans text-base text-ink placeholder:text-ink-mute/60 transition-colors duration-150 ease-out focus:border-plum/60';

interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, hint, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block font-sans text-sm text-ink">
        {label}
      </label>
      {hint && <p className="mt-1 font-sans text-xs leading-relaxed text-ink-mute">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>);

}