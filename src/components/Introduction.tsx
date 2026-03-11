import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const areas = ["Bhogadhi", "Gokulam", "Hebbala", "Hootagalli", "Belawadi"];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".intro-heading", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".intro-heading",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".area-chip", 
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".areas-container",
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="why" className="relative py-12 md:py-24 bg-brand-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-light-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-link/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="section-container relative text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="intro-heading text-xl md:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-snug mb-8 md:mb-12">
            "As the <span className="bg-gradient-to-r from-brand-link to-brand-light-blue bg-clip-text text-transparent italic">best physiotherapy service in mysore</span>", 
            <br className="hidden md:block" />
            <span className="text-brand-link">Aaroghya</span><span className="text-green-600">shala</span> — led by Dr. Sahana — provides hospital-grade recovery 
            for orthopedic, neurological, and sports conditions.
          </h2>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-light-blue/10 to-brand-link/10 rounded-[20px] md:rounded-[40px] blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-6 md:p-14 rounded-[20px] md:rounded-[40px] border border-white shadow-xl">
              <p className="text-lg md:text-2xl text-gray-600 mb-6 md:mb-10 font-medium tracking-tight">
                Providing clinical excellence and home physiotherapy for patients across:
              </p>
              <div className="areas-container flex flex-wrap justify-center gap-3 md:gap-6">
                {areas.map((area) => (
                  <span 
                    key={area} 
                    className="area-chip px-4 py-2 md:px-8 md:py-4 bg-white/50 backdrop-blur-sm text-brand-dark rounded-xl md:rounded-2xl shadow-sm border border-brand-light-blue/10 font-bold text-sm md:text-xl hover:shadow-lg hover:border-brand-link/30 hover:text-brand-link transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-8 md:mt-10 text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                And surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
