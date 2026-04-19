import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-on-surface text-surface relative overflow-hidden">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-5 limestone-texture pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary-container text-xs font-bold tracking-[0.3em] uppercase mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-headline text-4xl md:text-5xl mb-8 editorial-scale leading-tight"
            >
              Ready to Elevate Your <span className="italic font-normal">Sanctuary?</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 mt-12"
            >
              <a
                href="tel:8173503519"
                className="block bg-primary text-on-primary p-6 text-center hover:brightness-110 transition-all group"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-headline text-2xl">(817) 350-3519</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">Call for a Free Consultation</span>
              </a>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <motion.span className="text-primary-container">
                    <Send size={20} />
                  </motion.span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:Elevatedpoolremodeling@gmail.com" className="text-surface/70 hover:text-primary-container transition-colors">
                    Elevatedpoolremodeling@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-12 text-on-surface shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="font-headline text-3xl mb-4">Message Sent</h3>
                  <p className="text-on-surface-variant mb-8">
                    Thank you for reaching out. We'll be in touch shortly to discuss your vision.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-on-primary px-8 py-4 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-tertiary/20 p-4 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-tertiary/20 p-4 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Services Needed (Remodeling Only)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Tile', 'Plaster', 'Decking', 'Equipment', 'Coping', 'Full Remodel'].map((service) => (
                        <label key={service} className="flex items-center gap-3 p-3 bg-surface-container-low cursor-pointer hover:bg-tertiary/5 transition-colors group">
                          <input type="checkbox" name="service" className="w-4 h-4 border-none text-primary focus:ring-primary/20" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(817) 000-0000"
                      className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-tertiary/20 p-4 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Project Details</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your dream pool..."
                      className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-tertiary/20 p-4 transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-error text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-primary text-on-primary py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-container disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
