import { motion } from 'motion/react';

const projects = [
  {
    title: "The Westover Monolith",
    tags: ["Flagstone", "Modern"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd2-HJ_jg_aQxFVtK3DFuHkamI_xT4InO58wXrabBwITBiUsCY27zRKu5tlLySlZr-UTxmPTSLSWCnsBBQwmHoxRGsq0MuZWqdvBN32iqMcGp4bfJt0cz2cRWqfo8sngCPs4KJFNrChXRe7SZCn8A4FSc0-o-vADTCXHL1LVWu8B2Afwmyifya9I05BHVvRKMX3Zcn42CXbD2CVaBmSvSeSEsPsL4g8WBtf70ukSRBWrOaJz3JirJ1e78tJqsg909bNXBpNLZfXWpk",
    offset: false
  },
  {
    title: "Clearfork Retreat",
    tags: ["Sanctuary", "Native"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2IKfo4v2InTx0lzGawwoIO7glWVH4-QHvdiC-_nSZhOvVx4jMdt02UduiGwYedZgAIBDGBgBaa3zxTAChjeQY2AVifz4eetn68r028TCvJeYYV3TQhe1gFzCIHbPzVzwFeYNwwl0olniPIStLLyZpAA_sqc6UVkm0ayJcH7z_ezUXj9sMz-tGbyQN830pZvdZK9ggUjFkHLHlaq7JKehHiNJ7zxMyxW4GMvsidPjceELeVGBhpXP7sSoq7nrwQkL4Ylo2_g8tOvYl",
    offset: true
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-surface py-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-xs font-bold tracking-widest uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl text-on-surface editorial-scale"
            >
              Remodeling <span className="italic font-normal text-primary">Transformed.</span>
            </motion.h2>
            <p className="mt-6 text-on-surface-variant leading-relaxed">
              We take existing structures and breathe new life into them with premium materials and structural precision.
            </p>
          </div>
          <span className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">
            Fort Worth & Surrounding Areas
          </span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${project.offset ? 'md:pt-32' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all" 
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-on-background/0 group-hover:bg-on-background/10 transition-colors" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-secondary-container text-on-secondary-container text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-headline text-3xl group-hover:text-primary transition-colors editorial-scale">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
