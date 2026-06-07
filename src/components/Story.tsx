import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sunrise, CircleDot, Flower2, Wind, Feather, PhoneCall, Lock } from 'lucide-react';

export default function Story() {
  const practiceBenefits = [
    "Feel emotionally calmer",
    "Stay spiritually focused",
    "Develop daily discipline",
    "Reduce negativity",
    "Improve inner positivity",
    "Build peaceful habits",
    "Reconnect with gratitude and faith",
    "Create a stronger spiritual mindset"
  ];

  const quotes = [
    "Sometimes the greatest blessing is inner peace.",
    "Faith does not remove every problem instantly — but it gives strength to face them.",
    "A peaceful mind creates a stronger life.",
    "Devotion becomes powerful when practiced with sincerity and consistency.",
    "Even a few minutes of calm spiritual practice can change the energy of your entire day."
  ];

  return (
    <section id="story" className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 bg-[#0d0103]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590082875151-57b1bc5570bb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full max-w-4xl h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.06)_0,transparent_60%)] pointer-events-none blur-[60px]"></div>

      {/* Floating Diya Lamps */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[10%] hidden lg:block"
      >
        <span className="text-3xl filter drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">🪔</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <span className="text-3xl filter drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">🪔</span>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Sanskrit Mantra Overlay Background Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
           <p className="text-[12rem] md:text-[18rem] leading-none font-serif text-yellow-500 whitespace-nowrap -rotate-6 translate-y-10">ॐ शान्तिः</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20 mb-8 shadow-[0_0_30px_rgba(255,215,0,0.05)]">
            <Feather className="w-10 h-10 text-yellow-500/80 drop-shadow-md" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-8 drop-shadow-md tracking-wide">
            There are moments in life <br className="hidden md:block"/>
            <span className="text-gold-gradient">when everything feels heavy.</span>
          </h2>
        </motion.div>
          
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl w-full mb-24">
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <p className="text-xl md:text-3xl text-gray-200 font-serif leading-relaxed italic drop-shadow-md">
              "Many people silently carry financial stress every day. Sometimes people only need hope, positivity, and inner peace to move forward again."
            </p>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mt-8">
              <p>
                Financial pressure, emotional exhaustion, lack of focus, and daily struggles begin affecting inner peace. In these difficult moments, many people search not for magic… but for strength, clarity, hope, and peace.
              </p>
              <p>
                For generations in Indian spiritual tradition, devotees have turned toward Lord Ganesh during challenging phases of life. Lord Ganesh is worshipped as the symbol of wisdom, positivity, guidance, focus, and removal of obstacles.
              </p>
              <p className="border-l-2 border-yellow-600/50 pl-5 text-gray-300">
                Faith and discipline can help create a calmer and stronger mindset. You are not alone in difficult times.
              </p>
              <p className="border border-yellow-900/30 p-6 mt-8 text-yellow-500/90 font-medium bg-black/40 rounded-2xl shadow-inner italic">
                This guide was created to offer a peaceful devotional routine rooted in positivity and faith. It is about changing your mindset, energy, discipline, and emotional connection through sincere devotional routine.
              </p>
            </div>
          </motion.div>

          {/* Core Practice Benefits Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="bg-gradient-to-b from-[#2A050B]/60 to-black/80 backdrop-blur-xl border border-yellow-900/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_40px_rgba(255,215,0,0.03)] relative overflow-hidden group hover:border-yellow-500/20 transition-colors h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="bg-yellow-500/10 p-3 rounded-2xl border border-yellow-500/20 shadow-inner">
                  <Sunrise className="w-7 h-7 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl font-serif">The Power of Peace</h3>
                </div>
              </div>
              
              <p className="text-gray-400 text-base leading-relaxed mb-8 relative z-10">
                This devotional experience combines spiritual guidance, mantra practice, calming rituals, and affirmations designed to help create a more peaceful lifestyle.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {practiceBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="flex items-start gap-3 bg-black/40 p-3 rounded-xl border border-white/5"
                  >
                    <Flower2 className="w-5 h-5 text-yellow-600 shrink-0 opacity-80" />
                    <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emotion Quotes Grid */}
        <div className="w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-black/50 backdrop-blur-sm border border-yellow-900/30 p-8 rounded-3xl relative overflow-hidden group hover:border-yellow-500/40 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] ${i === 3 ? "md:col-span-2 lg:col-span-2" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <Wind className="w-8 h-8 text-yellow-600/30 absolute top-6 right-6 group-hover:text-yellow-500/50 transition-colors" />
                <p className="font-serif text-xl md:text-2xl text-gray-200 leading-relaxed italic tracking-wide">
                  "{quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlighted Trust Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-gradient-to-b from-[#1c080b] to-[#0A0002] border-2 border-yellow-600/40 p-10 md:p-14 lg:rounded-[3rem] rounded-3xl relative shadow-[0_0_60px_rgba(255,215,0,0.08)] backdrop-blur-xl text-center overflow-hidden max-w-4xl mx-auto group">
            {/* Animated Glow */}
            <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0,transparent_60%)] animate-[spin_10s_linear_infinite] opacity-50"></div>
            
            <div className="inline-flex w-24 h-24 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full items-center justify-center mb-8 border border-yellow-500/40 shadow-[0_0_30px_rgba(255,215,0,0.15)] relative z-10 group-hover:scale-105 transition-transform duration-700">
                <ShieldCheck className="w-12 h-12 text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
            </div>
            
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-medium relative z-10 max-w-2xl mx-auto drop-shadow-lg mb-10">
              “We believe spirituality should inspire peace, discipline, positivity, and emotional strength — <span className="text-gold-gradient">not fake promises or unrealistic claims</span>.”
            </p>
            
            {/* Trust Badges bottom */}
            <div className="flex flex-wrap justify-center gap-4 relative z-10 border-t border-white/10 pt-8 mt-4">
              <div className="flex items-center gap-2 bg-black/60 border border-white/5 px-4 py-2 rounded-full">
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-300 font-medium uppercase tracking-widest">100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 border border-white/5 px-4 py-2 rounded-full">
                <PhoneCall className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-300 font-medium uppercase tracking-widest">Human WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 border border-white/5 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-300 font-medium uppercase tracking-widest">Respectful Guidance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

