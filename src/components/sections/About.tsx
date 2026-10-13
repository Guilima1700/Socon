import { Landmark, Building2, Briefcase, Users, Archive, Check } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';

const AUDIENCE = [
  { t: 'Prefeituras municipais', i: Landmark },
  { t: 'Secretarias municipais', i: Building2 },
  { t: 'Órgãos da administração pública', i: Briefcase },
  { t: 'Autarquias e instituições públicas', i: Users },
  { t: 'Empresas privadas com grandes acervos documentais', i: Archive },
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

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-20 md:space-y-28">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal className="space-y-5">
            <Eyebrow>Sobre a SOCON</Eyebrow>
            <h2 className="t-h2">Especialistas em digitalização e gestão documental para o setor público</h2>
            <p className="text-lg text-ink/75 leading-relaxed max-w-xl">A SOCON transforma acervos físicos em documentos digitais organizados, facilitando o acesso às informações, a recuperação de arquivos e a modernização dos processos administrativos.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-semibold mb-2">Quem atendemos</p>
            <ul>
              {AUDIENCE.map((a) => (
                <li key={a.t} className="group flex items-center gap-4 py-4 border-b border-[#0066CC]/15 transition-all duration-300 hover:pl-3">
                  <span className="w-11 h-11 rounded-full bg-brand text-white grid place-items-center shrink-0 transition-colors duration-300 group-hover:bg-leaf group-hover:text-ink"><a.i className="w-5 h-5" aria-hidden /></span>
                  <span className="text-lg">{a.t}</span>
                </li>
              ))}
            </ul>
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
