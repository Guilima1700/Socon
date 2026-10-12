import React from 'react';
import { TARGET_SECTORS } from '../../data/institutionalData';
import { Landmark, Building2, Briefcase } from 'lucide-react';

export const TargetSectors: React.FC = () => {
  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'Landmark':
        return <Landmark className="w-8 h-8 text-[#8DC63F]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#0066CC]" />;
      default:
        return <Briefcase className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="setores" className="py-24 bg-[#0F172A] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
            Públicos Atendidos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Soluções desenhadas para órgãos públicos e empresas.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Atendemos organizações com alto fluxo de documentos que necessitam de organização rápida e segurança jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARGET_SECTORS.map((sector, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#0B0F17] border border-slate-800 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="p-4 rounded-xl bg-slate-900 inline-block border border-slate-800">
                {getSectorIcon(sector.iconName)}
              </div>
              <span className="text-[11px] font-bold text-[#8DC63F] uppercase tracking-wider block">
                {sector.highlight}
              </span>
              <h3 className="text-xl font-bold text-white">{sector.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};