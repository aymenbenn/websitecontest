import React from 'react';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
}

export function Field({ id, label, error, hint, className = '', ...rest }: FieldProps) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[13px] font-medium text-fg">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`mt-2 h-11 w-full rounded-md border bg-ink px-3.5 text-[15px] text-fg placeholder:text-faint transition-colors duration-150 ease-swift focus:border-accent ${
        error ? 'border-bad' : 'border-line2'}`
        }
        {...rest} />
      
      {hint && !error &&
      <p id={`${id}-hint`} className="mt-1.5 font-mono text-[10px] text-faint">
          {hint}
        </p>
      }
      {error &&
      <p id={`${id}-error`} className="mt-1.5 font-mono text-[10px] text-bad">
          {error}
        </p>
      }
    </div>);

}