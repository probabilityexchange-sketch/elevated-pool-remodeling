import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Power, Thermometer, ShieldCheck, Cpu, Zap } from 'lucide-react'

const equipmentOptions = [
  {
    icon: Power,
    category: "Variable Speed Pump",
    brand: "Jandy",
    name: "ePump 3.8 HP",
    description: "The Jandy ePump is a high-performance, energy-efficient variable-speed pump built for quiet operation and large-pool demand. It gives remodel clients a clean upgrade path for modern circulation and automation.",
    productImg: "https://cdn.fluidrausa.com/-/media/media-database/products/pumps/epump-38hp/without-speedset/17epump220270380.png?rev=87e2277657ab483c97fc97404cc98295",
    productUrl: "https://www.jandy.com/en/products/pool-pumps/variable-speed/epump-38hp-2a",
    features: ["Variable-Speed Control", "Quiet Pump Technology", "Large-Capacity Basket", "Automation Ready"],
    metric: { label: "Max Energy Savings", value: "90%", sublabel: "vs. single-speed pumps", max: 90 }
  },
  {
    icon: Thermometer,
    category: "Gas Heater",
    brand: "Jandy",
    name: "JXiQ 400NK",
    description: "The JXiQ gas pool and spa heater is built for efficient operation and straightforward installation. It fits remodel projects that need a modern heater upgrade without wasting space on the equipment pad.",
    productImg: "https://cdn.fluidrausa.com/-/media/media-database/products/heaters/jxi/jxi_jxi_1.png?rev=21664298c95a4b0984228dc0d8371679",
    productUrl: "https://www.jandy.com/en/products/pool-heating",
    features: ["Gas Pool & Spa Heating", "SMART Sensors", "Compact Footprint", "Installation Friendly"],
    metric: { label: "Heat Output", value: "400K", sublabel: "BTU, rapid recovery rate", max: 500 }
  },
  {
    icon: ShieldCheck,
    category: "Salt Chlorination",
    brand: "Jandy",
    name: "TruClear XL",
    description: "The Jandy TruClear XL salt chlorinator is designed for large in-ground pools and easy app-based control. It provides a simple, reliable upgrade for remodels that want better water care with less hands-on maintenance.",
    productImg: "https://cdn.fluidrausa.com/-/media/media-database/products/water-sanitizers/truclear-xl/29_truclear_xl_tag.png?h=1500&iar=0&rev=150ee49ec00f49afb112f334c7453f78&w=1500",
    productUrl: "https://www.jandy.com/en/products/water-care/salt-chlorinators/truclear-xl",
    features: ["Saltwater Chlorination", "App-Based Control", "Low Maintenance Cell", "Large Pool Capacity"],
    metric: { label: "Chlorine Output", value: "40", sublabel: "lbs per cycle, self-cleaning", max: 50 }
  },
  {
    icon: Cpu,
    category: "Automation System",
    brand: "Jandy",
    name: "AquaLink RS",
    description: "AquaLink RS gives remodel clients one place to control pool functions, lighting, water features, schedules, and automation. It is the cleanest way to modernize an existing pool pad without framing the project like a new build.",
    productImg: "https://cdn.fluidrausa.com/-/media/website-assets/jandy/rectangular-images/jandy_automationclp_herobannermobile_750x422.jpg?h=422&iar=0&rev=aa30e303bc034bc1a730a38974b0195b&w=750",
    productUrl: "https://www.jandy.com/en/products/pool-automation",
    features: ["Pool & Spa Automation", "iAquaLink Control", "Schedules and Macros", "Smart Home Ready"],
    metric: { label: "Controllable Features", value: "10+", sublabel: "lights, heat, features, schedules", max: 10 }
  }
]

export default function EquipmentShowroom() {
  const [selected, setSelected] = useState(equipmentOptions[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">Jandy · Certified Installer</p>
          <h2 className="font-headline text-3xl mb-4 text-on-surface">Pool Equipment</h2>
          <p className="text-on-surface-variant leading-relaxed">
            The equipment pad is the engine room of your pool. We install and configure industry-leading Jandy systems built for Texas climate demands and long-term reliability.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {equipmentOptions.map((item) => (
            <a
              key={item.name}
              href={item.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelected(item)}
              aria-label={`Open Jandy product page for ${item.name}`}
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
            </a>
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
                  href={selected.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Jandy product page for ${selected.name}`}
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
