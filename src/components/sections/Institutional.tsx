import React from 'react';
import { CheckCircle2, Shield, Target, Award } from 'lucide-react';

export const Institutional: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0F172A] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
              Apresentação Institucional
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Tecnologia e organização para uma gestão mais eficiente.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              A <strong className="text-white">SOCON Soluções e Consultoria</strong> é especializada em Gestão Eletrônica de Documentos (GED) e consultoria organizacional com atuação destacada em órgãos públicos, autarquias e entidades corporativas.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Nosso compromisso é estruturar, proteger e desburocratizar o acesso a informações essenciais, assegurando conformidade às normas arquivísticas, segurança da informação e agilidade decisória para prefeitos, secretários e diretores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">Localização instantânea de processos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">Preservação do acervo documental</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">Apoio total à transparência pública</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">Metodologia arquivística rigorosa</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-3">
              <Shield className="w-8 h-8 text-[#0066CC]" />
              <h3 className="text-lg font-bold text-white">Segurança & Confiabilidade</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigoroso controle de acesso e sigilo em conformidade com as diretrizes de governança e segurança da informação.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-3">
              <Target className="w-8 h-8 text-[#8DC63F]" />
              <h3 className="text-lg font-bold text-white">Foco no Setor Público</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experiência sólida nas rotinas e particularidades de prefeituras, autarquias e secretarias municipais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800 space-y-3 sm:col-span-2">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Sede em Sergipe & Atuação Regional</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Estrutura sediada em Aracaju/SE, pronta para atender com agilidade operacional e suporte técnico presencial ou remoto.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};