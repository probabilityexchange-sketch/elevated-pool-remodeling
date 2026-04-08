import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Waves, ShieldCheck, Microscope } from 'lucide-react';

const BRAND_LABEL = "Noble Tile Supply";

const tileOptions = [
  {
    name: "Riviera Maya Cozumel",
    category: "Glass Mosaic 1\"×2\"",
    hex: "#0EA5E9",
    description: "Hand-crafted glass mosaic in a radiant aqua-blue. The 1\"×2\" format creates a refined linear pattern at the waterline, refracting sunlight into dancing light ribbons across the pool interior.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1732852969/www/NobleTile/NMRM_1268_Cozumel_1_x_2_1_63a94a495a.jpg",
    installedImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    specs: ["Frost Proof", "UV Resistant", "Glass Body Construction"]
  },
  {
    name: "Avalon Blue",
    category: "Pool Mosaic",
    hex: "#1D4ED8",
    description: "A classic pool mosaic with eye-catching visual depth and exceptional chemical durability. The mixed format blends tile sizes for a textured, artisanal waterline that ages beautifully.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1732501655/www/NobleTile/NAAV_M41_Avalon_Blue_1_5c410af865.jpg",
    installedImg: "https://images.unsplash.com/photo-1565039320828-d9a7cd70b435?auto=format&fit=crop&w=800&q=80",
    specs: ["Mixed Mosaic Format", "Smooth Edge", "Chemical Resistant"]
  },
  {
    name: "Pacific Jewel Shikine Blue",
    category: "Pool Mosaic",
    hex: "#0C4A6E",
    description: "Inspired by the cobalt waters of the Pacific Islands, this jewel-toned mosaic delivers a deep, saturated blue that intensifies in sunlight. A bold statement for architectural pool designs.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1732421284/www/NobleTile/NWPJ_537_Shikine_Blue_1_8800c5bf2c.jpg",
    installedImg: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
    specs: ["Jewel Finish", "Non-Porous Surface", "Lifetime Color Guarantee"]
  },
  {
    name: "Coral Sea Osprey Reef",
    category: "Pool Mosaic 6\"×6\"",
    hex: "#164E63",
    description: "A large-format pool mosaic capturing the iridescent hues of Australia's Coral Sea. The 6\"×6\" tile makes a dramatic architectural impression at the waterline of resort-style pools.",
    sampleImg: "https://media.heritageplus.com/image/upload/v1732419831/www/NobleTile/NWCS_681_Osprey_Reef_6_x_6_1_5fa7adb9d2.jpg",
    installedImg: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
    specs: ["Large Format 6\"×6\"", "High Impact Resistance", "UV Stable"]
  }
];

export default function TileShowroom() {
  const [selected, setSelected] = useState(tileOptions[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">{BRAND_LABEL}</p>
          <h2 className="font-headline text-3xl mb-4 text-on-surface">Waterline Tile Selection</h2>
          <p className="text-on-surface-variant leading-relaxed">
            The waterline tile is the jewelry of your pool. Select a collection to see the material detail and its transformation under the Texas sun.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tileOptions.map((tile) => (
            <button
              key={tile.name}
              onClick={() => setSelected(tile)}
              className={`group relative aspect-square transition-all duration-300 border-2 ${
                selected.name === tile.name ? 'border-primary ring-2 ring-primary ring-offset-4 ring-offset-surface' : 'border-transparent hover:scale-105'
              }`}
            >
              <div className="w-full h-full shadow-inner overflow-hidden">
                <img src={tile.sampleImg} alt={tile.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        <div className="space-y-6 pt-12 border-t border-outline-variant/20">
          <div className="flex items-start gap-4">
            <Microscope className="text-primary mt-1" size={20} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Micro-Texture Check</p>
              <p className="text-sm text-on-surface-variant">Our tiles are selected for non-abrasive surfaces that won't snag swimwear.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-primary mt-1" size={20} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Waterproofing Guard</p>
              <p className="text-sm text-on-surface-variant">Every tile is installed over a dual-layer Laticrete membrane for zero-leak reliability.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="sticky top-40 bg-surface-container p-12 md:p-16 shadow-2xl border border-outline-variant/10"
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")',
                backgroundColor: selected.hex
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-2">{selected.category}</p>
                  <h3 className="font-headline text-4xl">{selected.name}</h3>
                </div>
                <Sparkles className="text-primary/30" size={32} />
              </div>
              
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                {selected.description}
              </p>
              
              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Raw Sample</p>
                    <div className="aspect-square w-full overflow-hidden shadow-lg">
                      <img src={selected.sampleImg} alt="Sample" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Installed</p>
                    <div className="aspect-square w-full overflow-hidden shadow-lg group">
                      <img src={selected.installedImg} alt="Installed" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                    <Waves size={14} /> Water Interface Performance
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.specs.map((spec) => (
                      <span key={spec} className="text-[9px] font-bold uppercase tracking-widest bg-surface px-4 py-2 border border-outline-variant/20">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button type="button" className="mt-12 w-full bg-primary text-on-primary py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-all">
                Request Tile Board Sample
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
