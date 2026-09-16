import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

const nav = [
{ label: 'How it works', to: '/#how' },
{ label: 'What she controls', to: '/#data' },
{ label: 'Packages', to: '/#packages' },
{ label: 'First Week Check', to: '/first-week-check' }];


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
        <Link
          to="/"
          className="font-serif text-lg tracking-tightish text-ink md:text-xl"
          aria-label="Aftercare, home">
          
          Aftercare
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
          <Link
            key={item.to}
            to={item.to}
            className="font-sans text-sm text-ink-soft transition-colors duration-150 ease-out hover:text-ink">
            
              {item.label}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/gift"
            className="hidden rounded-full bg-plum px-5 py-2.5 font-sans text-sm text-paper transition-colors duration-150 ease-out hover:bg-plum-soft md:inline-block">
            
            Give this gift
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}>
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open &&
      <div id="mobile-nav" className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) =>
          <li key={item.to}>
                <Link
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-line/70 py-3 font-serif text-lg text-ink">
              
                  {item.label}
                </Link>
              </li>
          )}
            <li className="pt-4">
              <Link
              to="/gift"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-plum px-5 py-3 text-center font-sans text-sm text-paper">
              
                Give this gift
              </Link>
            </li>
          </ul>
        </div>
      }
    </header>);

}