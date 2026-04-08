import { Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'motion/react';

const categories = [
  { name: 'Tile', path: '/showroom/tile' },
  { name: 'Plaster', path: '/showroom/plaster' },
  { name: 'Decking', path: '/showroom/decking' },
  { name: 'Equipment', path: '/showroom/equipment' },
  { name: 'Coping', path: '/showroom/coping' },
];

export default function ShowroomLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <header className="mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
            >
              The Design Showroom
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-7xl text-on-surface mb-8 leading-tight"
            >
              Curated <span className="italic font-normal">Materials.</span>
            </motion.h1>
            
            <div className="flex flex-wrap gap-4 md:gap-8 border-b border-outline-variant/30 pb-6">
              {categories.map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${
                    location.pathname === cat.path 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {cat.name}
                  {location.pathname === cat.path && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </div>
          </header>

          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
