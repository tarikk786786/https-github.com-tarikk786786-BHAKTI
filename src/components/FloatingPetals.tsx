import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState<{ id: number; left: number; duration: number; delay: number; scale: number; rotation: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * -20, // Start some mid-air
      scale: Math.random() * 0.5 + 0.3,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%] text-red-500/30 blur-[1px]"
          initial={{ 
            x: `${petal.left}vw`, 
            y: '-10vh',
            rotate: petal.rotation,
            scale: petal.scale
          }}
          animate={{
            y: '110vh',
            x: [`${petal.left}vw`, `${petal.left + (Math.random() * 10 - 5)}vw`, `${petal.left}vw`],
            rotate: petal.rotation + 360
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8 6 4 10 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 10 16 6 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
