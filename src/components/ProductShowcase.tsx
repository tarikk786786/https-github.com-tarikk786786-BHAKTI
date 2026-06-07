import { motion } from 'motion/react';
import { Smartphone, Headphones, CalendarDays, BookOpen, Sparkles } from 'lucide-react';

export default function ProductShowcase() {
  const features = [
    {
      icon: Smartphone,
      title: "The Ancient Ganesh Sadhana Guide",
      desc: "A beautifully designed, mobile-first guide explaining the exact steps, timings, and rules for the daily practice.",
    },
    {
      icon: Headphones,
      title: "High-Definition Mantra Audio",
      desc: "Professionally recorded, spiritually resonant audio to help you chant with perfect pronunciation and deep focus.",
    },
    {
      icon: CalendarDays,
      title: "The 21-Day Positivity Blueprint",
      desc: "A day-by-day mindset tracker to help you rebuild your confidence, reduce stress, and stay disciplined.",
    },
    {
      icon: BookOpen,
      title: "Sacred Prayers for Obstacle Removal",
      desc: "Exclusive access to traditional daily prayers specifically focused on clearing mental blockages and finding positive direction.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      {/* Cinematic Spotlight Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-6xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.1)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide text-gold-gradient drop-shadow-lg"
          >
            Look Inside The Sacred Digital Toolkit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg md:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed"
          >
            “Everything you need to build a peaceful, disciplined, and spiritually powerful daily routine—accessible instantly on any device.”
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Mockups */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Background Glow for screens */}
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* iPad Mockup representation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-[60%] lg:-translate-x-[70%] w-[320px] md:w-[400px] h-[450px] md:h-[550px] bg-black border-4 border-gray-800 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.15)] z-10"
            >
               {/* Screen Content Fake */}
               <div className="w-full h-full bg-gradient-to-br from-[#2A050B] to-black relative">
                 <div className="absolute top-0 w-full h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.2)_0,transparent_70%)]"></div>
                 <div className="p-8 flex flex-col items-center text-center h-full pt-16">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center mb-6">
                      <span className="text-yellow-500 text-2xl">🕉</span>
                    </div>
                    <div className="w-3/4 h-4 bg-white/10 rounded-full mb-3"></div>
                    <div className="w-1/2 h-3 bg-white/5 rounded-full mb-10"></div>
                    <div className="w-full space-y-4">
                      <div className="w-full h-20 bg-white/5 rounded-xl border border-white/5"></div>
                      <div className="w-full h-20 bg-white/5 rounded-xl border border-white/5"></div>
                      <div className="w-full h-20 bg-white/5 rounded-xl border border-white/5"></div>
                    </div>
                 </div>
               </div>
            </motion.div>

            {/* iPhone Mockup representation */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-1/2 translate-x-[10%] lg:translate-x-[20%] mt-20 w-[180px] md:w-[220px] h-[380px] md:h-[450px] bg-black border-[4px] border-gray-800 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.25)] z-20"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-800 rounded-b-xl z-30"></div>
              {/* Screen Content Fake */}
              <div className="w-full h-full bg-gradient-to-b from-[#1c080d] to-black relative">
                 <div className="p-5 flex flex-col items-center h-full pt-10">
                    <div className="w-full h-32 bg-yellow-500/10 rounded-2xl mb-4 border border-yellow-500/20 relative overflow-hidden">
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <Headphones className="w-8 h-8 text-yellow-500/60 mb-2" />
                          <div className="w-1/2 h-1 bg-yellow-500/30 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-yellow-500 rounded-full"></div>
                          </div>
                       </div>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/5 rounded-full mb-6 relative self-start"></div>
                    <div className="w-full space-y-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-md shrink-0"></div>
                        <div className="w-full h-3 bg-white/5 rounded-full"></div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-md shrink-0"></div>
                        <div className="w-full h-3 bg-white/5 rounded-full"></div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-md shrink-0"></div>
                        <div className="w-full h-3 bg-white/5 rounded-full"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Features */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative bg-[#1c080b]/60 backdrop-blur-md border border-yellow-900/30 p-6 rounded-2xl hover:border-yellow-500/50 hover:bg-[#2A050B]/80 transition-all duration-300 shadow-inner"
              >
                <div className="flex gap-5">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-yellow-500 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{feature.title}</h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-30 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none rounded-2xl overflow-hidden"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Anchor Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500/80" />
          </div>
          <p className="font-serif text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto italic drop-shadow-md">
            “A complete devotional ecosystem designed to fit perfectly into your busy life. Requires only <span className="text-yellow-500 font-bold">5 to 10 minutes</span> a day.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
