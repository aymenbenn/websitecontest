import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[background-color,border-color,color,transform] duration-150 ease-swift active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accentFg hover:bg-accent/85',
  outline: 'border border-line2 bg-transparent text-fg hover:border-accent/60 hover:bg-raise',
  ghost: 'text-mute hover:text-fg'
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>);

}

export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children
}: CommonProps & {to: string;}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>);

}