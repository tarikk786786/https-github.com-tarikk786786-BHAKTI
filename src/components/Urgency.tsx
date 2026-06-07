import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, Users, ShoppingBag } from 'lucide-react';

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [viewers, setViewers] = useState(105);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewerTimer = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 5000);
    return () => clearInterval(viewerTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="urgency" className="w-full bg-[#1A0307] border-y border-yellow-900/30 py-4 px-4 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-yellow-500 font-semibold animate-pulse">
          <span className="text-xl">🔥</span> LIMITED SPIRITUAL OFFER — TODAY ONLY ₹299
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 text-white/80 bg-white/5 px-3 py-1.5 rounded-full">
            <Users className="w-4 h-4 text-yellow-500" />
            <span>{viewers} Viewing Now</span>
          </div>

          <div className="flex items-center gap-2 text-white/90 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
            <Timer className="w-4 h-4 text-yellow-500" />
            <span className="font-mono text-yellow-400">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
