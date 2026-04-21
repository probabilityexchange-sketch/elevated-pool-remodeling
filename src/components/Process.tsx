import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Set the Meeting",
    description: "We start by scheduling the initial conversation so we can understand the remodel scope, timing, and desired outcome."
  },
  {
    number: "02",
    title: "Measure & Discuss Needs",
    description: "We take measurements, inspect the existing pool, and discuss exactly what the client wants changed, repaired, or upgraded."
  },
  {
    number: "03",
    title: "Provide the Estimate",
    description: "We prepare a remodel estimate based on the existing pool, requested selections, and any scope notes captured during the visit."
  },
  {
    number: "04",
    title: "Get on the Schedule",
    description: "Once the estimate is approved, we lock in the project timeline and line up the crews and materials needed for the remodel."
  },
  {
    number: "05",
    title: "Project Execution",
    description: "A project manager oversees the remodel while masons and crews handle demolition, installation, and finish work."
  },
  {
    number: "06",
    title: "Final Walkthrough",
    description: "We review the completed remodel with the client, confirm the details, and close out any final punch-list items."
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
              Our Pool Remodel Process
            </motion.h2>
          </div>
          <p className="text-on-surface-variant max-w-sm leading-relaxed">
            This process is tailored to existing pool remodels, from the first meeting through the final walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
