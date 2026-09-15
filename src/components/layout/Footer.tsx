import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              role="img"
              aria-label="Image placeholder: client logo mark, 32 by 32 pixels SVG"
              className="hatch flex h-7 w-7 items-center justify-center rounded border border-dashed border-line2 font-mono text-[8px] uppercase text-faint">
              
              logo
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Auditlab</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            Fixed-price website audits across performance, search, experience, analytics and paid media. Written by
            specialists, priced before you buy.
          </p>
          <p className="mt-6 font-mono text-[11px] text-faint">
            hello@auditlab.example · +44 20 7000 0000
          </p>
        </div>

        <nav aria-label="Audits">
          <h2 className="text-xs font-semibold text-fg">Audits</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) =>
            <li key={s.id}>
                <Link
                to={`/services#${s.slug}`}
                className="text-sm text-mute transition-colors duration-150 ease-swift hover:text-fg">
                
                  {s.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-xs font-semibold text-fg">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {[
            { to: '/proof', label: 'Case studies' },
            { to: '/faq', label: 'FAQ & guarantee' },
            { to: '/checkout', label: 'Buy or book' }].
            map((l) =>
            <li key={l.to}>
                <Link
                to={l.to}
                className="text-sm text-mute transition-colors duration-150 ease-swift hover:text-fg">
                
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Auditlab Ltd. Registered in England 00000000.</span>
          <span>Payments by Stripe · Scheduling by Calendly</span>
        </div>
      </div>
    </footer>);

}