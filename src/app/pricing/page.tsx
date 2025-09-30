import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main>
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}


