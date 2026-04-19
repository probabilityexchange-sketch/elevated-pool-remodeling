import { motion } from 'motion/react'
import { Phone } from 'lucide-react'

export default function StickyCallButton() {
  return (
    <motion.a
      href="tel:8173503519"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
      aria-label="Call Elevated Pool Remodeling at (817) 350-3519"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#455d5b] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all md:hidden"
    >
      <span className="relative flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/30" />
        <Phone size={24} className="relative" />
      </span>
      <span className="text-sm font-bold tracking-wide">Call Now</span>
    </motion.a>
  )
}
