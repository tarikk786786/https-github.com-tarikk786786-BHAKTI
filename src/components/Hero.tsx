import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Download, Star, Smartphone, ChevronDown, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#1A0307] pt-20 pb-16 px-4">
      {/* Background Gradient & Parallax Effects */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0 mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.15)_0,transparent_60%)] z-0" />
      
      {/* Floating flower petals via CSS/Framer can be added, simplest is static background with slight animation */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,150,0,0.1)_0,transparent_60%)] z-0 mix-blend-screen"
      ></motion.div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.04] text-[15vw] font-serif whitespace-nowrap text-yellow-500 z-0 selection:bg-transparent">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16"
        >
          <span>॥ ॐ गं गणपतये नमः ॥</span>
          <span>॥ ॐ शान्तिः शान्तिः शान्तिः ॥</span>
          <span>॥ ॐ गं गणपतये नमः ॥</span>
          <span>॥ ॐ शान्तिः शान्तिः शान्तिः ॥</span>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center mt-10 md:mt-0 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative w-32 h-32 md:w-56 md:h-56 mx-auto mb-10 flex items-center justify-center">
            {/* Divine Breathing Aura */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-yellow-500 blur-[60px] rounded-full mix-blend-screen"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full border border-yellow-500/40 p-3 relative shadow-[0_0_60px_rgba(255,215,0,0.3)] z-10"
            >
              <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-full"></div>
              <img 
                src="https://i.ibb.co/jZBzw1Sj/2019-12-07-281-29.jpg" 
                alt="Lord Ganesh" 
                className="w-full h-full object-cover rounded-full shadow-[0_0_40px_rgba(255,215,0,0.5)] relative z-10 border-2 border-yellow-400/50"
              />
            </motion.div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-white text-shadow-xl drop-shadow-2xl leading-normal tracking-wide uppercase text-sm md:text-xl font-medium block mb-4">✨ Spiritual Devotion ✨</span>
            <span className="text-white text-shadow-xl drop-shadow-2xl leading-normal">Remove Financial Stress, Negative Energy & Emotional Burden with the </span>
            <span className="bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-[#FFD700] bg-clip-text text-transparent drop-shadow-2xl font-black">Sacred Blessings of Lord Ganesh</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto mb-8 leading-relaxed text-shadow-md">
            A powerful devotional spiritual guide designed to help people create peace, positivity, confidence, discipline, and hopeful new beginnings during financially difficult phases of life.
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-yellow-500/90 font-serif italic drop-shadow-md px-4">
              “Sometimes when negativity leaves the mind, new opportunities and positive direction begin to appear naturally.”
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-3 max-w-3xl mx-auto mb-14 text-xs sm:text-sm md:text-base text-gray-200">
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">Ancient Ganesh Practice</span></div>
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">5-Day Positivity Routine</span></div>
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">Trusted Devotional Guidance</span></div>
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">Beginner Friendly</span></div>
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><Download className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">Instant Digital Access</span></div>
            <div className="flex items-center justify-center gap-1.5 font-medium bg-white/5 py-3 px-3 rounded-xl border border-yellow-500/20"><ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" /> <span className="truncate">Secure UPI Checkout</span></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20">
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(234,179,8,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] text-[#1A0307] font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all overflow-hidden group"
            >
              <span className="relative z-10">Start My Spiritual Journey</span>
              <div className="absolute inset-0 bg-white/20 blur-md transform -translate-x-full group-hover:animate-[shine_1.5s_infinite] skew-x-12 z-0"></div>
            </motion.button>
            
            <motion.button
              onClick={scrollToStory}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(234,179,8,0.1)", borderColor: "rgba(234,179,8,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-yellow-500/40 text-gray-200 font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:text-yellow-400 transition-all backdrop-blur-sm"
            >
              Read How It Works
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-yellow-500/60 cursor-pointer z-10"
        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-12 h-12 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
      </motion.div>
    </section>
  );
}
