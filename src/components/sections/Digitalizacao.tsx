import { FileText, Search, Scan, FolderOpen, Landmark, Layers, ShieldCheck, Archive } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const LINE = 'border-2 border-[#0066CC]/20 hover:border-brand';
const TILES = [
  { t: 'Processos licitatórios', d: 'Digitalização de processos e documentos de licitação, com o acervo organizado do começo ao fim.', i: Landmark, c: 'bg-brand text-white', span: 'lg:col-span-2 lg:row-span-2', ic: 'bg-white/15', big: true },
  { t: 'Documentos financeiros, contábeis e administrativos', i: FileText, c: LINE, ic: 'bg-[#0066CC]/10 text-brand' },
  { t: 'Contratos, processos e registros institucionais', i: Layers, c: 'bg-leaf text-ink', ic: 'bg-ink/10' },
  { t: 'Organização e classificação dos arquivos digitais', i: FolderOpen, c: LINE, ic: 'bg-[#0066CC]/10 text-brand' },
  { t: 'Indexação para localizar informações com rapidez', i: Search, c: LINE, ic: 'bg-[#0066CC]/10 text-brand' },
  { t: 'OCR para reconhecimento de texto, quando aplicável', d: 'Documentos que podem ser pesquisados pelo conteúdo, não só pelo nome do arquivo.', i: Scan, c: 'bg-ink text-white', span: 'lg:col-span-2', ic: 'bg-white/15' },
  { t: 'Acervos preparados para consulta digital', i: Archive, c: LINE, ic: 'bg-[#0066CC]/10 text-brand' },
  { t: 'Apoio à modernização de arquivos públicos', i: ShieldCheck, c: LINE, ic: 'bg-[#0066CC]/10 text-brand' },
];

export function Digitalizacao() {
  return (
    <section id="solucoes" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">O que digitalizamos e organizamos</h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">Soluções para grandes volumes de documentos físicos, pensadas para as necessidades da administração pública.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TILES.map((x, k) => (
            <Reveal key={x.t} delay={k * 0.06} className={x.span ?? ''}>
              <div className={`group h-full min-h-[11rem] rounded-3xl p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1.5 ${x.c}`}>
                <span className={`w-12 h-12 rounded-2xl grid place-items-center transition-transform duration-300 group-hover:rotate-6 ${x.ic}`}><x.i className="w-6 h-6" aria-hidden /></span>
                <div>
                  <h3 className={`font-semibold leading-snug ${x.big ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{x.t}</h3>
                  {x.d && <p className="mt-3 opacity-85 leading-relaxed">{x.d}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
