import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="bg-[#001B3D] text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Aaroghyashala Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 max-w-sm mb-6">
              Clinical excellence and physiotherapy at your doorstep. We specialize in orthopedic, neurological, and sports conditions across Mysore.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-brand-light-blue transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-light-blue transition-colors">Our Services</a></li>
              <li><a href="#stories" className="hover:text-brand-light-blue transition-colors">Recovery Stories</a></li>
              <li><a href="#about" className="hover:text-brand-light-blue transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-4 text-white/60">
              <li>Bhogadhi & Gokulam</li>
              <li>Hebbala & Hootagalli</li>
              <li>Belawadi & South Bengaluru</li>
              <li>Vijayanagar area</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Aaroghyashala Physiotherapy & Wellness. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
