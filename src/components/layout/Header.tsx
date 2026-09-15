import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { useCheckout } from '../../contexts/CheckoutContext';

const nav = [
{ to: '/', label: 'Overview' },
{ to: '/services', label: 'Audits & pricing' },
{ to: '/proof', label: 'Results' },
{ to: '/faq', label: 'FAQ & guarantee' }];


export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCheckout();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center gap-6 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Auditlab — home">
          <span
            role="img"
            aria-label="Image placeholder: client logo mark, 32 by 32 pixels SVG"
            className="hatch flex h-7 w-7 shrink-0 items-center justify-center rounded border border-dashed border-line2 font-mono text-[8px] uppercase text-faint">
            
            logo
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Auditlab</span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
            `rounded px-3 py-2 text-sm transition-colors duration-150 ease-swift ${
            isActive ? 'text-fg' : 'text-mute hover:text-fg'}`

            }>
            
              {item.label}
            </NavLink>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ButtonLink to="/checkout" size="md" className="hidden sm:inline-flex">
            Buy an audit
            {count > 0 &&
            <span className="rounded bg-accentFg/15 px-1.5 font-mono text-[11px] tabular-nums">{count}</span>
            }
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line2 text-fg transition-colors duration-150 ease-swift hover:border-accent/60 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}>
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open &&
      <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {nav.map((item) =>
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
          `block border-b border-line py-3 text-sm ${isActive ? 'text-accent' : 'text-mute'}`
          }>
          
              {item.label}
            </NavLink>
        )}
          <ButtonLink to="/checkout" size="lg" className="mt-4 w-full">
            Buy an audit
          </ButtonLink>
        </nav>
      }
    </header>);

}