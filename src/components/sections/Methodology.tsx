import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useReducedMotion, type MotionValue } from 'framer-motion';
import { METHODOLOGY } from '../../data/institutionalData';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

function Step({ i, title, text, p }: { i: number; title: string; text: string; p: MotionValue<number> }) {
  const t = i / METHODOLOGY.length;
  const bg = useTransform(p, [t, t + 0.07], ['#FFFFFF', '#8DC63F']);
  const scale = useTransform(p, [t, t + 0.07], [0.85, 1]);
  const opacity = useTransform(p, [t - 0.08, t + 0.05], [0.3, 1]);
  const y = useTransform(p, [t - 0.08, t + 0.05], [10, 0]);
  return (
    <div className="relative flex md:block gap-5">
      <motion.div style={{ backgroundColor: bg, scale }} className="relative z-10 shrink-0 w-12 h-12 rounded-full border-2 border-brand text-ink text-lg font-bold grid place-items-center ring-8 ring-[#F5F9FD]">
        {i + 1}
      </motion.div>
      <motion.div style={{ opacity, y }} className="md:mt-6">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-2 text-ink/75 leading-relaxed max-w-xs">{text}</p>
      </motion.div>
    </div>
  );
}

export function Methodology() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const done = useMotionValue(1);
  const p = reduce ? done : smooth;

  return (
    <section id="metodo" className="py-20 md:py-28 bg-[#F5F9FD]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="t-h2">Do acervo físico ao acesso digital em três etapas</h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 md:mt-20 grid md:grid-cols-3 gap-14 md:gap-8">
          <div aria-hidden className="md:hidden absolute left-[calc(1.5rem-1px)] top-6 bottom-6 w-0.5 bg-[#0066CC]/20">
            <motion.div style={{ scaleY: p }} className="h-full w-full bg-brand origin-top" />
          </div>
          <div aria-hidden className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-[#0066CC]/20">
            <motion.div style={{ scaleX: p }} className="h-full w-full bg-brand origin-left" />
          </div>
          {METHODOLOGY.map((m, i) => <Step key={m.title} i={i} title={m.title} text={m.text} p={p} />)}
        </div>
      </div>
    </section>
  );
}
