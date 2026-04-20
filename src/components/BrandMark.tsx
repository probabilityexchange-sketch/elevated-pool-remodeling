import { Waves } from 'lucide-react'

type BrandMarkProps = {
  className?: string
}

export default function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-2 group ${className}`.trim()}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-sm transition-transform group-hover:scale-105">
        <Waves size={20} strokeWidth={2.25} />
      </span>
      <span className="text-xl font-headline font-black text-on-surface uppercase tracking-widest leading-none">
        Elevated
      </span>
    </div>
  )
}
