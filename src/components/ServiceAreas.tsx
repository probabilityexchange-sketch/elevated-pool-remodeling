import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const cities = [
  "Fort Worth", "Dallas", "Arlington", "Southlake", 
  "Colleyville", "Keller", "Westlake", "Trophy Club", 
  "Mansfield", "Weatherford", "Benbrook", "Burleson"
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-surface py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              Our Coverage
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl text-on-surface editorial-scale mb-8"
            >
              Craftsmanship Across North Texas
            </motion.h2>
            <p className="text-on-surface-variant leading-relaxed mb-12 max-w-lg">
              Based in the heart of Tarrant County, we bring architectural excellence to backyards throughout the DFW metroplex. From the rolling hills of Westlake to the classic neighborhoods of Fort Worth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/20 hover:border-tertiary/40 transition-colors"
              >
                <MapPin className="text-tertiary" size={14} />
                <span className="text-sm font-bold tracking-tight text-on-surface-variant uppercase">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
