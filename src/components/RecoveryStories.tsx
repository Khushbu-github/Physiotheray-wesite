import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Story {
  name: string;
  location: string;
  condition: string;
  text: string;
  stars: number;
}

const stories: Story[] = [
  {
    name: "Mr. Rajesh",
    location: "Hebbala",
    condition: "Severe Sciatica",
    text: "I was unable to stand for more than 5 minutes. Dr. Sahana's home visits and targeted decompression therapy helped me walk pain-free in just 4 weeks. Highly recommended!",
    stars: 5
  },
  {
    name: "Mrs. Lakshmi",
    location: "Gokulam",
    condition: "Post-TKR Rehab",
    text: "After my knee replacement, I was worried about the recovery. The corrective exercise therapy provided at my home was excellent. I can now climb stairs without help.",
    stars: 5
  },
  {
    name: "Amit S.",
    location: "Bhogadhi",
    condition: "ACL Sports Injury",
    text: "As an athlete, getting back to the field was my priority. The sports-specific rehab program was intense but effective. I'm back to my training schedule now.",
    stars: 5
  },
  {
    name: "Mr. Venkatesh",
    location: "Hootagalli",
    condition: "Stroke Recovery",
    text: "Clinical recovery led by Dr. Sahana helped my father regain his independence after a mild stroke. His gait and balance have improved significantly.",
    stars: 5
  },
  {
    name: "Sneha Rao",
    location: "Belawadi",
    condition: "Chronic Neck Pain",
    text: "Work from home had ruined my posture. Advanced photobiomodulation and ergonomic advice from Aaroghyashala fixed my neck pain permanently.",
    stars: 5
  },
  {
    name: "Ms. Priya",
    location: "South Bengaluru",
    condition: "Post-Pregnancy Back Pain",
    text: "The core strengthening exercises and manual therapy were perfect for my postpartum recovery. The convenience of home services is unmatched.",
    stars: 5
  }
];

const RecoveryStories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return;

    gsap.to(containerRef.current, {
      x: () => -(containerRef.current?.scrollWidth || 0) + window.innerWidth - 80,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${containerRef.current?.scrollWidth || 0}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="stories" className="py-16 bg-brand-bg overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Recovery Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Real stories from patients across Bengaluru who reclaimed their lives with Dr. Sahana.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-6 md:gap-8 px-4 w-fit"
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className="story-card flex-shrink-0 w-[300px] md:w-[450px] bg-white p-6 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative border border-gray-100"
              >
                <Quote className="absolute top-6 right-8 text-brand-light-blue opacity-20 w-10 h-10 md:w-12 md:h-12" />
                
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(story.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 text-sm md:text-lg leading-relaxed">
                  "{story.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-light-blue/20 rounded-full flex items-center justify-center text-brand-link font-bold text-base md:text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm md:text-lg">{story.name}</h4>
                    <p className="text-xs md:text-sm text-gray-500">{story.condition} • {story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryStories;
