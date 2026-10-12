import { useState, useEffect } from 'react';
import { Logo } from '../assets/Logo';
import { Menu, X, ExternalLink } from 'lucide-react';
import { kaisenLink } from '../../data/institutionalData';

const LINKS = [
  { href: '#solucoes', label: 'Digitalização' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#kaisen', label: 'GED Kaisen' },
  { href: '#metodo', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
];
const ext = kaisenLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
const btn = 'items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-leaf text-ink transition-colors hover:bg-brand hover:text-white';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-white/95 backdrop-blur border-b border-[#0066CC]/10 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" aria-label="SOCON – início"><Logo className="h-8" /></a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-leaf after:transition-transform after:duration-300 hover:after:scale-x-100">{l.label}</a>
          ))}
        </nav>

        <a href={kaisenLink.href} {...ext} className={`hidden lg:inline-flex ${btn}`}>Área do cliente <ExternalLink className="w-4 h-4" aria-hidden /></a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-ink" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden px-6 pt-5 pb-6 flex flex-col gap-4 text-ink font-medium">
          {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href={kaisenLink.href} {...ext} className={`flex mt-2 ${btn}`}>Área do cliente <ExternalLink className="w-4 h-4" aria-hidden /></a>
        </nav>
      )}
    </header>
  );
}
