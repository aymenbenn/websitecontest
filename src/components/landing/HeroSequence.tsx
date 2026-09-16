import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroSequenceProps {
  compact?: boolean;
}

const EASE = [0.23, 1, 0.32, 1] as const;

const markers = [
{ id: 'meal', label: 'Dinner, handled', pos: 'left-[6%] top-[12%]' },
{ id: 'night', label: 'Someone awake', pos: 'right-[8%] top-[6%]' },
{ id: 'appt', label: 'Appointment booked', pos: 'right-[4%] bottom-[30%]' },
{ id: 'wash', label: 'Washing collected', pos: 'left-[10%] bottom-[24%]' }];


/**
 * The hero sequence: a message arrives, small things resolve around her,
 * then the weight lifts. Plays once on mount, never on scroll.
 */
export function HeroSequence({ compact = false }: HeroSequenceProps) {
  const reduced = useReducedMotion();
  const d = (value: number) => reduced ? 0 : value;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-card border border-line bg-paper ${
      compact ? 'aspect-[4/3] shadow-[0_18px_40px_-28px_rgba(21,19,15,0.35)]' : 'aspect-[16/9]'}`
      }
      aria-hidden="true">
      
      {/* 03 — the weight that lifts */}
      <motion.div
        initial={{ opacity: reduced ? 0 : 1, y: 0 }}
        animate={{ opacity: 0, y: -24 }}
        transition={{ duration: reduced ? 0 : 0.3, delay: d(0.62), ease: EASE }}
        className="absolute inset-x-0 bottom-0 h-1/3 bg-ink" />
      

      <motion.div
        initial={{ y: reduced ? 0 : 6 }}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0 : 0.24, delay: d(0.66), ease: EASE }}
        className="absolute inset-0">
        
        {/* 02 — small things resolving */}
        {markers.map((marker, i) =>
        <motion.div
          key={marker.id}
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduced ? 0.12 : 0.2,
            delay: d(0.3 + i * 0.055),
            ease: 'easeOut'
          }}
          className={`absolute ${marker.pos} flex items-center gap-2`}>
          
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            <span
            className={`font-sans text-ink-mute ${compact ? 'text-[10px]' : 'text-xs md:text-sm'}`}>
            
              {marker.label}
            </span>
          </motion.div>
        )}

        {/* 01 — the message arriving */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, x: 8, rotate: 1.2, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: reduced ? 0.12 : 0.26, ease: EASE }}
          className={`absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-card border border-line bg-canvas ${
          compact ? 'p-4' : 'p-6 md:p-7'}`
          }>
          
          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-ink-mute">
            From your circle
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.16, delay: d(0.34), ease: 'easeOut' }}
            className={`mt-2 font-serif leading-snug text-ink ${
            compact ? 'text-base' : 'text-xl md:text-2xl'}`
            }>
            
            Tonight is taken care of. Sleep.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2, delay: d(0.4), ease: 'linear' }}
            className="mt-4 h-px origin-left bg-plum/40" />
          
        </motion.div>
      </motion.div>
    </div>);

}