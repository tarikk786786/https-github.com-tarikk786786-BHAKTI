import { motion, AnimatePresence } from 'motion/react';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function PrayerBell() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  const ringBell = () => {
    setIsPlaying(true);
    setShowPulse(true);
    setTimeout(() => setIsPlaying(false), 2000);
    setTimeout(() => setShowPulse(false), 3000);
  };

  return (
    <div className="fixed right-6 bottom-32 md:top-1/3 md:bottom-auto z-40">
      <AnimatePresence>
        {showPulse && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-yellow-500 rounded-full blur-md pointer-events-none"
          />
        )}
      </AnimatePresence>
      <motion.button
        onClick={ringBell}
        className="relative w-14 h-14 bg-gradient-to-b from-[#2A050B]/80 to-black/80 backdrop-blur-xl border border-yellow-500/40 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.15)] group transition-all mt-4"
        animate={isPlaying ? {
          rotate: [0, -30, 30, -20, 20, -10, 10, 0],
          transition: { duration: 1.5, type: "spring", stiffness: 200, damping: 10 }
        } : {
          y: [0, -5, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.1, borderColor: "rgba(234, 179, 8, 0.8)", boxShadow: "0 0 30px rgba(234, 179, 8, 0.4)" }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md group-hover:bg-yellow-500/20 transition-all opacity-0 group-hover:opacity-100"></div>
        <Bell className={`w-6 h-6 relative z-10 transition-colors duration-300 ${isPlaying ? 'text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]' : 'text-yellow-500/80 group-hover:text-yellow-400'}`} />
      </motion.button>
    </div>
  );
}
