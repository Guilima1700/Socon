import { Landmark, Building2, Briefcase, Users, Check, FolderOpen, Scan, Zap, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { PUBLIC_INTEREST, COMPANY_INTEREST } from '../../data/institutionalData';

const interesse = (detail: string) => () => window.dispatchEvent(new CustomEvent('interesse', { detail }));

const PUBLIC_AUDIENCE = [
  { t: 'Prefeituras municipais', i: Landmark },
  { t: 'Secretarias municipais', i: Building2 },
  { t: 'Órgãos da administração pública', i: Briefcase },
  { t: 'Autarquias e instituições públicas', i: Users },
];
const PUBLIC_SERVICES = [
  'Digitalização de processos licitatórios e documentos de licitação',
  'Documentos financeiros, contábeis, administrativos e contratos',
  'Classificação e indexação para localizar informações com rapidez',
  'Apoio à transparência, à prestação de contas e à gestão de arquivos públicos',
];
const COMPANY_ITEMS = [
  { i: FolderOpen, t: 'Organizar seus arquivos', d: 'Classificação, padronização e indexação para encontrar qualquer documento quando precisar.' },
  { i: Scan, t: 'Digitalizar documentos acumulados', d: 'Grandes acervos de contratos e documentos financeiros, contábeis e administrativos, com OCR quando aplicável.' },
  { i: Zap, t: 'Modernizar rotinas administrativas', d: 'Consultoria para organizar processos administrativos e melhorar os fluxos de trabalho da empresa.' },
];
const DIFFS = [
  'Experiência em projetos de digitalização de documentos públicos',
  'Capacidade de trabalhar com diferentes categorias de documentos administrativos',
  'Organização e padronização dos arquivos digitais',
  'Tecnologias de digitalização e OCR',
  'Soluções adaptadas às necessidades de cada instituição',
  'Compromisso com qualidade, prazos e confidencialidade',
  'Atenção às normas arquivísticas e à legislação aplicável',
];
const cta = 'group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-4 rounded-full font-semibold transition-colors';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-end">
          <Reveal>
            <Eyebrow>Sobre a SOCON</Eyebrow>
            <h2 className="t-h2">Especialistas em digitalização e gestão documental, para o setor público e para empresas</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-lg text-ink/75 leading-relaxed">
            <p>A SOCON transforma acervos físicos em documentos digitais organizados, facilitando o acesso às informações, a recuperação de arquivos e a modernização dos processos administrativos.</p>
            <p>Atua especialmente na digitalização de documentos de licitação, financeiros, administrativos e outros registros institucionais, para uma gestão documental mais eficiente, organizada e segura.</p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="flex">
            <div className="on-brand relative isolate overflow-hidden flex flex-col w-full rounded-[2rem] bg-brand text-white p-7 sm:p-10">
              <div aria-hidden className="drift absolute -right-20 -bottom-24 -z-10 w-72 h-72 rounded-full border-[3rem] border-white/10" />
              <span className="w-12 h-12 rounded-2xl bg-white/15 grid place-items-center"><Landmark className="w-6 h-6" aria-hidden /></span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight">Prefeituras e órgãos públicos</h3>
              <p className="mt-3 text-white/85 leading-relaxed">Digitalização e organização de acervos para uma gestão pública mais eficiente, com atenção às normas arquivísticas e à legislação aplicável.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {PUBLIC_AUDIENCE.map((a) => (
                  <li key={a.t} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-sm"><a.i className="w-4 h-4 text-leaf" aria-hidden />{a.t}</li>
                ))}
              </ul>
              <ul className="mt-7 space-y-3">
                {PUBLIC_SERVICES.map((s) => (
                  <li key={s} className="flex gap-3"><span className="mt-0.5 w-6 h-6 rounded-full bg-leaf grid place-items-center shrink-0"><Check className="w-4 h-4 text-ink" aria-hidden /></span>{s}</li>
                ))}
              </ul>
              <a href="#contato" onClick={interesse(PUBLIC_INTEREST)} className={`${cta} mt-9 self-start bg-leaf text-ink hover:bg-white`}>
                Solicitar proposta para o órgão<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex">
            <div className="flex flex-col w-full rounded-[2rem] border-2 border-brand bg-white p-7 sm:p-10">
              <span className="w-12 h-12 rounded-2xl bg-[#0066CC]/10 text-brand grid place-items-center"><Briefcase className="w-6 h-6" aria-hidden /></span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight">Sua empresa ainda depende de arquivos físicos? Simplifique sua rotina com a SOCON.</h3>
              <p className="mt-3 text-ink/75 leading-relaxed">Soluções para empresas que precisam organizar seus arquivos, digitalizar documentos acumulados ou modernizar suas rotinas administrativas.</p>
              <ul className="mt-7 space-y-3">
                {COMPANY_ITEMS.map((x) => (
                  <li key={x.t} className="group flex gap-4 rounded-2xl bg-[#F5F9FD] p-4 transition-transform duration-300 hover:translate-x-1">
                    <span className="w-11 h-11 rounded-full bg-leaf text-ink grid place-items-center shrink-0"><x.i className="w-5 h-5" aria-hidden /></span>
                    <div><p className="font-bold">{x.t}</p><p className="mt-1 text-sm text-ink/75 leading-relaxed">{x.d}</p></div>
                  </li>
                ))}
              </ul>
              <a href="#contato" onClick={interesse(COMPANY_INTEREST)} className={`${cta} mt-9 self-start bg-brand text-white hover:bg-[#0A2A4D]`}>
                Quero uma proposta para minha empresa<ArrowRight className="w-4 h-4 text-leaf transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="rounded-3xl bg-[#F5F9FD] p-6 sm:p-12">
          <Reveal><Eyebrow>Diferenciais</Eyebrow><h2 className="t-h2 mb-10">Por que escolher a SOCON</h2></Reveal>
          <ul className="grid md:grid-cols-2 gap-x-14">
            {DIFFS.map((d, i) => (
              <Reveal key={d} delay={(i % 2) * 0.08}>
                <li className="flex gap-4 py-5 border-t border-[#0066CC]/15 list-none">
                  <span className="w-7 h-7 rounded-full bg-leaf grid place-items-center shrink-0"><Check className="w-4 h-4 text-ink" aria-hidden /></span>
                  <p className="text-lg leading-snug">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
