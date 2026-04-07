import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical pool remodel take?",
    answer: "A standard remodeling project typically takes between 4 to 8 weeks, depending on the complexity and material selection. We provide a detailed timeline during the consultation phase."
  },
  {
    question: "Do you offer structural repairs or just aesthetic upgrades?",
    answer: "We specialize in full structural remodeling. This includes reinforced basins, plumbing overhaul, and high-end masonry that ensures your pool lasts for decades."
  },
  {
    question: "What materials do you recommend for North Texas soil?",
    answer: "Given the shifting clay soils of North Texas, we recommend native limestone and high-durability flagstone. We also use advanced reinforcement techniques to prevent shifting."
  },
  {
    question: "Can you remodel a pool during the winter months?",
    answer: "Yes, winter is often the best time to remodel in Texas. It ensures your pool is ready for the first heat wave of spring and summer."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface-container py-32 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
          >
            Insights
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl text-on-surface editorial-scale mb-8 leading-tight"
          >
            Common Questions
          </motion.h2>
          <p className="text-on-surface-variant leading-relaxed">
            Understanding the remodeling process is the first step toward your remodeled sanctuary. We're here to clarify every aspect of the project.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-outline-variant/30 overflow-hidden"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <span className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                {activeIndex === index ? <Minus size={20} className="text-tertiary" /> : <Plus size={20} className="text-secondary" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
