import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import carousel from '../assets/carousel.png';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".hero-img", 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(".hero-overlay", 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="home" className="relative w-full bg-brand-dark overflow-hidden">
      {/* Background Container */}
      <div className="relative w-full">
        <img 
          src={carousel} 
          alt="Clinic Hero" 
          className="hero-img w-full h-auto block shadow-2xl"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent hidden sm:block"></div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-brand-bg to-transparent"></div>
    </section>
  );
};

export default Hero;
