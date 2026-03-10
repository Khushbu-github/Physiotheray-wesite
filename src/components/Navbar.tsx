import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Aaroghyashala', href: '#why' },
    { name: 'Our Services', href: '#services' },
    { name: 'Recovery Stories', href: '#stories' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-1' : 'bg-white shadow-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center group">
              <img 
                src={logo} 
                alt="Aaroghyashala Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto object-contain transition-transform group-hover:scale-105`}
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-dark hover:text-brand-link px-1 py-2 rounded-md text-sm font-bold transition-all hover:tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:9916527752"
                className="btn-primary flex items-center gap-2 px-6 py-3 shadow-lg hover:shadow-brand-link/30"
              >
                <Phone size={16} />
                <span className="text-sm font-bold">Book Service</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-dark hover:bg-brand-bg transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark hover:text-brand-link hover:bg-brand-bg block px-4 py-4 rounded-xl text-base font-bold transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 mt-6">
            <a
              href="tel:9916527752"
              className="w-full text-center block bg-brand-link text-white px-6 py-4 rounded-xl font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Book Service Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
