import { DOC_TYPES } from '../../data/institutionalData';

export function Marquee() {
  const items = [...DOC_TYPES, ...DOC_TYPES];
  return (
    <div aria-hidden className="border-y border-[#0066CC]/10 py-5 overflow-hidden">
      <div className="marquee flex w-max text-lg font-semibold text-ink/70">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-12 mr-12">{t}<span className="w-2 h-2 rounded-full bg-leaf" /></span>
        ))}
      </div>
    </div>
  );
}
