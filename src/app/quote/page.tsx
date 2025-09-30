import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main>
        <QuoteForm />
      </main>
      
      <Footer />
    </div>
  );
}


