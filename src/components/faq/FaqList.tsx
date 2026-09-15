import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { faqs } from '../../data/faqs';

export function FaqList() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const reduce = useReducedMotion();

  return (
    <ul className="border-t border-line">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <li key={faq.id} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-150 ease-swift hover:text-accent">
                
                <span className="text-[16px] font-medium">{faq.question}</span>
                {isOpen ?
                <MinusIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" /> :

                <PlusIcon className="h-4 w-4 shrink-0 text-mute" aria-hidden="true" />
                }
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`faq-panel-${faq.id}`}
                initial={reduce ? undefined : { height: 0, opacity: 0 }}
                animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-3xl pb-6 pr-10 text-[15px] leading-relaxed text-mute">{faq.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}