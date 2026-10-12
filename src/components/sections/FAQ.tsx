import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/institutionalData';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0F17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas sobre Gestão Documental & Consultoria
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#0F172A] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between text-white font-semibold text-base focus:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8DC63F] transition-transform duration-200 flex-shrink-0 ml-4 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};