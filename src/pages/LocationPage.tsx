import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import { getLocationBySlug, getRelatedLocations, Location } from '../data/locations';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function LocationHero({ location }: { location: Location }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-primary/5 to-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="text-primary" size={20} />
          <span className="text-sm font-bold uppercase tracking-widest text-primary">{location.county} County</span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl mb-6 text-on-surface">
          Pool Remodeling in {location.name}
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
          {location.serviceDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-on-primary px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-all">
            {location.contactCTA}
          </button>
          <Link 
            to="/showroom"
            className="border border-primary text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2"
          >
            View Our Showroom <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationStats({ location }: { location: Location }) {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-headline text-3xl mb-12 text-center">{location.name} Market Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">
              {(location.population / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-on-surface-variant">Population</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">
              ${(location.medianHomeValue / 100000).toFixed(1)}M
            </p>
            <p className="text-sm text-on-surface-variant">Median Home Value</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">
              {location.county}
            </p>
            <p className="text-sm text-on-surface-variant">County</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">
              24/7
            </p>
            <p className="text-sm text-on-surface-variant">Service Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedLocations({ currentSlug, locations }: { currentSlug: string; locations: Location[] }) {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-headline text-3xl mb-12">Serving More Fort Worth Suburbs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {locations.map(loc => (
            <Link
              key={loc.slug}
              to={`/pool-remodeling/${loc.slug}`}
              className="p-4 border border-outline-variant/20 hover:border-primary hover:bg-surface-container-low transition-all group"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-2">
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                {loc.name}
              </p>
              <p className="text-xs text-on-surface-variant">{loc.county} County</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LocationPage() {
  const { suburb } = useParams<{ suburb: string }>();
  const location = suburb ? getLocationBySlug(suburb) : undefined;

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const relatedLocations = getRelatedLocations(suburb!, 6);
  const pageTitle = `Pool Remodeling in ${location.name}, TX - Elevated Pool`;
  const pageDescription = `Premium pool remodeling services in ${location.name}, TX. Custom designs, Noble Tile, Pentair equipment. Serving ${location.county} County.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="geo.position" content={`${location.lat};${location.lng}`} />
        <meta name="ICBM" content={`${location.lat},${location.lng}`} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elevated Pool - Pool Remodeling",
            "url": `https://elevated-pool.com/pool-remodeling/${location.slug}`,
            "telephone": "+1-555-POOL-123",
            "areaServed": {
              "@type": "City",
              "name": location.name,
              "addressRegion": location.state,
              "addressCountry": "US"
            },
            "serviceArea": {
              "@type": "City",
              "name": location.name
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": location.lat,
              "longitude": location.lng
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Pool Remodeling in ${location.name}`,
            "description": location.serviceDescription,
            "areaServed": {
              "@type": "City",
              "name": location.name,
              "addressRegion": location.state
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Elevated Pool"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="flex-grow">
        <LocationHero location={location} />
        <LocationStats location={location} />
        <Features />
        <Process />
        <Testimonials />
        <ContactForm />
        <RelatedLocations currentSlug={suburb!} locations={relatedLocations} />
      </main>
      <StickyCallButton />
      <Footer />
    </>
  );
}
