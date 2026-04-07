import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Portfolio />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
