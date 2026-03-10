import { useState, useRef } from 'react';
import { X, ArrowRight, Activity, Brain, Dumbbell, User, Move, Thermometer } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  causes: string[];
  symptoms: string[];
}

const services: Service[] = [
  {
    id: 'back-pain',
    title: 'Back Pain & Sciatica',
    icon: <Activity />,
    description: 'Spinal decompression and manual therapy for nerve pain.',
    causes: [
      'Prolonged sitting & IT sedentary work',
      'Poor posture & lifting ergonomics',
      'Disc bulge / herniation (Slip Disc)',
      'Sciatic nerve root compression',
      'Weak core muscles & obesity',
      'Age-related spinal degeneration'
    ],
    symptoms: [
      'Lower back stiffness & muscle spasms',
      'Pain while bending or lifting',
      'Reduced spinal flexibility',
      'Persistent pain after long working hours',
      'Difficulty standing or walking'
    ]
  },
  {
    id: 'neuro',
    title: 'Neuro Rehabilitation',
    icon: <Brain />,
    description: 'Specialized stroke recovery and motor function restoration.',
    causes: [
      'Stroke / Brain hemorrhage',
      'Parkinson\'s disease progression',
      'Multiple Sclerosis',
      'Peripheral nerve injuries',
      'Traumatic brain or spinal cord injury'
    ],
    symptoms: [
      'Muscle weakness or paralysis',
      'Loss of balance and coordination',
      'Difficulty in walking (Gait issues)',
      'Tremors or involuntary movements',
      'Muscle stiffness (Spasticity)'
    ]
  },
  {
    id: 'sports',
    title: 'Sports & Fitness',
    icon: <Dumbbell />,
    description: 'Rapid injury rehab for ACL tears and athletic enhancement.',
    causes: [
      'Sudden twisting or impact during play',
      'Overtraining and muscle fatigue',
      'Inadequate warm-up or technique',
      'ACL, MCL or Meniscus tears',
      'Ligament sprains and muscle strains'
    ],
    symptoms: [
      'Sharp pain during physical activity',
      'Immediate swelling and bruising',
      'Joint instability or "giving way"',
      'Popping sound at the time of injury',
      'Limited range of motion'
    ]
  },
  {
    id: 'neck-shoulder',
    title: 'Neck & Shoulder',
    icon: <User />,
    description: 'Relief for cervical spondylosis and frozen shoulder.',
    causes: [
      'Cervical spondylosis (Neck arthritis)',
      'Frozen shoulder (Adhesive capsulitis)',
      'Rotator cuff muscle injury',
      'Poor ergonomics (Text neck syndrome)',
      'Stress-related muscle tension'
    ],
    symptoms: [
      'Stiffness when turning the head',
      'Radiating pain or numbness to arms',
      'Inability to lift arm overhead',
      'Dull aching pain in the shoulder blade',
      'Morning neck stiffness'
    ]
  },
  {
    id: 'knee-joint',
    title: 'Knee & Joint Care',
    icon: <Move />,
    description: 'Management for arthritis and post-surgery joint rehab.',
    causes: [
      'Osteoarthritis (Age-related wear)',
      'Rheumatoid arthritis inflammation',
      'Bursitis or Tendonitis',
      'Post-total knee replacement (TKR)',
      'Ligament laxity'
    ],
    symptoms: [
      'Grinding or clicking sensation',
      'Knee buckling or locking',
      'Swelling and warmth in the joint',
      'Difficulty in climbing stairs',
      'Morning joint stiffness'
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Care',
    icon: <Thermometer />,
    description: 'Advanced laser and exercise therapy for complex cases.',
    causes: [
      'Post-surgical rehabilitation',
      'Geriatric (Elderly) generalized weakness',
      'Lymphoedema / Chronic swelling',
      'Pelvic floor dysfunction',
      'Work-related musculoskeletal disorders'
    ],
    symptoms: [
      'Slow recovery post-operation',
      'Reduced physical independence',
      'Persistent chronic fatigue',
      'Postural imbalances',
      'General body aches'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".service-card", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".services-header", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="py-16 bg-white overflow-hidden">
      <div className="section-container px-4">
        <div className="services-header text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Specialized clinical care and evidence-based physiotherapy treatments tailored to your recovery goals.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-brand-bg p-8 md:p-10 rounded-[32px] hover:bg-brand-link hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-brand-link shadow-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white/80 line-clamp-3 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            ></div>
            <div className="bg-white rounded-[32px] md:rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl">
              <div className="p-6 md:p-12">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-brand-bg rounded-full transition-colors"
                >
                  <X size={24} className="text-brand-dark" />
                </button>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-light-blue/20 rounded-2xl flex items-center justify-center text-brand-link">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">{selectedService.title}</h2>
                    <p className="text-brand-link font-bold text-lg md:text-xl">Expert Clinical Care</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-xl text-brand-dark mb-4 flex items-center gap-2 border-b pb-2">
                        Common Causes
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.causes.map((cause, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 bg-brand-link rounded-full mt-2 flex-shrink-0"></span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-xl text-brand-dark mb-4 flex items-center gap-2 border-b pb-2">
                        Key Symptoms
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="w-2 h-2 bg-brand-light-blue rounded-full mt-2 flex-shrink-0"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 md:p-8 bg-brand-bg rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <p className="font-bold text-brand-dark text-xl mb-1">Ready to start your recovery?</p>
                    <p className="text-gray-600">Book a home consultation with Dr. Sahana.</p>
                  </div>
                  <a href="tel:9916527752" className="btn-primary whitespace-nowrap px-8 py-4">
                    Book Service Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
