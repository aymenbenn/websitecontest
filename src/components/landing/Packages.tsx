import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { packages } from '../../data/packages';
import { Placeholder } from '../Placeholder';

export function Packages() {
  const [openId, setOpenId] = useState<string | null>(packages[0].id);
  const reduced = useReducedMotion();

  return (
    <section id="packages" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tightish text-ink md:text-4xl lg:text-[3.25rem]">
            Three lengths of care. The same object arrives with each.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-ink-soft">
            Open one to see what is included, and what she can change once it is hers.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {packages.map((pkg) => {
            const open = openId === pkg.id;
            return (
              <article
                key={pkg.id}
                className={`overflow-hidden rounded-card border bg-canvas transition-colors duration-200 ease-out ${
                open ? 'border-plum/40' : 'border-line'}`
                }>
                
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : pkg.id)}
                    aria-expanded={open}
                    aria-controls={`panel-${pkg.id}`}
                    className="flex w-full items-start justify-between gap-6 p-6 text-left md:items-center md:p-8">
                    
                    <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                      <span className="font-serif text-2xl tracking-tightish text-ink md:text-3xl">
                        {pkg.name}
                      </span>
                      <span className="font-sans text-sm text-ink-mute">{pkg.duration}</span>
                    </span>
                    <span className="mt-1 flex items-center gap-4 md:mt-0">
                      <span className="hidden font-sans text-xs text-ink-mute lg:inline">
                        {pkg.note}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink">
                        {open ?
                        <MinusIcon className="h-4 w-4" /> :

                        <PlusIcon className="h-4 w-4" />
                        }
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open &&
                  <motion.div
                    id={`panel-${pkg.id}`}
                    initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                    exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0.12 : 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                      <div className="border-t border-line px-6 pb-8 pt-8 md:px-8">
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:gap-12">
                          <div>
                            <Placeholder label={pkg.object} ratio="1 / 1" />
                            <p className="mt-4 max-w-[34ch] font-sans text-sm leading-relaxed text-ink-soft">
                              {pkg.summary}
                            </p>
                          </div>

                          <div>
                            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-mute">
                              What is included
                            </p>
                            <ul className="mt-4 flex flex-col divide-y divide-line border-t border-line">
                              {pkg.included.map((item) =>
                            <li
                              key={item}
                              className="py-3 font-sans text-sm leading-relaxed text-ink-soft">
                              
                                  {item}
                                </li>
                            )}
                            </ul>
                          </div>

                          <div className="flex flex-col">
                            <p className="font-sans text-xs uppercase tracking-[0.14em] text-plum">
                              Hers to change
                            </p>
                            <ul className="mt-4 flex flex-col gap-3">
                              {pkg.hersToChange.map((item) =>
                            <li key={item} className="flex gap-3">
                                  <span
                                className="mt-2 h-1 w-3 shrink-0 bg-moss"
                                aria-hidden="true" />
                              
                                  <span className="font-sans text-sm leading-relaxed text-ink-soft">
                                    {item}
                                  </span>
                                </li>
                            )}
                            </ul>
                            <div className="mt-auto pt-8">
                              <Link
                              to="/gift"
                              className="inline-block rounded-full bg-plum px-6 py-3 font-sans text-sm text-paper transition-colors duration-150 ease-out hover:bg-plum-soft">
                              
                                Give {pkg.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </article>);

          })}
        </div>
      </div>
    </section>);

}