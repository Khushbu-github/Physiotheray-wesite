import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[70] flex flex-col gap-4">
      <motion.a 
        href="https://wa.me/919916527752"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/20 transition-all border-4 border-white"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </motion.a>
      
      <motion.a 
        href="tel:+919916527752"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn-primary w-14 h-14 !p-0 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
        title="Call Us"
      >
        <Phone size={24} />
      </motion.a>
      
    </div>
  );
};

export default FloatingContact;
