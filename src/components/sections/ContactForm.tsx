import { useState, useEffect, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY, SERVICES, whatsappLink } from '../../data/institutionalData';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';

const field = 'w-full rounded-none bg-transparent text-base border-b-2 border-[#0066CC]/25 py-2.5 text-ink placeholder:text-ink/40 transition-colors focus:border-brand focus:outline-none';

export function ContactForm() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [service, setService] = useState(SERVICES[0].title);

  useEffect(() => {
    const on = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener('interesse', on);
    return () => window.removeEventListener('interesse', on);
  }, []);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*Contato via site – SOCON*\n\n*Nome:* ${name}\n*Órgão/Empresa:* ${org || 'Não informado'}\n*Interesse:* ${service}`;
    window.open(whatsappLink(msg), '_blank');
  };

  return (
    <section id="contato" className="pb-20 md:pb-28 pt-4 md:pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="rounded-3xl border-2 border-brand p-6 sm:p-12 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 min-w-0">
            <div><Eyebrow>Contato</Eyebrow>
            <h2 className="t-h2">Vamos organizar o acervo da sua instituição?</h2></div>
            <ul className="space-y-3 text-ink/80">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand" aria-hidden />{COMPANY.phoneDisplay}</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand shrink-0" aria-hidden /><span className="min-w-0 break-all">{COMPANY.email}</span></li>
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-brand mt-0.5 shrink-0" aria-hidden />{COMPANY.address}</li>
            </ul>
          </div>

          <form onSubmit={handleSend} className="space-y-6">
            <label className="block text-sm font-medium">Seu nome
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do responsável" className={field} />
            </label>
            <label className="block text-sm font-medium">Prefeitura ou empresa
              <input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Nome da instituição" className={field} />
            </label>
            <label className="block text-sm font-medium">Solução desejada
              <select value={service} onChange={(e) => setService(e.target.value)} className={field}>
                {[...SERVICES.map((s) => s.title), 'GED Kaisen'].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <button type="submit" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold transition-colors hover:bg-[#0A2A4D]">
              Conversar pelo WhatsApp
              <Send className="w-4 h-4 text-leaf transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
