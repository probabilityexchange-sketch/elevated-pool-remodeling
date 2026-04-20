import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const plasterFinishes = [
  {
    name: "Aqua Blue",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPAQUABLUE_1f076c970c.png",
    description: "A vivid, energizing blue that transforms pool water into a dazzling tropical lagoon. The pebble aggregate catches light throughout the day, creating constant shimmer.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Caribbean Blue",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPCARBLUE_c0522a46c6.png",
    description: "Rich Caribbean tones that evoke the warm waters of the tropics. A perennial favorite for Texas pools that want maximum visual impact and resort-style appeal.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Midnight Blue",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPMIDNBLUE_9bbdd14986.png",
    description: "Deep, dramatic indigo for a high-end architectural aesthetic. Creates mirror-like night reflections and a bold statement for modern pool designs.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Turquoise Pearl",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPTURQPEARL_29944be185.png",
    description: "Luminous turquoise with pearl undertones that produce a soft, gem-like water color. Ideal for pools surrounded by white or natural stone decking.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Gray Harbor",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPGRAYHARBOR_6898a45357.png",
    description: "Sophisticated cool grey that produces a natural, oceanic blue-green water color. Pairs beautifully with contemporary architecture and dark coping.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Sandy Beach",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPSANDBEACH_4e9a57d582.png",
    description: "Warm, sandy tones that create a soft turquoise water color reminiscent of a Caribbean beach. The most inviting and approachable finish in the collection.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Emerald Isle",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPEMERISLE_ab3d2e5353.png",
    description: "Lush green-blue tones inspired by tropical island shores. A stunning choice for naturalistic landscapes and pools surrounded by lush vegetation.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  },
  {
    name: "Stone Blue",
    img: "https://media.heritageplus.com/image/upload/v1756162979/www/NobleTile/NBTDSPSTONEBLUE_3f49c741aa.png",
    description: "A balanced blue-grey that produces a refined, cool water color. The most versatile finish — works with any architectural style or decking material.",
    productUrl: "https://www.nobletile.com/products/hardscapes/"
  }
];

const BRAND_LABEL = "Noble Tile · Designer Series Pebble";

export default function PlasterShowroom() {
  const [selected, setSelected] = useState(plasterFinishes[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">{BRAND_LABEL}</p>
          <h2 className="font-headline text-3xl mb-4">Plaster & Finish</h2>
          <p className="text-on-surface-variant leading-relaxed">
            The finish determines the color of your water and the texture of your pool's surface. Select a shade to see how it transforms your design.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {plasterFinishes.map((finish) => (
            <button
              key={finish.name}
              onClick={() => setSelected(finish)}
              className={`group relative aspect-square transition-all duration-300 overflow-hidden ${
                selected.name === finish.name
                  ? 'ring-2 ring-primary ring-offset-4 ring-offset-surface'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={finish.img}
                alt={finish.name}
                className="w-full h-full object-contain bg-white/90 p-2"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="sticky top-40 bg-surface-container p-12 md:p-16 shadow-2xl overflow-hidden"
          >
            <a
              href={selected.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Noble Tile product page for ${selected.name}`}
              className="block aspect-video w-full overflow-hidden shadow-2xl mb-10"
            >
              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-full object-contain bg-white/90 p-6 transition-transform duration-700 hover:scale-105"
              />
            </a>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">
              {BRAND_LABEL}
            </p>
            <h3 className="font-headline text-4xl mb-6">{selected.name}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              {selected.description}
            </p>

            <button type="button" className="w-full border border-primary text-primary py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-on-primary transition-all">
              Order Sample Kit
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
