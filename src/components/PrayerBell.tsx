import { motion } from 'motion/react';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function PrayerBell() {
  const [isPlaying, setIsPlaying] = useState(false);

  const ringBell = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <motion.button
      onClick={ringBell}
      className={`fixed right-4 bottom-24 md:top-1/4 z-40 w-12 h-12 bg-black/60 backdrop-blur-md border border-yellow-500/30 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all`}
      animate={isPlaying ? {
        rotate: [0, -20, 20, -15, 15, -10, 10, 0],
        transition: { duration: 1 }
      } : {}}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Bell className={`w-5 h-5 ${isPlaying ? 'text-yellow-400' : 'text-yellow-500/70'}`} />
    </motion.button>
  );
}
