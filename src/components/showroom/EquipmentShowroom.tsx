import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Power, Thermometer, ShieldCheck, Cpu, Zap } from 'lucide-react'
import { NOBLE_TILE_URL } from './constants'

const equipmentOptions = [
  {
    icon: Power,
    category: "Variable Speed Pump",
    brand: "Pentair",
    name: "IntelliFlo3 VSF",
    description: "The IntelliFlo3 VSF is the gold standard of pool energy efficiency. By running at exactly the speed your pool needs, it cuts energy consumption by up to 90% compared to traditional single-speed pumps — while operating nearly silently.",
    productImg: "https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/pumps/intelliflo3-vsf/if3---pdp/images-/if3-pdp-thumbnail-2hps.jpg",
    features: ["IntelliFlo3 VSF Technology", "WhisperQuiet Operation", "Energy Star Certified", "Remote Speed Control"],
    metric: { label: "Max Energy Savings", value: "90%", sublabel: "vs. single-speed pumps", max: 90 }
  },
  {
    icon: Thermometer,
    category: "Gas Heater",
    brand: "Pentair",
    name: "MasterTemp 400K BTU",
    description: "The MasterTemp is engineered for rapid heat recovery — bringing a 20,000-gallon pool up to temperature in a fraction of the time of competing units. Low NOx certified and designed to operate efficiently even in low-ambient temperature conditions.",
    productImg: "https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/heaters/mastertemp/mastertemp-images/MasterTemp-banner.png",
    features: ["400,000 BTU Output", "Low NOx Certified", "Digital Temperature Control", "Compact Footprint"],
    metric: { label: "Heat Output", value: "400K", sublabel: "BTU, rapid recovery rate", max: 500 }
  },
  {
    icon: ShieldCheck,
    category: "Salt Chlorination",
    brand: "Pentair",
    name: "IntelliChlor SC40",
    description: "Convert ordinary pool salt into pure, fresh chlorine — no harsh chemical handling, no red eyes, no bleached swimwear. The IntelliChlor SC40 self-cleaning cell produces 40 lbs of chlorine per cycle and monitors its own health automatically.",
    productImg: "https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/sanitizers/intellichlor/intellichlor-images/intellichlor-product-image.png",
    features: ["Self-Cleaning Titanium Cell", "40 lbs Chlorine/Cycle", "Automated pH Monitoring", "Salt Level Detection"],
    metric: { label: "Chlorine Output", value: "40", sublabel: "lbs per cycle, self-cleaning", max: 50 }
  },
  {
    icon: Cpu,
    category: "Automation System",
    brand: "Pentair",
    name: "IntelliCenter Control",
    description: "One app controls everything — temperature, lighting, water features, sanitation schedules, and energy settings. IntelliCenter integrates with every Pentair device and supports voice commands through Alexa and Google Home.",
    productImg: "https://www.pentair.com/content/dam/extranet/nam/pentair-pool/residential/automation/intellicenter/intellicenter-pdp/Pentair-IntelliCenter-PDP-Images-Intro%20Image.png",
    features: ["Full Mobile App Control", "Voice Command Ready", "Energy Usage Dashboard", "Programmable Schedules"],
    metric: { label: "Controllable Features", value: "10+", sublabel: "lights, heat, features, schedules", max: 10 }
  }
]

export default function EquipmentShowroom() {
  const [selected, setSelected] = useState(equipmentOptions[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">Pentair · Certified Installer</p>
          <h2 className="font-headline text-3xl mb-4 text-on-surface">Pool Equipment</h2>
          <p className="text-on-surface-variant leading-relaxed">
            The equipment pad is the engine room of your pool. We install and configure industry-leading Pentair systems built for Texas climate demands and long-term reliability.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {equipmentOptions.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item)}
              className={`group flex items-center gap-8 p-6 text-left transition-all duration-300 border-2 ${
                selected.name === item.name
                  ? 'bg-surface-container-high border-primary shadow-lg'
                  : 'bg-surface border-outline-variant/30 hover:border-primary/50'
              }`}
            >
              <div className={`p-4 shrink-0 transition-colors ${
                selected.name === item.name ? 'bg-primary/10' : 'bg-surface-container'
              }`}>
                <item.icon
                  className={`transition-colors ${selected.name === item.name ? 'text-primary' : 'text-on-surface-variant'}`}
                  size={24}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">{item.brand}</p>
                <h3 className="font-headline text-xl">{item.category}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="sticky top-40 space-y-8"
          >
            <div className="bg-surface-container p-8 shadow-2xl border border-outline-variant/10">
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                {selected.brand} · {selected.category}
              </p>
              <h3 className="font-headline text-4xl mb-6">{selected.name}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                {selected.description}
              </p>

              <div className="space-y-3 mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Equipment</p>
                <a
                  href={NOBLE_TILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Noble Tile for ${selected.name}`}
                  className="block aspect-[4/3] overflow-hidden shadow-lg group bg-white"
                >
                  <img
                    src={selected.productImg}
                    alt={selected.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              </div>

              <ul className="space-y-3 mb-10">
                {selected.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="h-1 w-1 bg-primary rounded-full shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface p-6 border border-outline-variant/20">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-primary" size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{selected.metric.label}</p>
                </div>
                <p className="font-headline text-3xl mb-4">{selected.metric.value}</p>
                {selected.metric.max ? (
                  <>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseInt(selected.metric.value) / selected.metric.max) * 100}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </>
                ) : null}
                <p className="text-[10px] text-on-surface-variant italic">{selected.metric.sublabel}</p>
              </div>
            </div>

            <button type="button" className="w-full bg-primary text-on-primary py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-all">
              Request Equipment Consultation
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
