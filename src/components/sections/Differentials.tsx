import React from 'react';
import { Zap, Database, Lock } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco 1: Diferenciais */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
              Por que escolher a SOCON?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Mais precisão na gestão. Menos burocracia no dia a dia.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <Zap className="w-8 h-8 text-[#8DC63F]" />
              <h3 className="text-lg font-bold text-white">Atendimento Ágil & Direto</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comunicação desburocratizada e alinhamento próximo com os gestores para acelerar a execução de cada projeto.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <Database className="w-8 h-8 text-[#0066CC]" />
              <h3 className="text-lg font-bold text-white">Tecnologia OCR & GED</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sistemas e softwares modernos para digitalização com reconhecimento textual e indexação por metadados precisos.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <Lock className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Conformidade & Sigilo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Atenção rigorosa às normas arquivísticas, segurança da informação e confidencialidade documental.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-slate-800">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0B0F17] border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-[#8DC63F] uppercase tracking-wider">Nossa Missão</span>
            <h4 className="text-xl font-bold text-white">Eficiência & Transparência</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Oferecer soluções inovadoras em gestão documental e consultoria organizacional, contribuindo para maior eficiência, transparência e segurança da informação.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0B0F17] border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Nossa Visão</span>
            <h4 className="text-xl font-bold text-white">Referência em Sergipe e Nordeste</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ser referência em GED e modernização administrativa no Estado de Sergipe e em todo o Nordeste, reconhecida pela qualidade e inovação dos serviços prestados.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0B0F17] border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-[#8DC63F] uppercase tracking-wider">Nossos Valores</span>
            <h4 className="text-xl font-bold text-white">Ética e Responsabilidade</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ética, compromisso, transparência, inovação, responsabilidade social e foco constante nas necessidades do cliente.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};