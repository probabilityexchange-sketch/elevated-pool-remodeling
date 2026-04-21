import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-0">
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
