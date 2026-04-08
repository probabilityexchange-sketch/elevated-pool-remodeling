import { motion } from 'motion/react';
import { Layers, Droplets, Layout, Zap, CornerDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Layers,
    title: "Pool Tile",
    description: "From iridescent glass to hand-painted ceramics, our tile installations are the jewelry of your pool.",
    link: "/showroom/tile"
  },
  {
    icon: Droplets,
    title: "Pool Plaster",
    description: "Premium quartz and pebble finishes that define your water's color and texture for decades.",
    link: "/showroom/plaster"
  },
  {
    icon: Layout,
    title: "Pool Decking",
    description: "Natural stone, pavers, and decorative concrete designed for beauty and heat resistance.",
    link: "/showroom/decking"
  },
  {
    icon: Zap,
    title: "Pool Equipment",
    description: "Energy-efficient pumps, heaters, and automation systems that make maintenance effortless.",
    link: "/showroom/equipment"
  },
  {
    icon: CornerDownRight,
    title: "Pool Coping",
    description: "The perfect transition from water to land, crafted with architectural precision.",
    link: "/showroom/coping"
  }
];

export default function Features() {
  return (
    <section id="philosophy" className="bg-surface-container py-32 px-6 limestone-texture">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl text-on-surface mb-8 leading-tight editorial-scale"
            >
              Mastering the <span className="italic font-normal text-primary">Art of Remodeling.</span>
            </motion.h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              We specialize exclusively in the transformation of existing pools. By focusing solely on remodeling, we bring a level of expertise and structural integrity that new-build contractors simply cannot match.
            </p>
            <div className="h-0.5 w-16 bg-tertiary" />
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface p-10 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <service.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-headline text-xl mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                <Link 
                  to={service.link}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors flex items-center gap-2"
                >
                  View Showroom <span className="text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
