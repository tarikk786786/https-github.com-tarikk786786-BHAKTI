import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, ShieldCheck, Moon, PhoneCall, BrainCircuit, ArrowRight, Sunrise, Compass, Sparkles, Wind } from 'lucide-react';
import { useRef } from 'react';

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <section ref={containerRef} id="story" className="py-32 px-4 bg-[#0A0102] relative overflow-hidden">
      {/* Cinematic Backgrounds */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590082875151-57b1bc5570bb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-screen pointer-events-none"></motion.div>
      
      {/* Soft Golden Light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.03)_0,transparent_60%)] pointer-events-none blur-[80px]"></div>

      {/* Floating Petals / Particles Fake Animation */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] hidden lg:block"
      >
        <span className="text-xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">🌸</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-[10%] hidden lg:block text-yellow-500/20"
      >
        <Wind className="w-8 h-8" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Scene 1: The Heavy Night */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/10 border border-red-900/30 mb-6">
              <Moon className="w-8 h-8 text-gray-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-md">
              “Every night felt <span className="text-red-500/80">heavier</span> than the last…”
            </h2>
          </div>
          
          <div className="bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-300 font-serif leading-relaxed italic mb-8 border-l-2 border-red-900/50 pl-6">
              He smiled in front of people, but silently carried fear, stress, and emotional pressure inside. Loans, responsibilities, delayed money, and constant tension slowly started taking away his peace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 font-sans">
              <div className="flex items-start gap-4">
                <BrainCircuit className="w-6 h-6 text-red-900/80 shrink-0 mt-1" />
                <p>Sitting awake at night worrying, constantly checking phone notifications, carrying the deep fear of loan calls and family pressure.</p>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-900/80 shrink-0 mt-1" />
                <p>Financial burden doesn’t only affect money… it slowly affects the heart, mind, confidence, and peace of a person. It is emotionally exhausting to pretend everything is okay.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scene 2: The Spiritual Turning Point */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative"
        >
          {/* Transition Line */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-900/50 to-yellow-500/50"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
              <Compass className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              A Spiritual <span className="text-gold-gradient">Turning Point</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#1c080d] to-black border border-yellow-900/40 rounded-[2rem] p-8 md:p-12 shadow-[0_0_40px_rgba(255,215,0,0.03)] text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full"></div>
             
             <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans mb-8 relative z-10">
               During one incredibly difficult phase, he visited a deep, quiet temple. There, he met an old spiritual guide from Banaras who introduced him to an ancient Ganesh devotional practice—a simple daily spiritual discipline.
             </p>

             <blockquote className="text-2xl md:text-3xl font-serif text-yellow-500/90 italic font-medium max-w-2xl mx-auto mb-8 relative z-10">
               “The old spiritual guide said: 'When negativity leaves the mind, new paths begin to appear in life.'”
             </blockquote>

             <p className="text-gray-400 text-lg leading-relaxed relative z-10 max-w-2xl mx-auto">
               He was told that Lord Ganesh is worshipped as the <strong className="text-white">remover of obstacles</strong>, the guide of <strong className="text-white">new beginnings</strong>, and the energy of <strong className="text-white">positive direction</strong>.
             </p>
          </div>
        </motion.div>

        {/* Scene 3: How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-4xl text-white font-bold mb-6">Not Magic. <span className="text-gold-gradient">Spiritual Discipline.</span></h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">The guide is a structured devotional routine focused on positivity, faith, and peaceful energy, designed to help create calmness and mental clarity during difficult times.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
             {[
               "Ancient Ganesh mantra chanting",
               "Daily devotional discipline",
               "Positive mindset practices",
               "Spiritual focus techniques",
               "Peaceful prayer routine"
             ].map((item, idx) => (
               <div key={idx} className="flex items-center gap-4 bg-black/50 border border-yellow-900/30 p-5 rounded-2xl hover:border-yellow-500/40 transition-colors">
                  <Sparkles className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-gray-200 font-medium text-lg">{item}</span>
               </div>
             ))}
          </div>
          
          <p className="text-center text-gray-400 italic mt-8 text-lg">
            Many devotees believe: peaceful thoughts create better focus, discipline creates stronger decisions, positivity creates emotional strength, and calmness helps people move forward again.
          </p>
        </motion.div>

        {/* Scene 4: The Transformation & New Opportunities */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-b from-[#2A050B] to-black border-2 border-yellow-500/20 rounded-[3rem] p-10 md:p-14 shadow-[0_0_60px_rgba(255,215,0,0.05)] relative overflow-hidden">
             
             <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                  <Sunrise className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6 drop-shadow-md">
                  The <span className="text-gold-gradient">Emotional Transformation</span>
                </h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-6">
                  <p className="text-xl font-serif text-white italic border-l-2 border-yellow-600/50 pl-4">“He slowly stopped feeling emotionally trapped. The fear inside him slowly became calmer.”</p>
                  <p className="text-gray-300 leading-relaxed">He started waking up with more positivity, strength, and hope. New confidence helped him face life again.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-yellow-500"/> Opening New Paths</h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Many devotees believe that when the mind becomes peaceful and negativity becomes lighter, new paths, job possibilities, business direction, and financial clarity begin opening naturally.
                  </p>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Final Emotional Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
           <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
             “Sometimes the biggest miracle is not instant money…”
           </h3>
           
           <div className="max-w-2xl mx-auto space-y-4 mb-12 text-left bg-black/40 p-8 rounded-3xl border border-white/5 inline-block">
             <p className="text-xl text-gray-300 font-medium mb-6">Sometimes the real miracle is when:</p>
             {[
               "fear becomes faith",
               "stress becomes peace",
               "hopelessness becomes confidence",
               "and a person finally feels strong enough to move forward again."
             ].map((text, idx) => (
               <div key={idx} className="flex items-center gap-3 text-yellow-500/90 text-lg md:text-xl font-serif italic">
                 <Sparkles className="w-5 h-5 shrink-0" />
                 <span>{text}</span>
               </div>
             ))}
           </div>
           
           <p className="text-2xl md:text-3xl text-white font-bold font-serif tracking-wide drop-shadow-lg">
             “Your new beginning may start with <span className="text-gold-gradient">one peaceful step</span>.”
           </p>
        </motion.div>

      </div>
    </section>
  );
}

