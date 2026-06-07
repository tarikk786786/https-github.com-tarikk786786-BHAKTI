import { motion } from 'motion/react';
import { Sun, Heart, Sparkles, CheckCircle, Clock } from 'lucide-react';

export default function SpiritualChallenge() {
  const practices = [
    { title: "Wake up with positive intention", desc: "Start the morning deciding to look for the good." },
    { title: "Chant the Ganesh mantra daily with faith", desc: "Create a focused, peaceful mental space." },
    { title: "Follow the peaceful spiritual routine", desc: "Embrace the consistency of devotion." },
    { title: "Focus on positivity and discipline", desc: "Train the mind to stay strong during challenges." },
    { title: "Avoid negative thinking and hopelessness", desc: "Let go of fear and trust the journey." }
  ];

  return (
    <section className="py-24 px-4 bg-[#2A050B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      
      {/* Cinematic Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.08)_0,transparent_70%)] pointer-events-none blur-[60px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full flex items-center justify-center mb-6 border border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
          >
            <Sun className="w-10 h-10 text-yellow-500 drop-shadow-md" />
          </motion.div>
          <span className="text-yellow-500 font-serif text-2xl mb-4 block animate-pulse">✨</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            <span className="text-gold-gradient">5-Day Spiritual Positivity Practice</span>
          </h2>
          <span className="text-yellow-500 font-serif text-2xl mt-4 mb-6 block animate-pulse">✨</span>
          <p className="text-gray-300 text-lg md:text-2xl font-medium italic font-serif leading-relaxed mb-4">
            A simple devotional routine created to help you reconnect with:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-yellow-600/90 font-medium md:text-lg mb-8 uppercase tracking-widest text-sm">
             <span className="flex items-center gap-1"><span className="text-lg">🕉</span> peace</span> |
             <span className="flex items-center gap-1"><span className="text-lg">🕉</span> positivity</span> |
             <span className="flex items-center gap-1"><span className="text-lg">🕉</span> confidence</span> |
             <span className="flex items-center gap-1"><span className="text-lg">🕉</span> discipline</span> |
             <span className="flex items-center gap-1"><span className="text-lg">🕉</span> spiritual focus</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-black/40 backdrop-blur-xl border border-yellow-900/40 p-8 md:p-10 rounded-[2rem] shadow-inner relative overflow-hidden group">
               <h3 className="font-serif text-2xl font-bold text-white mb-6 border-b border-yellow-900/30 pb-4">
                 <span className="text-yellow-500 text-2xl mr-2">🪔</span> The 5-Day Practice
               </h3>
               <p className="text-gray-400 mb-6 italic">For the next 5 days:</p>
               <ul className="space-y-4 mb-8">
                 {practices.map((p, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <Sparkles className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                     <div>
                       <span className="text-gray-200 font-medium block">{p.title}</span>
                     </div>
                   </li>
                 ))}
               </ul>
               <p className="text-gray-400 italic text-sm border-l-2 border-yellow-600/30 pl-4 py-2 mt-4">
                 Many devotees believe that sincere spiritual practice can help calm the mind, reduce emotional heaviness, create positive energy, inspire confidence, and help people feel mentally lighter and more hopeful.
               </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gradient-to-br from-[#1c080d] to-black border border-yellow-900/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_40px_rgba(255,215,0,0.03)] h-full flex flex-col justify-center"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-500 text-3xl">🌅</span> What Many Devotees Experience
              </h3>
              <p className="text-gray-400 mb-6 font-medium italic">People often describe feeling:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="flex items-center gap-3 bg-black/40 border border-yellow-900/20 p-4 rounded-xl hover:border-yellow-500/30 transition-colors">
                    <Sparkles className="w-5 h-5 text-yellow-500/80 shrink-0" />
                    <span className="text-gray-200 font-medium">Calmer</span>
                 </div>
                 <div className="flex items-center gap-3 bg-black/40 border border-yellow-900/20 p-4 rounded-xl hover:border-yellow-500/30 transition-colors">
                    <Sparkles className="w-5 h-5 text-yellow-500/80 shrink-0" />
                    <span className="text-gray-200 font-medium">More focused</span>
                 </div>
                 <div className="flex items-center gap-3 bg-black/40 border border-yellow-900/20 p-4 rounded-xl hover:border-yellow-500/30 transition-colors">
                    <Sparkles className="w-5 h-5 text-yellow-500/80 shrink-0" />
                    <span className="text-gray-200 font-medium">Emotionally stronger</span>
                 </div>
                 <div className="flex items-center gap-3 bg-black/40 border border-yellow-900/20 p-4 rounded-xl hover:border-yellow-500/30 transition-colors">
                    <Sparkles className="w-5 h-5 text-yellow-500/80 shrink-0" />
                    <span className="text-gray-200 font-medium">Spiritually peaceful</span>
                 </div>
                 <div className="flex items-center gap-3 bg-black/40 border border-yellow-900/20 p-4 rounded-xl hover:border-yellow-500/30 transition-colors sm:col-span-2">
                    <Sparkles className="w-5 h-5 text-yellow-500/80 shrink-0" />
                    <span className="text-gray-200 font-medium">More positive toward life</span>
                 </div>
              </div>

              <div className="mt-auto border-t border-yellow-900/40 pt-8">
                 <h4 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-3">
                   <Heart className="w-6 h-6 text-yellow-500" /> Our Spiritual Promise
                 </h4>
                 <p className="text-gray-300 font-sans leading-relaxed text-sm">
                   This guide is created with devotion, sincerity, and positive intention to help people create a peaceful daily spiritual routine during difficult life phases.
                 </p>
                 <p className="text-yellow-500/90 font-serif italic mt-4 text-base md:text-lg">
                   ✨ Begin your 5-day spiritual journey today with faith, positivity, and the blessings of Lord Ganesh.
                 </p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
