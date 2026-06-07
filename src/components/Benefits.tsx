import { motion } from 'motion/react';
import { Target, Shield, Sunrise, Brain, Heart, Sparkles, ShieldCheck, Compass, Flower2, Coins, ArrowRight, DoorOpen, Briefcase, TrendingUp, Sun, Fingerprint } from 'lucide-react';

export default function Benefits() {
  const ganeshAttributes = [
    "Vighnaharta — Remover of Obstacles",
    "The Lord of New Beginnings",
    "Symbol of Wisdom, Stability & Progress",
    "Divine Energy of Positivity & Success"
  ];

  const pathsList = [
    "starting businesses", "job interviews", "career changes", 
    "financial recovery efforts", "important meetings", "exams", "new beginnings"
  ];

  const associatedWithList = [
    "new opportunities", "positive direction", 
    "wisdom in decisions", "confidence", "growth and progress"
  ];

  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590082875151-57b1bc5570bb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full max-w-4xl h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.04)_0,transparent_60%)] pointer-events-none blur-[60px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-yellow-500 font-serif text-2xl mb-4 block animate-pulse">🔥</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
            The Powerful Spiritual Blessings <br className="hidden md:block"/>
            <span className="text-gold-gradient">Devotees Associate with Ganesh Mantras</span>
          </h2>
          <span className="text-yellow-500 font-serif text-2xl mt-4 block animate-pulse">🔥</span>
        </div>

        {/* Lord Ganesh Intro Section */}
        <div className="bg-gradient-to-b from-[#2A050B]/60 to-black/80 backdrop-blur-xl border border-yellow-900/40 p-8 md:p-12 rounded-[2rem] shadow-[0_0_40px_rgba(255,215,0,0.03)] mb-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
           
           <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                 <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6 flex items-center gap-4">
                   <span className="text-yellow-500 text-4xl">🕉</span> Lord Ganesh <br/><span className="text-2xl text-yellow-500/80 mt-2 block">The Divine Remover of Obstacles</span>
                 </h3>
                 <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium italic">
                   For generations, millions of devotees across India have worshipped Lord Ganesh as:
                 </p>
                 <ul className="space-y-4 mb-8">
                   {ganeshAttributes.map((attr, idx) => (
                     <li key={idx} className="flex items-center gap-3">
                       <Sparkles className="w-5 h-5 text-yellow-500 shrink-0" />
                       <span className="text-gray-200 text-lg">{attr}</span>
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="md:w-1/2 border-l border-yellow-900/30 md:pl-10">
                 <p className="text-xl md:text-2xl text-yellow-500/90 font-serif leading-relaxed italic">
                   "Many devotees believe that sincere Ganesh mantra chanting with faith and discipline helps clear negativity, emotional heaviness, fear, confusion, and blocked energy from life."
                 </p>
              </div>
           </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-yellow-900/30 p-8 rounded-3xl group hover:border-yellow-500/30 transition-colors"
          >
             <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <DoorOpen className="w-7 h-7 text-yellow-500" />
             </div>
             <h4 className="font-serif text-2xl font-bold text-white mb-6">Opens New Paths & Life Opportunities</h4>
             <p className="text-gray-400 mb-4">Devotees traditionally pray to Lord Ganesh before:</p>
             <div className="flex flex-wrap gap-2 mb-6">
               {pathsList.map((item, idx) => (
                 <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">{item}</span>
               ))}
             </div>
             <p className="text-gray-400 mb-4">because Lord Ganesh is spiritually associated with:</p>
             <ul className="space-y-2 mb-6">
                {associatedWithList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-yellow-500/80">
                     <Sparkles className="w-4 h-4" /> {item}
                  </li>
                ))}
             </ul>
             <p className="text-gray-300 italic text-sm">
               Many followers believe that when negativity reduces and the mind becomes calmer, new paths and opportunities begin to appear naturally.
             </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-yellow-900/30 p-8 rounded-3xl group hover:border-yellow-500/30 transition-colors"
          >
             <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <Briefcase className="w-7 h-7 text-yellow-500" />
             </div>
             <h4 className="font-serif text-2xl font-bold text-white mb-6">Helps Attract Career & Job Opportunities</h4>
             <p className="text-gray-400 mb-4">Many devotees believe spiritual discipline helps them:</p>
             <ul className="space-y-3 mb-6">
                {["regain confidence", "stay motivated", "think more positively", "prepare better for opportunities", "remain focused during difficult phases"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-yellow-500/80">
                     <Sparkles className="w-4 h-4" /> {item}
                  </li>
                ))}
             </ul>
             <p className="text-gray-300 italic text-sm leading-relaxed border-l-2 border-yellow-600/30 pl-4 py-2 mt-4">
               This positive mindset often helps people move forward with greater energy, discipline, and hope while seeking new jobs, career growth, business opportunities, and financial stability.
             </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-yellow-900/30 p-8 rounded-3xl group hover:border-yellow-500/30 transition-colors"
          >
             <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <TrendingUp className="w-7 h-7 text-yellow-500" />
             </div>
             <h4 className="font-serif text-2xl font-bold text-white mb-6">Encourages Movement in Stuck Financial Matters</h4>
             <p className="text-gray-400 mb-4">In traditional spiritual belief, many devotees pray to Lord Ganesh for:</p>
             <ul className="space-y-3 mb-6">
                {["smoother life situations", "reduction of obstacles", "positive movement in delayed matters", "financial clarity", "relief from stressful situations"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-yellow-500/80">
                     <Sparkles className="w-4 h-4" /> {item}
                  </li>
                ))}
             </ul>
             <p className="text-gray-300 italic text-sm">
               Many followers believe spiritual positivity and discipline help them feel more capable, hopeful, and mentally prepared to handle financial challenges.
             </p>
          </motion.div>

          {/* Box 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-yellow-900/30 p-8 rounded-3xl group hover:border-yellow-500/30 transition-colors"
          >
             <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/20">
                <Sun className="w-7 h-7 text-yellow-500" />
             </div>
             <h4 className="font-serif text-2xl font-bold text-white mb-6">Transforms Negativity Into Positivity</h4>
             <p className="text-gray-400 mb-4">Financial pressure often creates fear, stress, hopelessness, emotional exhaustion, confusion, and lack of motivation.</p>
             <p className="text-gray-400 mb-4">Devotees believe regular Ganesh mantra chanting helps transform:</p>
             <ul className="space-y-3 mb-6">
                {["fear into faith", "stress into calmness", "confusion into clarity", "negativity into positivity", "hopelessness into motivation"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-yellow-500/80">
                     <Sparkles className="w-4 h-4" /> {item}
                  </li>
                ))}
             </ul>
          </motion.div>
        </div>

        {/* Powerful Bottom Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <div className="bg-[#1c080b] border border-yellow-900/30 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                 <Fingerprint className="w-6 h-6 text-yellow-500" />
                 <h4 className="font-serif text-xl font-bold text-white">Power of Sacred Mantra Vibrations</h4>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">Ancient spiritual traditions teach that repeating sacred mantras daily with devotion may help create peaceful mental energy, emotional balance, spiritual discipline, and stronger focus.</p>
              <p className="text-gray-300 italic text-sm border-l-2 border-yellow-600/30 pl-4">Many devotees describe mantra chanting as a source of peace, strength, emotional healing, motivation, and spiritual grounding.</p>
           </div>
           
           <div className="bg-[#1c080b] border border-yellow-900/30 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                 <Compass className="w-6 h-6 text-yellow-500" />
                 <h4 className="font-serif text-xl font-bold text-white">Why Lord Ganesh is Worshipped First</h4>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">In Indian spiritual tradition, Lord Ganesh is worshipped before every important beginning because he represents wisdom, positivity, success, protection, and obstacle removal.</p>
              <p className="text-gray-300 italic text-sm border-l-2 border-yellow-600/30 pl-4">That is why millions seek Ganesh blessings before business beginnings, career decisions, financial recovery efforts, major life changes, and ceremonies.</p>
           </div>
        </div>

        {/* Final Emotional Line */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }} 
           className="text-center max-w-4xl mx-auto bg-gradient-to-t from-black to-transparent p-10 rounded-[3rem] border-b-2 border-yellow-500/20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 border border-yellow-500/30">
            <Heart className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed font-medium italic drop-shadow-lg mb-8">
            “Sometimes the greatest blessing is when darkness begins to lift, the mind becomes peaceful, confidence returns, and <span className="text-gold-gradient">new opportunities begin to open naturally.</span>”
          </p>
          <p className="text-yellow-500/80 font-medium tracking-wide uppercase text-sm md:text-base">
            ✨ With faith, discipline, positivity, and devotion, even difficult phases can slowly transform into new beginnings.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
