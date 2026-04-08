import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover grayscale-[20%] brightness-[70%]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlWBYokUQkM34mRUNiNrse_Va-PawzGeRFajEFNSegMFfgXn0OPnRXyw9OCFdNSeuqg3aKzIoQnfaST6MUn9Xbitxvq6NoWAosipqv3Zio5hNv9s4kEMkXJbFZgphzO1B3shd0SBoeAm1nhfPf8HJ786x2tlnKXP1DR97J119HYkxRBl-z1ZdRZVL9j7uKieSo1z484VUdef4guEhajhV1_5SQdN4dH8ru7_c-Orfeay734KzSXO_uQRDte2uk_6lvIzK-YTf3W-_1"
          alt="Luxury infinity pool at sunset in North Texas"
          referrerPolicy="no-referrer"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 mb-8"
        >
          <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
            Specializing Exclusively in Pool Renovations
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-headline text-5xl md:text-8xl text-white leading-[1.1] mb-8 editorial-scale max-w-5xl"
        >
          Remodeling Your North Texas <span className="italic font-normal">Sanctuary.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-px w-32 bg-tertiary mb-8 origin-left"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-surface-container-highest text-lg md:text-xl max-w-lg leading-relaxed font-light"
        >
          Architectural precision meets the rugged elegance of the Fort Worth landscape.
        </motion.p>
      </div>
    </section>
  );
}
