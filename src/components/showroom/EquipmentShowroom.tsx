import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Power, Thermometer, ShieldCheck, Cpu, Zap } from 'lucide-react';

const equipmentOptions = [
  {
    icon: Power,
    category: "Variable Speed Pump",
    brand: "Pentair",
    name: "IntelliFlo3 VSF",
    description: "The IntelliFlo3 VSF is the gold standard of pool energy efficiency. By running at exactly the speed your pool needs, it cuts energy consumption by up to 90% compared to traditional single-speed pumps — while operating nearly silently.",
    productImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    installedImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: ["IntelliFlo3 VSF Technology", "WhisperQuiet Operation", "Energy Star Certified", "Remote Speed Control"],
    metric: { label: "Max Energy Savings", value: "90%", sublabel: "vs. single-speed pumps" }
  },
  {
    icon: Thermometer,
    category: "Gas Heater",
    brand: "Pentair",
    name: "MasterTemp 400K BTU",
    description: "The MasterTemp is engineered for rapid heat recovery — bringing a 20,000-gallon pool up to temperature in a fraction of the time of competing units. Low NOx certified and designed to operate efficiently even in low-ambient temperature conditions.",
    productImg: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=600&q=80",
    installedImg: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=800&q=80",
    features: ["400,000 BTU Output", "Low NOx Certified", "Digital Temperature Control", "Compact Footprint"],
    metric: { label: "Heat Output", value: "400K BTU", sublabel: "rapid recovery rate" }
  },
  {
    icon: ShieldCheck,
    category: "Salt Chlorination",
    brand: "Pentair",
    name: "IntelliChlor SC40",
    description: "Convert ordinary pool salt into pure, fresh chlorine — no harsh chemical handling, no red eyes, no bleached swimwear. The IntelliChlor SC40 self-cleaning cell produces 40 lbs of chlorine per cycle and monitors its own health automatically.",
    productImg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80",
    installedImg: "https://images.unsplash.com/photo-1545041361-95aef049c3b6?auto=format&fit=crop&w=800&q=80",
    features: ["Self-Cleaning Titanium Cell", "40 lbs Chlorine/Cycle", "Automated pH Monitoring", "Salt Level Detection"],
    metric: { label: "Chlorine Output", value: "40 lbs", sublabel: "per cycle, self-cleaning" }
  },
  {
    icon: Cpu,
    category: "Automation System",
    brand: "Pentair",
    name: "IntelliCenter Control",
    description: "One app controls everything — temperature, lighting, water features, sanitation schedules, and energy settings. IntelliCenter integrates with every Pentair device and supports voice commands through Alexa and Google Home.",
    productImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    installedImg: "https://images.unsplash.com/photo-1558002038-1ad5c2eeef6e?auto=format&fit=crop&w=800&q=80",
    features: ["Full Mobile App Control", "Voice Command Ready", "Energy Usage Dashboard", "Programmable Schedules"],
    metric: { label: "Controllable Features", value: "Unlimited", sublabel: "lights, heat, features, schedules" }
  }
];

export default function EquipmentShowroom() {
  const [selected, setSelected] = useState(equipmentOptions[0]);

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

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Product</p>
                  <div className="aspect-square overflow-hidden shadow-lg">
                    <img
                      src={selected.productImg}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Installed</p>
                  <div className="aspect-square overflow-hidden shadow-lg group">
                    <img
                      src={selected.installedImg}
                      alt="Installed"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
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
                <p className="font-headline text-3xl mb-1">{selected.metric.value}</p>
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
  );
}
