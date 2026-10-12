import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../../data/institutionalData';

const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

function ScanIllustration() {
  const paperLines = [60, 100, 84, 100, 70, 100, 92, 58];
  const screenLines = [150, 118, 140, 96];
  return (
    <svg viewBox="0 0 420 380" className="w-full h-auto" role="img" aria-label="Documento em papel sendo digitalizado e indexado">
      {/* papel */}
      <rect x="20" y="20" width="250" height="330" rx="16" fill="#fff" stroke="#0066CC" strokeOpacity=".25" strokeWidth="2" />
      {paperLines.map((w, i) => (
        <rect key={i} x="48" y={52 + i * 34} width={w * 1.9} height="9" rx="4.5" fill="#0A2A4D" fillOpacity=".12" />
      ))}
      {/* feixe do scanner */}
      <g className="scan">
        <rect x="20" y="22" width="250" height="34" fill="#8DC63F" fillOpacity=".18" />
        <rect x="14" y="54" width="262" height="3" rx="1.5" fill="#8DC63F" />
      </g>
      {/* tela digital */}
      <rect x="170" y="150" width="230" height="210" rx="16" fill="#0066CC" />
      <rect x="192" y="174" width="186" height="26" rx="13" fill="#fff" fillOpacity=".18" />
      {screenLines.map((w, i) => (
        <g key={i}>
          <circle cx="198" cy={232 + i * 30} r="4" fill="#8DC63F" />
          <rect className="draw" style={{ '--d': `${i * 0.25}s` } as CSSProperties} x="212" y={227 + i * 30} width={w} height="9" rx="4.5" fill="#fff" />
        </g>
      ))}
      <g className="pop">
        <circle cx="392" cy="150" r="22" fill="#8DC63F" />
        <path d="M382 150l7 7 12-14" fill="none" stroke="#0A2A4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={reduce ? false : 'hidden'} animate="show" transition={{ staggerChildren: 0.12 }} className="space-y-7">
          <motion.h1 variants={rise} className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
            Digitalização de documentos para uma gestão pública mais eficiente.
          </motion.h1>
          <motion.p variants={rise} className="text-lg text-ink/75 max-w-xl leading-relaxed">
            Transformamos acervos físicos de licitação, financeiro e administrativo em arquivos digitais organizados, facilitando o acesso às informações e contribuindo para a modernização dos processos públicos.
          </motion.p>
          <motion.div variants={rise} className="flex flex-wrap items-center gap-6 pt-1">
            <a href={whatsappLink('Olá! Quero solicitar uma proposta para minha instituição.')} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold transition-colors hover:bg-[#0A2A4D]">
              Solicitar uma proposta
              <ArrowRight className="w-4 h-4 text-leaf transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#solucoes" className="font-semibold text-brand border-b-2 border-leaf pb-0.5 hover:border-brand transition-colors">Conhecer nossas soluções</a>
          </motion.div>
          <motion.p variants={rise} className="text-sm text-ink/60">Sede em Aracaju/SE. Atendimento presencial ou remoto.</motion.p>
        </motion.div>

        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }} className="relative max-w-md w-full mx-auto">
          <ScanIllustration />
          {[['Licitação', 'top-0 -left-3 sm:-left-8', '0s'], ['Financeiro', 'top-1/3 -right-3 sm:-right-8', '1.2s'], ['Administrativo', 'bottom-2 left-0 sm:-left-6', '2.4s']].map(([t, pos, d]) => (
            <span key={t} style={{ '--d': d } as CSSProperties} className={`float absolute ${pos} hidden sm:flex items-center gap-2 rounded-full bg-white border border-[#0066CC]/20 shadow-lg px-4 py-2 text-sm font-semibold`}>
              <span className="w-2 h-2 rounded-full bg-leaf" />{t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
