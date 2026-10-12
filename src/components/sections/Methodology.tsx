import { motion, useReducedMotion } from 'framer-motion';
import { METHODOLOGY } from '../../data/institutionalData';

export function Methodology() {
  const reduce = useReducedMotion();
  const view = { once: true, margin: '-80px' };
  return (
    <section id="metodo" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl leading-tight">Do acervo físico ao acesso digital em três etapas</h2>

        <div className="relative mt-16 grid md:grid-cols-3 gap-10 md:gap-8">
          <motion.div aria-hidden initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={view}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="hidden md:block absolute top-5 left-5 right-5 h-0.5 bg-brand origin-left" />
          {METHODOLOGY.map((m, i) => (
            <div key={m.title} className="relative flex md:block gap-5">
              <motion.div initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={view}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.35, ease: 'backOut' }}
                className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-leaf text-ink font-semibold grid place-items-center ring-8 ring-white">
                {i + 1}
              </motion.div>
              <div className="md:mt-6">
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-ink/75 leading-relaxed max-w-xs">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
