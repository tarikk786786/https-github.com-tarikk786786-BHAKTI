import { motion } from 'motion/react';
import { Package, CheckCircle2, BookOpen, Sparkles, Smartphone, Heart, Sunrise, DoorOpen, Gift, Infinity, Star } from 'lucide-react';

export default function Deliverables() {
  return (
    <section className="py-24 px-4 bg-[#110103] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80')] opacity-[0.02] bg-cover mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0,transparent_70%)] pointer-events-none blur-[80px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-yellow-500 font-serif text-2xl mb-4 block animate-pulse">✨</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            What You Will Receive Inside This <br className="hidden md:block"/>
            <span className="text-gold-gradient">Sacred Spiritual Experience</span>
          </h2>
          <span className="text-yellow-500 font-serif text-2xl mt-4 mb-6 block animate-pulse">✨</span>
          <p className="text-lg md:text-2xl text-gray-300 font-medium font-serif italic max-w-3xl mx-auto leading-relaxed border-b border-yellow-900/30 pb-8">
            Everything carefully designed to help you begin a peaceful, positive, and spiritually focused daily routine with the blessings of Lord Ganesh.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-md border border-yellow-900/40 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-b from-yellow-500/10 to-transparent rounded-xl flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                <BookOpen className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Ancient Ganesh Mantra Guide</h3>
            </div>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Receive a specially organized devotional mantra guide inspired by traditional Ganesh spiritual practices focused on positivity, discipline, confidence, and peaceful energy.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/50 backdrop-blur-md border border-yellow-900/40 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-b from-yellow-500/10 to-transparent rounded-xl flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                <CheckCircle2 className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Step-by-Step Ritual Instructions</h3>
            </div>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Simple beginner-friendly instructions designed to help you follow the spiritual routine easily from your home without confusion.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-md border border-yellow-900/40 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-b from-yellow-500/10 to-transparent rounded-xl flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                <span className="text-yellow-500 text-3xl mb-1">🕉</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Easy Chanting Method</h3>
            </div>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Clear and simple chanting steps suitable for beginners and daily devotional practice.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/50 backdrop-blur-md border border-yellow-900/40 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-b from-yellow-500/10 to-transparent rounded-xl flex items-center justify-center border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                <Sparkles className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Devotional Focus & Positivity Guide</h3>
            </div>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Learn how to create a calmer mindset, stronger spiritual discipline, positive thinking, and peaceful daily focus during difficult life phases.
            </p>
          </motion.div>
        </div>

        {/* Highlighted Banners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Detailed Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#2A050B]/60 to-black/80 backdrop-blur-xl border border-yellow-900/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_40px_rgba(255,215,0,0.03)]"
          >
            <div className="flex items-center gap-4 mb-6">
               <Sunrise className="w-8 h-8 text-yellow-500" />
               <h3 className="font-serif text-2xl font-bold text-white">Positive Energy & Motivation</h3>
            </div>
            <p className="text-gray-400 mb-6">Designed to help encourage:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["hope", "positivity", "emotional strength", "peaceful thinking", "confidence during stressful times"].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2 bg-black/40 border border-yellow-900/20 p-3 rounded-xl">
                   <Sparkles className="w-4 h-4 text-yellow-500/80 shrink-0" />
                   <span className="text-gray-300 text-sm font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Detailed Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-[#2A050B]/60 to-black/80 backdrop-blur-xl border border-yellow-900/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_40px_rgba(255,215,0,0.03)]"
          >
            <div className="flex items-center gap-4 mb-6">
               <DoorOpen className="w-8 h-8 text-yellow-500" />
               <h3 className="font-serif text-2xl font-bold text-white">Spiritual New Beginning Experience</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">Many devotees worship Lord Ganesh before new jobs, business opportunities, important life decisions, career growth, fresh beginnings, and financial recovery efforts.</p>
            <p className="text-gray-400 mb-4 text-sm mt-4">Because he symbolizes:</p>
            <div className="grid grid-cols-2 gap-4">
               {["wisdom", "positive direction", "obstacle removal", "growth & progress"].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2 text-yellow-500/90 text-sm font-medium">
                   <Sparkles className="w-4 h-4 shrink-0" /> {item}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Feature List row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
           {/* Access details */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-black/40 border border-white/5 p-8 md:p-10 rounded-3xl"
           >
              <div className="flex items-center gap-3 mb-6">
                 <Smartphone className="w-8 h-8 text-yellow-500" />
                 <h4 className="font-serif text-2xl font-bold text-white">Instant Digital Access</h4>
              </div>
              <p className="text-gray-400 mb-6 text-sm">Get immediate access after payment.</p>
              <ul className="space-y-3">
                 {[
                   {label: "Lifetime Access", icon: Infinity},
                   {label: "Mobile Friendly", icon: Smartphone},
                   {label: "Accessible Anytime", icon: CheckCircle2},
                   {label: "Easy Digital Format", icon: BookOpen},
                   {label: "Instant Download", icon: Package}
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium">
                     <item.icon className="w-5 h-5 text-yellow-500/70" /> {item.label}
                   </li>
                 ))}
              </ul>
           </motion.div>

           {/* Bonus details */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-gradient-to-br from-[#1c080b] to-black border border-yellow-900/40 p-8 md:p-10 rounded-3xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <Gift className="w-8 h-8 text-yellow-500" />
                 <h4 className="font-serif text-2xl font-bold text-white">Bonus Spiritual Experience</h4>
              </div>
              <p className="text-gray-400 mb-6 text-sm relative z-10">Also Includes:</p>
              <ul className="space-y-3 relative z-10">
                 {[
                   "Daily devotional discipline guidance",
                   "Spiritual focus practices",
                   "Peaceful routine support",
                   "Traditional devotional atmosphere",
                   "Positive mindset encouragement"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-gray-300 font-medium text-sm">
                     <Star className="w-4 h-4 text-yellow-500/80 shrink-0 mt-0.5" /> {item}
                   </li>
                 ))}
              </ul>
           </motion.div>
        </div>

        {/* Final Emotional Line */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }} 
           className="text-center max-w-4xl mx-auto bg-gradient-to-t from-black to-transparent p-10 rounded-[3rem] border-b-2 border-yellow-500/20 relative"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 border border-yellow-500/30">
            <Heart className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-medium italic drop-shadow-lg">
            “This is more than just a digital guide — <br className="hidden md:block"/>
            <span className="text-gold-gradient block mt-4">it is a peaceful spiritual experience created to inspire hope, positivity, faith, and inner strength during difficult phases of life.</span>”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
