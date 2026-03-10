import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import drImg from '../assets/dr.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".about-img", 
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".about-text > *", 
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="section-container px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="about-img relative max-w-lg mx-auto lg:max-w-none">
            <div className="rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] bg-brand-light-blue/10">
                <img
                  src={drImg}
                  alt="Dr. Sahana"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>

          <div className="about-text space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 md:mb-6">About Aaroghyashala</h2>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed font-medium">
                Clinical recovery led by <span className="text-brand-link">Dr. Sahana</span>. Treating root causes through advanced photobiomodulation and corrective exercise therapy.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 italic text-sm md:text-base">
              <p>
                Physical therapy is a combination of exercises, stretches and movements that’ll increase your strength, flexibility and mobility to help you move safely and more confidently.
              </p>
              <p className="font-bold text-brand-dark not-italic">
                Is physical therapy worth it?
              </p>
              <p>
                It might not be easy, but physical therapy is definitely worth it. Your physical therapist will help you set realistic goals and expectations.
              </p>
              <p className="text-brand-link font-bold not-italic">
                Your strength, flexibility and mobility will improve over time. Stick with it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 pt-4 border-t border-gray-100">
              {[
                "Hospital-Grade Recovery",
                "Home Service Convenience",
                "Advanced Photobiomodulation",
                "Root Cause Treatment",
                "Custom Exercise Plans",
                "Clinical Excellence"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="font-bold text-brand-dark text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
