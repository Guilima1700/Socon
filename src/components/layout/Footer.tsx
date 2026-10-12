import { Logo } from '../assets/Logo';
import { COMPANY } from '../../data/institutionalData';

export function Footer() {
  return (
    <footer className="border-t border-[#0066CC]/10 py-10 text-sm text-ink/70">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <Logo className="h-7" />
        <p>{COMPANY.fullName}. CNPJ {COMPANY.cnpj}</p>
        <p>© {new Date().getFullYear()} SOCON. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
