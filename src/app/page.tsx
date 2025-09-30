import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import PricingCTA from '@/components/PricingCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <PricingCTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
