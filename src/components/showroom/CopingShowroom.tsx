import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Ruler, Layers, ChevronRight, CheckCircle2, DraftingCompass } from 'lucide-react'

const copingStyles = [
  {
    name: "Bullnose Coping",
    description: "The timeless standard with a smooth, 180-degree rounded edge. Designed for comfort, safety, and a soft architectural transition between the pool and the deck.",
    sampleImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    installedImg: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    profile: "Rounded Radius",
    depth: "2.5 inches"
  },
  {
    name: "Modern Square Edge",
    description: "A sharp, sophisticated profile with clean 90-degree lines. This cantilevered design creates a modern frame for the pool water, perfect for contemporary architecture.",
    sampleImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    installedImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    profile: "Cantilevered Square",
    depth: "3 inches"
  },
  {
    name: "Natural Flagstone",
    description: "Hand-selected irregular stone edges that follow the natural topography of the rock. This pond-style edge is ideal for rustic, organic backyard sanctuaries.",
    sampleImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    installedImg: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80",
    profile: "Natural Cleft Edge",
    depth: "Variable"
  }
]

export default function CopingShowroom() {
  const [selected, setSelected] = useState(copingStyles[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <h2 className="font-headline text-3xl mb-4 text-on-surface">Pool Edge Profiles</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Coping is the architectural handshake between your pool and deck. Explore our precision-ground profiles and their finished look.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {copingStyles.map((style, index) => (
            <button 
              key={index}
              onClick={() => setSelected(style)}
              className={`group flex items-center gap-8 p-6 text-left transition-all duration-300 border-2 ${
                selected.name === style.name 
                ? 'bg-surface-container-high border-primary shadow-lg' 
                : 'bg-surface border-outline-variant/30 hover:border-primary/50'
              }`}
            >
              <div 
                className="w-20 h-20 shrink-0 shadow-inner overflow-hidden border border-outline-variant/20"
              >
                <img src={style.sampleImg} alt={style.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all" />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Profile {index + 1}</p>
                <h3 className="font-headline text-xl">{style.name}</h3>
              </div>
              <ChevronRight className={`transition-transform ${selected.name === style.name ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
            </button>
          ))}
        </div>

        <div className="p-8 bg-surface-container-low border border-outline-variant/10 space-y-6">
          <div className="flex gap-6">
            <DraftingCompass className="text-primary shrink-0" size={24} />
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">CAD-Precise Grinding</p>
              <p className="text-sm text-on-surface-variant">Every coping stone is hand-ground to your exact radius specification for a seamless fit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selected.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="sticky top-40 space-y-8"
          >
            <div className="bg-surface-container p-8 shadow-2xl border border-outline-variant/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Layers size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6">Finished Architectural Edge</p>
                <div className="aspect-[16/10] w-full relative overflow-hidden group shadow-xl mb-8 border border-outline-variant/10">
                  <img 
                    src={selected.installedImg} 
                    alt={`${selected.name} Installed`}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container/40 to-transparent" />
                </div>
                <h3 className="font-headline text-4xl mb-4">{selected.name}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </div>

            <div className="bg-on-surface text-surface p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-36 h-36 shrink-0 overflow-hidden ring-1 ring-white/10">
                <img 
                  src={selected.sampleImg} 
                  alt={`${selected.name} Sample`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-primary-container text-[10px] font-bold uppercase tracking-[0.4em]">Raw Profile Detail</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-primary-container" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Profile: {selected.profile}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-primary-container" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Std. Depth: {selected.depth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler size={14} className="text-primary-container" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 italic">Custom Cuts Available</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-on-primary py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-all">
              Consult with a Master Mason
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
