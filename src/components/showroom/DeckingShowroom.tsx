import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sun, Thermometer, Footprints, Shield } from 'lucide-react'

const BRAND_LABEL = "Noble Tile Supply"

const deckingOptions = [
  {
    name: "Travertine Light Ivory",
    category: "Natural Stone · 12\"×24\" Paver",
    hex: "#EAE0D5",
    description: "Premium ivory travertine in a classic 12\"×24\" paver format. Known for its natural cool-touch properties, Light Ivory remains walkable even in 100°F+ Texas heat while delivering a timeless resort aesthetic.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1737570760/www/NobleTile/TKTCLIPV_24_X24_717a070b5c.jpg",
    installedImg: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    thermal: "Low Heat Absorption",
    finish: "Tumbled / Non-Slip"
  },
  {
    name: "Travertine Silver",
    category: "Natural Stone · 12\"×24\" Paver",
    hex: "#B8B4AD",
    description: "A cool-toned silver travertine that pairs beautifully with contemporary architecture and dark-framed pools. The subtle grey undertones complement modern outdoor living spaces and stainless steel accents.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1733791208/www/NobleTile/Silver_12x24_Paver_b8323c1103.jpg",
    installedImg: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80",
    thermal: "Low Heat Absorption",
    finish: "Honed / Non-Slip"
  },
  {
    name: "Porcelain Pearl Gray",
    category: "Handcraft · 12\"×24\" Paver",
    hex: "#A8A29E",
    description: "High-density porcelain engineered specifically for pool and spa installations. Pearl Gray's precision micro-texture provides exceptional slip resistance while its consistent color flow creates a seamless, architectural surround.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1733791730/www/NobleTile/Pearl_Gray_Install_3dae5f658b.jpg",
    installedImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    thermal: "Consistent Performance",
    finish: "Micro-Textured"
  },
  {
    name: "Quartzite",
    category: "Natural Stone",
    hex: "#C8B99A",
    description: "One of the hardest natural stones available, Noble Tile quartzite offers extraordinary durability and natural variation. Each slab is unique — iron-rich veining creates a one-of-a-kind backyard that only gets more beautiful over time.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1734990185/www/NobleTile/quartzite_sm_e664abf2fc.jpg",
    installedImg: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    thermal: "Moderate Heat Absorption",
    finish: "Natural Cleft"
  }
]

export default function DeckingShowroom() {
  const [selected, setSelected] = useState(deckingOptions[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">{BRAND_LABEL}</p>
          <h2 className="font-headline text-3xl mb-4 text-on-surface">Decking & Surrounds</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Your pool deck is the stage for outdoor living. Explore material samples and see how they perform under North Texas conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {deckingOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => setSelected(option)}
              className={`group flex items-center gap-4 p-4 text-left transition-all duration-300 border-2 ${
                selected.name === option.name
                  ? 'border-primary bg-surface-container-high shadow-lg'
                  : 'border-outline-variant/20 hover:border-primary/50'
              }`}
            >
              <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-outline-variant/30">
                <img src={option.sampleImg} alt={option.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">{option.name}</p>
            </button>
          ))}
        </div>

        <div className="space-y-8 pt-12 border-t border-outline-variant/20">
          <div className="flex items-start gap-6">
            <Thermometer className="text-primary mt-1" size={24} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Thermal Testing</p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: selected.thermal.includes('Low') ? '30%' : selected.thermal.includes('Moderate') ? '60%' : '80%' }}
                  className={`h-full ${selected.thermal.includes('Low') ? 'bg-blue-400' : 'bg-orange-400'}`}
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-2 italic">{selected.thermal}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Footprints className="text-primary" size={24} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Slip Resistance</p>
              <p className="text-xs text-on-surface-variant italic">{selected.finish}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="sticky top-40 space-y-8"
          >
            <div className="bg-surface-container p-8 shadow-2xl border border-outline-variant/10">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Material Surface</p>
                <Shield className="text-primary/20" size={24} />
              </div>
              <div className="aspect-[16/10] w-full overflow-hidden mb-8 shadow-inner group">
                <img
                  src={selected.sampleImg}
                  alt={`${selected.name} decking material`}
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                />
              </div>
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{selected.category}</p>
              <h3 className="font-headline text-4xl mb-4">{selected.name}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {selected.description}
              </p>
            </div>

            <div className="bg-on-surface text-surface p-10 shadow-2xl flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-48 h-48 shrink-0 relative">
                <img
                  src={selected.sampleImg}
                  alt={`${selected.name} sample`}
                  className="w-full h-full object-cover shadow-2xl ring-1 ring-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
              </div>
              <div className="space-y-6">
                <p className="text-primary-container text-[10px] font-bold uppercase tracking-[0.4em]">Raw Material Detail</p>
                <p className="text-sm opacity-70 leading-relaxed">
                  Every slab is hand-inspected for structural integrity and aesthetic consistency. Our masons select each piece to ensure a harmonious color flow across your entire deck.
                </p>
                <div className="flex items-center gap-4">
                  <Sun className="text-primary-container" size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">UV Stability Guaranteed</span>
                </div>
              </div>
            </div>

            <button type="button" className="w-full bg-primary text-on-primary py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-all">
              Request Material Swatch
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
