import { motion, useReducedMotion } from 'framer-motion';
import { METHODOLOGY } from '../../data/institutionalData';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export function Methodology() {
  const reduce = useReducedMotion();
  const view = { once: true, margin: '-80px' };
  return (
    <section id="metodo" className="py-20 md:py-28 bg-[#F5F9FD]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="t-h2">Do acervo físico ao acesso digital em três etapas</h2>
        </Reveal>

        <div className="relative mt-14 md:mt-20 grid md:grid-cols-3 gap-10 md:gap-8">
          <motion.div aria-hidden initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={view} transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="md:hidden absolute left-[calc(1.5rem-1px)] top-6 bottom-6 w-0.5 bg-brand origin-top" />
          <motion.div aria-hidden initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={view} transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-brand origin-left" />
          {METHODOLOGY.map((m, i) => (
            <div key={m.title} className="relative flex md:block gap-5">
              <motion.div initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={view} transition={{ duration: 0.4, delay: 0.3 + i * 0.35, ease: 'backOut' }}
                className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-leaf text-ink text-lg font-bold grid place-items-center ring-8 ring-[#F5F9FD]">
                {i + 1}
              </motion.div>
              <div className="md:mt-6">
                <h3 className="text-xl font-bold tracking-tight">{m.title}</h3>
                <p className="mt-2 text-ink/75 leading-relaxed max-w-xs">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
