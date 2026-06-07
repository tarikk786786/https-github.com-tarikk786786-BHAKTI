import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-yellow-500/50 origin-left z-50 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
