import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { Digitalizacao } from './components/sections/Digitalizacao';
import { Services } from './components/sections/Services';
import { GedKaisen } from './components/sections/GedKaisen';
import { About } from './components/sections/About';
import { Mission } from './components/sections/Mission';
import { Methodology } from './components/sections/Methodology';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/layout/Footer';
import { Wave, C } from './components/ui/Wave';

export function App() {
  return (
    <div className="min-h-screen bg-white text-ink font-sans">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Digitalizacao />
        <Wave from={C.white} to={C.blue} />
        <Services />
        <Wave from={C.blue} to={C.ink} />
        <GedKaisen />
        <Wave from={C.ink} to={C.white} />
        <About />
        <Wave from={C.white} to={C.green} />
        <Mission />
        <Wave from={C.green} to={C.tint} />
        <Methodology />
        <Wave from={C.tint} to={C.white} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
