import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Logo } from '../assets/Logo';
import { kaisenLink } from '../../data/institutionalData';

const LINKS = [
  { href: '#solucoes', label: 'Digitalização' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
];
const ext = kaisenLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
const btn = 'items-center justify-center gap-2 rounded-full font-semibold bg-leaf text-ink transition-colors hover:bg-brand hover:text-white';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,102,204,.12)] py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          <a href="#" onClick={() => setOpen(false)} aria-label="SOCON – início"><Logo className="h-8" /></a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-ink">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-leaf after:transition-transform after:duration-300 hover:after:scale-x-100">{l.label}</a>
            ))}
          </nav>

          <a href={kaisenLink.href} {...ext} className={`hidden lg:inline-flex px-5 py-2.5 text-sm ${btn}`}>Área do cliente <ExternalLink className="w-4 h-4" aria-hidden /></a>

          <button onClick={() => setOpen(!open)} className="lg:hidden grid place-items-center w-11 h-11 -mr-2 text-ink" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <motion.div aria-hidden style={{ scaleX: scrollYProgress }} className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-leaf" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 flex flex-col overflow-y-auto">
            {LINKS.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.06 }}
                className="flex items-center justify-between py-4 text-2xl font-bold tracking-tight border-b border-[#0066CC]/10">
                {l.label}<span className="w-2 h-2 rounded-full bg-leaf" />
              </motion.a>
            ))}
            <a href={kaisenLink.href} {...ext} className={`flex mt-8 px-6 py-4 ${btn}`}>Área do cliente <ExternalLink className="w-4 h-4" aria-hidden /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
