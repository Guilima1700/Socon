import { Reveal } from '../ui/Reveal';

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-leaf text-ink py-20 md:py-28">
      <div aria-hidden className="drift absolute -right-24 -top-24 w-[24rem] h-[24rem] rounded-full border-[3rem] border-white/25" />
      <Reveal className="relative max-w-4xl mx-auto px-6">
        <p className="font-semibold mb-5">Nossa missão</p>
        <p className="t-quote">Oferecer soluções em digitalização e gestão documental que contribuam para a modernização administrativa, a eficiência operacional e a segurança das informações.</p>
      </Reveal>
    </section>
  );
}
