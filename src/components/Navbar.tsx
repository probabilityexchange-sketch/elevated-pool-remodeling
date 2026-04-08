import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Waves, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const showroomLinks = [
  { name: 'Pool Tile', path: '/showroom/tile' },
  { name: 'Pool Plaster', path: '/showroom/plaster' },
  { name: 'Pool Decking', path: '/showroom/decking' },
  { name: 'Pool Equipment', path: '/showroom/equipment' },
  { name: 'Pool Coping', path: '/showroom/coping' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowroomOpen, setIsShowroomOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: isHome ? '#portfolio' : '/#portfolio' },
    { name: 'Process', href: isHome ? '#process' : '/#process' },
    { name: 'Reviews', href: isHome ? '#testimonials' : '/#testimonials' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    } ${!isHome ? 'bg-surface border-b border-outline-variant/10' : ''}`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <Waves className="text-primary group-hover:rotate-12 transition-transform" size={28} />
          <span className="text-xl font-headline font-black text-on-surface uppercase tracking-widest leading-none">
            Elevated
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Showroom Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsShowroomOpen(true)}
            onMouseLeave={() => setIsShowroomOpen(false)}
          >
            <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              Showroom <ChevronDown size={14} className={`transition-transform duration-300 ${isShowroomOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isShowroomOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-surface border border-outline-variant shadow-xl py-4 overflow-hidden"
                >
                  {showroomLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                      onClick={() => setIsShowroomOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href={isHome ? "#contact" : "/#contact"}
            className="bg-primary text-on-primary px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-outline-variant overflow-hidden"
            id="mobile-menu"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-widest text-on-surface-variant"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-outline-variant/20" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Our Showroom</p>
              {showroomLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-bold uppercase tracking-widest text-on-surface-variant pl-4 border-l border-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={isHome ? "#contact" : "/#contact"}
                className="bg-primary text-on-primary px-6 py-4 text-center text-xs font-bold tracking-widest uppercase mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
