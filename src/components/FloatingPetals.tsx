import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState<{ id: number; left: number; duration: number; delay: number; scale: number; rotation: number; isSaffron: boolean }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 25, // 25-45s (very slow and cinematic)
      delay: Math.random() * -30, // Start mid-air
      scale: Math.random() * 0.4 + 0.2, // Smaller, subtle
      rotation: Math.random() * 360,
      isSaffron: Math.random() > 0.5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className={`absolute top-[-5%] ${petal.isSaffron ? 'text-orange-500/40' : 'text-yellow-500/40'} blur-[1px]`}
          initial={{ 
            x: `${petal.left}vw`, 
            y: '-10vh',
            rotate: petal.rotation,
            scale: petal.scale
          }}
          animate={{
            y: '110vh',
            x: [`${petal.left}vw`, `${petal.left + (Math.random() * 15 - 7.5)}vw`, `${petal.left}vw`],
            rotate: petal.rotation + 360,
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Subtle petal shape */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_10px_currentColor]">
            <path d="M12 2C8 6 4 10 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 10 16 6 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
