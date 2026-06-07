import { motion } from 'motion/react';

export default function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-16 px-4 border-t border-yellow-900/30 relative pb-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-yellow-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-snug">
          Begin Your Spiritual Journey with Peace, Positivity & Faith Today.
        </h2>
        
        <motion.button
          onClick={scrollToPricing}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold px-10 py-5 rounded-full hover:bg-yellow-500 hover:text-black transition-all mb-4 shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] backdrop-blur-sm"
        >
          Start My Spiritual Journey for ₹299
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 mb-16 text-center border-t border-white/5 pt-12">
         <p className="text-gray-500 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed border border-yellow-900/20 p-4 rounded-xl bg-white/5">
           <span className="font-bold text-gray-400">DISCLAIMER:</span> This product is intended only for spiritual, devotional, motivational, and educational purposes. Individual experiences vary based on belief, consistency, and personal circumstances.
         </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 mb-16 border-b border-white/5 pb-12">
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/30">
                <span className="text-yellow-500 font-serif text-xl">ॐ</span>
             </div>
             <p className="text-white font-serif text-2xl font-bold tracking-wide">Panditji</p>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed font-medium">
            “We believe trust is built through honesty, transparency, and genuine service.”
          </p>
          <div className="flex flex-col gap-3">
             <a href="mailto:support@panditji.in" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">support@panditji.in</a>
             <a href="https://wa.me/919999999999" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">WhatsApp Support: +91 99999 99999</a>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Legal & Policies</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Support</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-yellow-500 text-sm font-medium transition-colors">Contact Us</a></li>
              <li><span className="text-gray-500 text-sm font-medium">Instant Digital Delivery</span></li>
              <li><span className="text-gray-500 text-sm font-medium">100% Secure Checkout</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
         <p className="text-center text-gray-600 text-sm font-medium">
           © {new Date().getFullYear()} Panditji Spiritual Guidance. All rights reserved.
         </p>
         <div className="flex gap-4">
            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest border border-white/5 px-4 py-2 rounded-full">Secure SSL</span>
            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest border border-white/5 px-4 py-2 rounded-full">UPI Verified</span>
         </div>
      </div>
    </footer>
  );
}
