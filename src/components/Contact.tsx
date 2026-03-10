import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".contact-info", 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".contact-form", 
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="py-12 md:py-24 bg-brand-bg overflow-hidden">
      <div className="section-container px-4">
        <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className="contact-info p-8 sm:p-12 lg:p-16 bg-brand-link text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Contact Us</h2>
              <p className="text-white/80 mb-12 text-base md:text-xl">
                Have questions or want to book a home session? Get in touch with Dr. Sahana today.
              </p>
              
              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-xl mb-1">Email</p>
                    <a href="mailto:sahananag8266@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm md:text-lg">
                      sahananag8266@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-xl mb-1">Phone</p>
                    <a href="tel:9916527752" className="text-white/80 hover:text-white transition-colors text-sm md:text-lg">
                      +91 9916527752
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-xl mb-1">Address</p>
                    <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                      Vijayanagar 4th stage, 2nd stage, 3rd stage<br />
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 md:mt-20 pt-8 border-t border-white/20">
                <p className="font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Lead Physiotherapist</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">DS</div>
                  <p className="text-white font-bold text-lg md:text-2xl">Dr. Sahana</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form p-8 sm:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">Send a Message</h3>
              <form className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-brand-bg border-2 border-transparent focus:border-brand-link focus:bg-white rounded-xl md:rounded-2xl outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 bg-brand-bg border-2 border-transparent focus:border-brand-link focus:bg-white rounded-xl md:rounded-2xl outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Service Needed</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-brand-bg border-2 border-transparent focus:border-brand-link focus:bg-white rounded-xl md:rounded-2xl outline-none transition-all appearance-none cursor-pointer">
                      <option>Select a service</option>
                      <option>Back Pain & Sciatica</option>
                      <option>Neuro Rehabilitation</option>
                      <option>Sports & Fitness</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-brand-bg border-2 border-transparent focus:border-brand-link focus:bg-white rounded-xl md:rounded-2xl outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 md:py-6 flex items-center justify-center gap-3 text-lg font-bold shadow-lg hover:shadow-brand-link/40 transition-all">
                  Submit Request <Send size={22} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
