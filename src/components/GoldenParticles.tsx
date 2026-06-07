import { motion, useAnimationFrame } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function GoldenParticles() {
  const [particles, setParticles] = useState<{ id: number; left: number; top: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate only once on client
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 20, // 20-40s
      delay: Math.random() * -40,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-500 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}vw`,
            top: `${p.top}vh`,
            boxShadow: `0 0 ${p.size * 3}px rgba(255, 215, 0, 0.8)`,
          }}
          animate={{
            y: ['0vh', '-10vh', '10vh', '0vh'],
            x: ['0vw', '2vw', '-2vw', '0vw'],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
