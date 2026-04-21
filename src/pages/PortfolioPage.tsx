import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Elevated Pool Remodeling</title>
        <meta
          name="description"
          content="A dedicated portfolio of real pool remodels, including demolition, resurfacing, tile, decking, coping, and finished backyard transformations."
        />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-0">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
