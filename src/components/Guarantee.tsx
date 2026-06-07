import { motion } from 'motion/react';
import { ShieldCheck, HeartPulse, CheckCircle2, AlertCircle, HeadphonesIcon } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.08)_0,transparent_60%)] pointer-events-none"></div>
      
      {/* Floating Diya Lamps - Animated SVG simple representation */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden lg:block"
      >
        <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">🪔</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] hidden lg:block"
      >
        <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">🪔</span>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-black/60 backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_50px_rgba(255,215,0,0.08)] overflow-hidden p-1"
        >
          {/* Animated Gold Border using gradient spin */}
          <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,215,0,0.6)_360deg)] opacity-40"></div>
          
          <div className="relative h-full w-full bg-gradient-to-b from-[#1c080d] to-black rounded-[2.4rem] p-8 md:p-14 z-10 overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80')] opacity-[0.02] bg-cover mix-blend-screen pointer-events-none"></div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full mb-8 relative">
                <div className="absolute inset-0 border-2 border-yellow-500/40 rounded-full animate-[ping_3s_infinite] opacity-30"></div>
                <div className="absolute inset-0 border border-yellow-500/20 rounded-full"></div>
                <ShieldCheck className="w-12 h-12 text-yellow-500 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
              </div>

              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-md">
                7-Day Spiritual <span className="text-gold-gradient">Satisfaction Promise</span>
              </h2>

              <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium font-serif mb-10">
                “Follow the guide sincerely with faith and consistency. If you genuinely feel the product did not provide the devotional value and spiritual experience described, contact support within 7 days.”
              </p>
              
              {/* Animated Trust Seal */}
              <div className="flex items-center justify-center mb-10">
                <div className="bg-yellow-500/10 border-2 border-yellow-500/30 px-6 py-3 rounded-full flex items-center gap-3 relative overflow-hidden group">
                   <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-30 -translate-x-full animate-[shine_4s_infinite]"></div>
                   <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                   <span className="text-white font-bold tracking-widest uppercase text-sm">Authentic Devotional Guarantee</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto bg-black/40 p-6 md:p-8 rounded-3xl border border-yellow-900/40 shadow-inner">
                <div className="flex items-start gap-4">
                  <HeartPulse className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Authentic Devotion</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">For spiritual motivation, positivity, and devotional discipline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Honest Intentions</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">No fake miracle claims or guaranteed financial outcomes.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6 items-center border-t border-white/5 pt-8">
                <div className="flex items-center gap-2 bg-green-900/20 border border-green-800/40 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/>
                  <span className="text-sm text-gray-300 font-medium tracking-wide">100% Secure UPI Payment</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-900/20 border border-yellow-800/40 px-4 py-2 rounded-full">
                  <HeadphonesIcon className="w-5 h-5 text-yellow-500 shrink-0"/>
                  <span className="text-sm text-gray-300 font-medium tracking-wide">Live WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
