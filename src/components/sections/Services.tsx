import { ArrowUpRight } from 'lucide-react';
import { SERVICES, whatsappLink } from '../../data/institutionalData';
import { Reveal } from '../ui/Reveal';

export function Services() {
  return (
    <section id="servicos" className="bg-brand text-white py-24 on-brand">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">Além da digitalização, soluções para toda a gestão documental</h2>
          <div className="mt-6 h-1 w-14 rounded-full bg-leaf" />
        </Reveal>

        <div className="lg:col-span-8 border-t border-white/25">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <a href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${s.title}`)} target="_blank" rel="noopener noreferrer"
                className="group relative block py-8 pl-0 pr-2 border-b border-white/25 transition-all duration-300 hover:pl-6 hover:bg-white/5">
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-leaf transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                    <p className="text-white/85 leading-relaxed max-w-xl">{s.description}</p>
                    <p className="text-sm text-white/70 pt-1">{s.items.join('. ')}.</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 shrink-0 text-leaf transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
