import type { ReactNode } from 'react';

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 mb-4 text-sm font-semibold ${light ? 'text-white/85' : 'text-brand'}`}>
      <span className="w-8 h-0.5 rounded-full bg-leaf" />{children}
    </span>
  );
}
