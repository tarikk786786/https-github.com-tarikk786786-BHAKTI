import { motion } from 'motion/react';

export default function SmokeEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-30">
      <motion.div
        className="absolute bottom-0 left-[-20%] w-[150%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.1),transparent_70%)] blur-[80px]"
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['0%', '-5%', '0%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-[-20%] w-[150%] h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,100,50,0.05),transparent_70%)] blur-[100px]"
        animate={{
          x: ['5%', '-5%', '5%'],
          y: ['-5%', '0%', '-5%'],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
