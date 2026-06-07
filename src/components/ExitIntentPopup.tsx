import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, HandHeart } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-md w-full bg-gradient-to-b from-[#2A050B] to-black border border-yellow-600/50 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(255,215,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjE1LDAsMC4xKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
          
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <HandHeart className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            Wait! Before You Leave...
          </h3>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Don't let this opportunity for <span className="text-gold-gradient font-semibold">financial peace</span> slip away. Claim your instant digital access today and begin your daily spiritual journey.
          </p>

          <motion.button
            onClick={() => {
              setShow(false);
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Receive Divine Access for ₹299
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
