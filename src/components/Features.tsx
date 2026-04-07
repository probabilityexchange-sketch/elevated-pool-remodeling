import { motion } from 'motion/react';
import { MapPin, Ruler, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Local Mastery",
    description: "Specializing in Fort Worth's unique geology, we utilize native limestone and flagstone that harmonizes with our local environment."
  },
  {
    icon: Ruler,
    title: "Precision Remodeling",
    description: "Structural integrity is our foundation. From reinforced basins to high-end masonry, we remodel for longevity and aesthetic brilliance."
  },
  {
    icon: ShieldCheck,
    title: "Sanctuary Standard",
    description: "We don't just remodel pools; we remodel private retreats designed to withstand the Texas elements while maintaining timeless elegance."
  }
];

export default function Features() {
  return (
    <section id="philosophy" className="bg-surface-container py-32 px-6 limestone-texture">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl text-on-surface mb-8 leading-tight editorial-scale"
            >
              The North Texas Standard
            </motion.h2>
            <p className="text-on-surface-variant leading-relaxed">
              Every project is a dialogue between architecture and nature. We source materials that reflect the rugged beauty of our region.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface p-10 shadow-sm hover:shadow-md transition-shadow group"
              >
                <feature.icon className="text-tertiary mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-headline text-xl mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
