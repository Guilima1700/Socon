import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, delay = 0, x = 0, className }: { children: ReactNode; delay?: number; x?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y: x ? 0 : 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: x ? 0.65 : 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
