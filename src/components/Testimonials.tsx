import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Elevated Pool Remodeling transformed our outdated 90s pool into a modern masterpiece. Their attention to the limestone detailing is simply unmatched in the Fort Worth area.",
    author: "Sarah J.",
    location: "Southlake, TX"
  },
  {
    quote: "The team was professional, clean, and incredibly precise. They didn't just resurface our pool; they redesigned the entire experience of our backyard.",
    author: "Michael R.",
    location: "Trophy Club, TX"
  },
  {
    quote: "From the initial consultation to the final stone placement, the craftsmanship was exceptional. It's rare to find this level of architectural integrity in pool remodeling.",
    author: "David L.",
    location: "Westlake, TX"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-surface-container-low py-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl text-on-surface editorial-scale"
          >
            Refining the Art of Outdoor Living
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 bg-surface shadow-sm border border-outline-variant/30"
            >
              <Quote className="text-tertiary/10 absolute top-6 right-6" size={48} />
              <p className="text-on-surface-variant leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-on-surface">{t.author}</p>
                <p className="text-xs text-secondary uppercase tracking-widest font-bold">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
