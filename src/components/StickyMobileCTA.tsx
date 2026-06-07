import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pricingSection = document.getElementById('pricing');
      if (!pricingSection) return;

      const pricingTop = pricingSection.offsetTop;
      
      // Show when scrolled down a bit, hide when near pricing
      if (scrollY > 400 && scrollY < pricingTop - 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-40 md:hidden flex justify-center pb-6"
        >
          <button
            onClick={scrollToPricing}
            className="w-full max-w-sm bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-pulse"
          >
            <ShoppingBag className="w-5 h-5" />
            Get Instant Access ₹299
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
