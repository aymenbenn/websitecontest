import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
{
  heading: 'The gift',
  links: [
  { label: 'What arrives', to: '/#object' },
  { label: 'Packages', to: '/#packages' },
  { label: 'Give this gift', to: '/gift' }]

},
{
  heading: 'The care',
  links: [
  { label: 'What she controls', to: '/#data' },
  { label: 'Care balance', to: '/#balance' },
  { label: 'First Week Check', to: '/first-week-check' }]

},
{
  heading: 'Studio',
  links: [
  { label: 'Motion direction', to: '/motion' },
  { label: 'Practitioners', to: '/#care' },
  { label: 'Privacy, in plain words', to: '/#data' }]

}];


export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-shell/60">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div>
            <p className="font-serif text-2xl tracking-tightish text-ink">Aftercare</p>
            <p className="mt-3 max-w-[34ch] font-sans text-sm leading-relaxed text-ink-mute">
              Someone should be looking after her, too. We are the people who do it, for as long as
              she needs us.
            </p>
          </div>
          {columns.map((col) =>
          <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                {col.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="font-sans text-sm text-ink-soft transition-colors duration-150 ease-out hover:text-plum">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>
        <p className="mt-14 border-t border-line pt-6 font-sans text-xs text-ink-mute">
          © {new Date().getFullYear()} Aftercare. Care is delivered by licensed practitioners in
          her area.
        </p>
      </div>
    </footer>);

}