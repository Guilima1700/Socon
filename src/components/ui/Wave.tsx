export const C = { white: '#FFFFFF', blue: '#0066CC', green: '#8DC63F', ink: '#0A2A4D', tint: '#F5F9FD' };

export function Wave({ from, to }: { from: string; to: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-8 sm:h-14 lg:h-20 -mb-px" style={{ background: from }}>
      <path d="M0 48C240 96 480 96 720 56S1200 0 1440 40V90H0Z" fill={to} />
    </svg>
  );
}
