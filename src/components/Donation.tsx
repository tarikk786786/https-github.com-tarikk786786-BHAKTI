import { motion } from 'motion/react';
import { HandCoins, Flower2 } from 'lucide-react';

export default function Donation() {
  return (
    <section className="py-24 px-4 bg-[#210408] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-yellow-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-black/80 to-[#1A0307] border border-yellow-800/40 p-8 md:p-14 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80')] opacity-5 bg-cover mix-blend-screen mix-blend-overlay pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 relative z-10"
          >
            <div className="w-20 h-20 bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/30 shadow-[0_0_30px_rgba(255,215,0,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-500/20 group-hover:bg-yellow-500/40 transition-colors duration-500"></div>
              <Flower2 className="w-10 h-10 text-yellow-500 group-hover:rotate-180 transition-transform duration-1000 ease-in-out relative z-10" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Every Contribution <br className="hidden md:block"/>
              <span className="text-gold-gradient drop-shadow-lg">Supports Kindness</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed border-l-4 border-yellow-600/50 pl-8 py-2">
              <p className="font-medium">“A portion of contributions supports devotional seva and food support efforts for needy people.”</p>
              <p className="text-gray-400 text-base md:text-lg">Taking this step is not just about personal discipline; it represents faith, devotion, positivity, and a step towards a greater collective good.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 relative group"
          >
            {/* Image Glow */}
            <div className="absolute inset-0 bg-yellow-500/30 blur-[60px] group-hover:bg-yellow-500/50 transition-all rounded-[3rem] pointer-events-none"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-yellow-600/30 aspect-[4/5] shadow-[0_0_40px_rgba(255,215,0,0.15)] bg-[#1A0307]">
              <img 
                src="https://i.ibb.co/4w9h1MTz/msid-103755479.jpg" 
                alt="Temple Donation and Seva" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 flex items-center gap-5 bg-black/50 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 border border-yellow-500/30">
                  <HandCoins className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-base text-white font-bold tracking-wide">Annadaan Sankalp</p>
                  <p className="text-sm text-yellow-500/90 font-medium">Supporting temple activities and daily food distribution.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
