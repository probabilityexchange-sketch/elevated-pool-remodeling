import { motion } from 'motion/react';
import { Waves } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-6 py-5 max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Waves className="text-primary" size={24} />
          <span className="text-xl font-headline font-black text-on-surface uppercase tracking-widest leading-none">
            Elevated
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8 lg:gap-12"
        >
          {['Portfolio', 'Process', 'Philosophy', 'Reviews', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-primary text-on-primary px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-80"
          >
            Get a Quote
          </a>
        </motion.div>

        {/* Mobile Quote Button */}
        <a 
          href="#contact"
          className="md:hidden bg-primary text-on-primary px-4 py-2 text-[10px] font-bold tracking-widest uppercase"
        >
          Quote
        </a>
      </nav>
    </header>
  );
}
