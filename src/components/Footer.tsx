import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-24 px-6 border-t border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <BrandMark className="mb-6" />
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              North Fort Worth's premier sanctuary remodeling specialists. We specialize in high-end pool remodeling that honors the Texas landscape.
            </p>
            <a
              href="tel:8173503519"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
            >
              <Phone size={14} />
              Call (817) 350-3519
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 shrink-0">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface mb-6">Explore</h4>
              <ul className="space-y-4">
                {['Portfolio', 'Process', 'Reviews', 'FAQ'].map(item => (
                  <li key={item}>
                    {item === 'Portfolio' ? (
                      <Link to="/portfolio" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                        {item}
                      </Link>
                    ) : (
                      <a href={item === 'FAQ' ? '#faq' : `/#${item.toLowerCase()}`} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface mb-6">Showroom</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Pool Tile', path: '/showroom/tile' },
                  { name: 'Pool Plaster', path: '/showroom/plaster' },
                  { name: 'Pool Decking', path: '/showroom/decking' },
                  { name: 'Pool Equipment', path: '/showroom/equipment' },
                  { name: 'Pool Coping', path: '/showroom/coping' },
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:8173503519" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                    (817) 350-3519
                  </a>
                </li>
                <li>
                  <a href="mailto:Elevatedpoolremodeling@gmail.com" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            © 2026 Elevated Pool Remodeling. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
