import { motion } from 'motion/react';
import { Heart, Sparkles, Sunrise } from 'lucide-react';

export default function SpiritualPromise() {
  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      
      {/* Warm Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-5xl h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.06)_0,transparent_60%)] pointer-events-none blur-[60px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-[#2A050B]/60 to-black/80 backdrop-blur-xl border border-yellow-500/20 p-10 md:p-16 rounded-[3rem] shadow-[0_0_50px_rgba(255,215,0,0.05)] overflow-hidden group"
        >
          {/* Animated Gold Glowing Border */}
          <div className="absolute inset-0 border border-yellow-500/10 rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,215,0,0.3)_360deg)] opacity-30"></div>
          <div className="absolute inset-[2px] bg-gradient-to-b from-[#1c080b] to-[#0A0002] rounded-[2.9rem] z-0"></div>

          <div className="relative z-10">
            <div className="inline-flex w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full items-center justify-center mb-8 border border-yellow-500/30">
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8 tracking-wide">
              Our Sincere <span className="text-gold-gradient">Spiritual Promise</span>
            </h2>

            <div className="space-y-8 text-gray-300 text-lg md:text-2xl font-serif italic leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              <p>
                “We created this spiritual guide with honesty, devotion, and positive intention for people going through difficult financial and emotional phases.”
              </p>
              
              <div className="flex items-center justify-center gap-4 opacity-50">
                <div className="w-12 h-[1px] bg-yellow-500/50"></div>
                <Sunrise className="w-5 h-5 text-yellow-500" />
                <div className="w-12 h-[1px] bg-yellow-500/50"></div>
              </div>

              <p>
                “Our mission is not fear-based selling — our mission is to spread positivity, faith, peace, discipline, and hope.”
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="font-[Cedarville_Cursive,cursive] text-4xl text-yellow-500/80 -rotate-3 hover:text-yellow-400 transition-colors cursor-default drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                With devotion and respect
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
