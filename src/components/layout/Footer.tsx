import { Logo } from '../assets/Logo';
import { COMPANY, kaisenLink } from '../../data/institutionalData';

const NAV = [['Digitalização', '#solucoes'], ['Serviços', '#servicos'], ['Plataforma', '#plataforma'], ['Sobre', '#sobre'], ['Como funciona', '#metodo'], ['Contato', '#contato']];
const ext = kaisenLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
const link = 'hover:text-brand transition-colors';

export function Footer() {
  return (
    <footer className="bg-[#F5F9FD] text-ink/80 border-t-4 border-[#8DC63F]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo className="h-10" />
          <p className="max-w-xs leading-relaxed">Digitalização, organização e gestão eletrônica de documentos para prefeituras, órgãos públicos e empresas.</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="font-semibold text-ink mb-4">Navegação</p>
          <ul className="space-y-2.5">
            {NAV.map(([t, h]) => <li key={h}><a href={h} className={link}>{t}</a></li>)}
            <li><a href={kaisenLink.href} {...ext} className={link}>Área do cliente</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-ink mb-4">Contato</p>
          <ul className="space-y-2.5 text-sm leading-relaxed">
            <li>{COMPANY.phoneDisplay}</li>
            <li className="break-all">{COMPANY.email}</li>
            <li>{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-[#0066CC]/15 text-sm text-ink/60 flex flex-col md:flex-row gap-2 justify-between">
        <p>{COMPANY.fullName}. CNPJ {COMPANY.cnpj}</p>
        <div className="flex flex-col md:items-end gap-1">
          <p>© {new Date().getFullYear()} SOCON. Todos os direitos reservados.</p>
          <p>
            Este site foi desenvolvido pela{' '}
            <a
              href="https://www.instagram.com/crystallcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-leaf transition-colors underline underline-offset-2"
            >
              Crystal Code
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
