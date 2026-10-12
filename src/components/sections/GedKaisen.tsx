import type { CSSProperties } from 'react';
import { Check, ExternalLink, FileText, Search } from 'lucide-react';
import { kaisenLink, whatsappLink } from '../../data/institutionalData';
import { Reveal } from '../ui/Reveal';

const ext = kaisenLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
const POINTS = ['Arquivos classificados e indexados para consulta', 'Localização rápida de documentos', 'Apoio à preservação e à segurança das informações'];
const FOLDERS = ['Licitações', 'Financeiro', 'Administrativo', 'Contratos'];
const ROWS = ['Processo licitatório', 'Contrato', 'Documento financeiro', 'Registro administrativo', 'Ofício'];

function Mock() {
  return (
    <figure>
      <div className="rounded-2xl bg-white text-ink shadow-2xl overflow-hidden ring-1 ring-white/20">
        <div className="flex items-center gap-2 px-4 py-3 bg-brand">
          <span className="w-3 h-3 rounded-full bg-white/40" /><span className="w-3 h-3 rounded-full bg-white/40" /><span className="w-3 h-3 rounded-full bg-leaf" />
          <span className="ml-3 text-sm text-white/90">Acervo digital</span>
        </div>
        <div className="grid sm:grid-cols-[9rem_1fr] min-h-[19rem]">
          <ul className="hidden sm:block border-r border-[#0066CC]/15 p-3 space-y-1 text-sm">
            {FOLDERS.map((f, i) => <li key={f} className={`px-3 py-2 rounded-lg ${i === 0 ? 'bg-brand text-white font-semibold' : 'text-ink/70'}`}>{f}</li>)}
          </ul>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 rounded-full border border-[#0066CC]/25 px-4 py-2 text-sm text-ink/60"><Search className="w-4 h-4" aria-hidden />Buscar documento<span className="caret w-0.5 h-4 bg-brand" /></div>
            {ROWS.map((r, i) => (
              <div key={r} className="rowhl flex items-center justify-between rounded-lg px-3 py-2.5 text-sm" style={{ '--d': `${i * 0.8}s` } as CSSProperties}>
                <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-brand" aria-hidden />{r}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold"><Check className="w-3.5 h-3.5 text-brand" aria-hidden />Indexado</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-white/60">Ilustração da organização de um acervo digital.</figcaption>
    </figure>
  );
}

export function GedKaisen() {
  return (
    <section id="kaisen" className="bg-ink text-white py-24 on-brand overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="space-y-7">
          <span className="inline-flex items-center gap-2 text-sm text-white/80"><span className="w-2 h-2 rounded-full bg-leaf" />Nosso software de armazenamento</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">GED Kaisen: o acervo da sua prefeitura organizado e fácil de consultar.</h2>
          <p className="text-lg text-white/80 leading-relaxed">É a plataforma que a SOCON utiliza para armazenar os arquivos das prefeituras, facilitando a consulta, a localização e o gerenciamento das informações.</p>
          <ul className="space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-leaf grid place-items-center shrink-0"><Check className="w-4 h-4 text-ink" aria-hidden /></span>{p}</li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/20 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div><p className="font-semibold">Já é cliente?</p><p className="text-sm text-white/70">Acesse seus arquivos na plataforma.</p></div>
            <a href={kaisenLink.href} {...ext} className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-leaf text-ink font-semibold transition-colors hover:bg-white">
              Área do cliente <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </div>
          <a href={whatsappLink('Olá! Quero conhecer o GED Kaisen para a minha prefeitura.')} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold border-b-2 border-leaf pb-0.5 hover:text-leaf transition-colors">Quero conhecer o GED Kaisen</a>
        </Reveal>
        <Reveal delay={0.15}><Mock /></Reveal>
      </div>
    </section>
  );
}
