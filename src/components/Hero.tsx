import { motion } from 'motion/react';
import { ShieldCheck, Download, Star, Smartphone, ChevronDown, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A0307] via-[#2A050B] to-[#1A0307] pt-20 pb-16 px-4">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.15)_0,transparent_50%)] z-0" />
      
      {/* Floating flower petals via CSS/Framer can be added, simplest is static background with slight animation */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.1)_0,transparent_60%)] z-0"
      ></motion.div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03] text-[15vw] font-serif whitespace-nowrap text-yellow-500 z-0 selection:bg-transparent">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        >
          ॥ ॐ गं गणपतये नमः ॥ ॐ गं गणपतये नमः ॥ ॐ गं गणपतये नमः ॥ ॐ गं गणपतये नमः ॥
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center mt-10 md:mt-0"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-10 rounded-full border border-yellow-500/40 flex items-center justify-center p-3 relative shadow-[0_0_60px_rgba(255,215,0,0.2)]"
        >
          <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-full"></div>
          <img 
            src="https://i.ibb.co/v4YL2z8h/Chat-GPT-Image-Jun-7-2026-10-38-18-AM.png" 
            alt="Lord Ganesh" 
            className="w-full h-full object-cover rounded-full shadow-[0_0_30px_rgba(255,215,0,0.4)] relative z-10 border-2 border-yellow-400/30"
          />
        </motion.div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
          <span className="text-white text-shadow-xl drop-shadow-2xl leading-normal tracking-wide uppercase text-sm md:text-xl font-medium block mb-4">Shree Ganesh Financial Peace Mantra</span>
          <span className="text-white text-shadow-xl drop-shadow-2xl leading-normal">Find Peace, Positivity & Inner Strength with the </span>
          <span className="bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-[#FFD700] bg-clip-text text-transparent drop-shadow-2xl font-black">Sacred Blessings of Lord Ganesh</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto mb-12 leading-relaxed text-shadow-md">
          A devotional spiritual guide created to support people during financial stress and emotionally difficult phases with faith, discipline, and positivity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 max-w-3xl mx-auto mb-14 text-sm md:text-base text-gray-200">
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><ShieldCheck className="w-5 h-5 text-yellow-500" /> Ancient Spiritual Practice</div>
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><Download className="w-5 h-5 text-yellow-500" /> Instant Digital Access</div>
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><CheckCircle className="w-5 h-5 text-yellow-500" /> Beginner Friendly</div>
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><Star className="w-5 h-5 text-yellow-500" /> Trusted by Devotees</div>
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><ShieldCheck className="w-5 h-5 text-yellow-500" /> Secure UPI Checkout</div>
          <div className="flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-3 rounded-xl border border-yellow-500/20"><Smartphone className="w-5 h-5 text-yellow-500" /> Mobile Ready</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            onClick={scrollToPricing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] text-[#1A0307] font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:shadow-[0_0_50px_rgba(234,179,8,0.8)] transition-all"
          >
            Receive Divine Access
          </motion.button>
          
          <motion.button
            onClick={scrollToStory}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-transparent border-2 border-yellow-500/40 text-gray-200 font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:bg-yellow-500/10 hover:border-yellow-400 hover:text-yellow-400 transition-all backdrop-blur-sm"
          >
            Read How It Works
          </motion.button>
        </div>
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
