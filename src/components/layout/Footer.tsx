import { Logo } from '../assets/Logo';
import { COMPANY, kaisenLink } from '../../data/institutionalData';

const NAV = [['Digitalização', '#solucoes'], ['Serviços', '#servicos'], ['GED Kaisen', '#kaisen'], ['Como funciona', '#metodo'], ['Contato', '#contato']];
const ext = kaisenLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <div className="inline-block rounded-xl bg-white px-4 py-3"><Logo className="h-8" /></div>
          <p className="max-w-xs leading-relaxed">Digitalização, organização e gestão eletrônica de documentos para prefeituras, órgãos públicos e empresas.</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="font-semibold text-white mb-4">Navegação</p>
          <ul className="space-y-2.5">
            {NAV.map(([t, h]) => <li key={h}><a href={h} className="hover:text-leaf transition-colors">{t}</a></li>)}
            <li><a href={kaisenLink.href} {...ext} className="hover:text-leaf transition-colors">Área do cliente</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white mb-4">Contato</p>
          <ul className="space-y-2.5 text-sm leading-relaxed">
            <li>{COMPANY.phoneDisplay}</li>
            <li className="break-all">{COMPANY.email}</li>
            <li>{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-white/15 text-sm text-white/60 flex flex-col md:flex-row gap-2 justify-between">
        <p>{COMPANY.fullName}. CNPJ {COMPANY.cnpj}</p>
        <p>© {new Date().getFullYear()} SOCON. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
