import { useRef } from 'react';
import { Activity, Zap, Waves, Sun, Thermometer, Dumbbell } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const modalities = [
  {
    title: 'IFT PHYSIOTHERAPY',
    subtitle: 'INTERFERENTIAL THERAPY',
    icon: <Zap size={28} />,
    description: 'Medium-frequency electrical currents for deep tissue pain relief — particularly effective for chronic back and knee pain.'
  },
  {
    title: 'TENS THERAPY',
    subtitle: 'NERVE STIMULATION',
    icon: <Activity size={28} />,
    description: 'Transcutaneous Electrical Nerve Stimulation for surface-level pain management and post-operative pain control.'
  },
  {
    title: 'ULTRASOUND THERAPY',
    subtitle: 'DEEP TISSUE HEALING',
    icon: <Waves size={28} />,
    description: 'Therapeutic ultrasound using sound waves to promote healing, reduce inflammation, and break down scar tissue.'
  },
  {
    title: 'LASER THERAPY',
    subtitle: 'PHOTOBIOMODULATION',
    icon: <Sun size={28} />,
    description: 'Low-level laser at specific wavelengths to accelerate tissue repair and manage chronic pain including arthritis.'
  },
  {
    title: 'MOIST HEAT THERAPY',
    subtitle: 'HYDROCOLLATOR PACKS',
    icon: <Thermometer size={28} />,
    description: 'Therapeutic heat using hydrocollator packs to relax muscles, increase blood flow, and reduce stiffness.'
  },
  {
    title: 'EXERCISE THERAPY',
    subtitle: 'FUNCTIONAL LOADING',
    icon: <Dumbbell size={28} />,
    description: 'Individualised corrective exercise programs: core stabilization, progressive strengthening, and neuromuscular control.'
  }
];

const TreatmentModalities = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".modality-card", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".modalities-grid",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".modalities-header", 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".modalities-header",
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="modalities" className="py-16 md:py-24 bg-brand-bg overflow-hidden">
      <div className="section-container px-4">
        <div className="modalities-header text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">ADVANCED TREATMENT MODALITIES</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Hospital-grade equipment and evidence-based modalities available across all three Curis 360 clinics — technology that most standalone physio clinics in Banashankari, Jayanagar, and Vasanthapura simply don't have.
          </p>
        </div>

        <div className="modalities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modalities.map((item, index) => (
            <div
              key={index}
              className="modality-card group bg-white p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-light-blue/20 group-hover:bg-brand-link group-hover:text-white rounded-2xl flex items-center justify-center text-brand-link mb-6 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-brand-link text-sm font-bold tracking-wider mb-4">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentModalities;
