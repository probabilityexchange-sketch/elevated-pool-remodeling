import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Consultation & Vision",
    description: "We begin with an on-site evaluation of your landscape's unique topography and your personal aesthetic goals."
  },
  {
    number: "02",
    title: "Architectural Design",
    description: "Our designers design a 3D blueprint for your remodel that harmonizes modern structural lines with the natural Texas environment."
  },
  {
    number: "03",
    title: "Structural Engineering",
    description: "We reinforce every basin and feature with precision engineering to ensure your sanctuary lasts for generations."
  },
  {
    number: "04",
    title: "Master Craftsmanship",
    description: "Our specialized masons execute the vision using hand-selected limestone and premium finishes."
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-surface py-32 px-6 border-t border-outline-variant/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              The Journey
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl text-on-surface editorial-scale"
            >
              Our Architectural Process
            </motion.h2>
          </div>
          <p className="text-on-surface-variant max-w-sm leading-relaxed">
            From the first sketch to the final stone placement, we maintain a standard of excellence that is unmatched in North Fort Worth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-surface-container-low group hover:bg-surface-container-high transition-colors"
            >
              <span className="font-headline text-5xl text-tertiary/20 absolute top-4 right-4 group-hover:text-tertiary/40 transition-colors">
                {step.number}
              </span>
              <h3 className="font-headline text-xl mb-4 mt-8 relative z-10">{step.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
