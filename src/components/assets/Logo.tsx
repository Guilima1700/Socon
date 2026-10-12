import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-9" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 18 C24 15 27 12 30 12 H64 L78 26 V82 C78 85 75 88 72 88 H30 C27 88 24 85 24 82 Z" stroke="#8DC63F" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M64 12 V26 H78" stroke="#8DC63F" strokeWidth="4.5" strokeLinejoin="round" />
        <rect x="16" y="32" width="22" height="6" rx="3" fill="#0066CC" />
        <rect x="42" y="22" width="26" height="6" rx="3" fill="#0066CC" />
        <rect x="30" y="52" width="46" height="6" rx="3" fill="#0066CC" />
        <rect x="52" y="72" width="28" height="6" rx="3" fill="#0066CC" />
        <path d="M68 44 H38 C32 44 32 54 38 54 H62 C68 54 68 64 62 64 H28" stroke="#8DC63F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold tracking-tight text-xl leading-none text-[#0066CC]">
          SOCON
        </span>
        <span className="text-[10px] tracking-tight font-medium text-slate-500 mt-0.5 leading-none">
          Soluções & Consultoria
        </span>
      </div>
    </div>
  );
};