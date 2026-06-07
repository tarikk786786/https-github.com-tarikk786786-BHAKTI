import { motion } from 'motion/react';
import { ShieldCheck, CalendarClock, HeartHandshake, CreditCard, Sparkles } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1A0307] to-black relative overflow-hidden flex items-center justify-center min-h-[800px]">
      {/* Cinematic Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.15)_0,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ boxShadow: "0 0 80px rgba(255, 215, 0, 0.15)" }}
          className="relative rounded-[2.5rem] bg-black/40 backdrop-blur-3xl border border-yellow-500/30 shadow-[0_0_50px_rgba(255,215,0,0.05)] overflow-hidden p-1 transition-shadow duration-500"
        >
          {/* Subtle inner background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A050B]/80 to-black/90 pointer-events-none rounded-[2.4rem]"></div>

          <div className="relative h-full w-full rounded-[2.4rem] p-8 md:p-14 z-10 flex flex-col items-center">
            
            {/* Animated 100% Trust Seal */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 mb-10 group"
            >
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="absolute inset-2 border border-yellow-500/60 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#1A0307] to-yellow-900/40 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-30 -translate-x-full animate-[shine_3s_infinite_ease-in-out]"></div>
                <div className="text-center flex flex-col items-center">
                  <ShieldCheck className="w-10 h-10 text-yellow-500 mb-1 drop-shadow-md" />
                  <span className="font-bold text-yellow-500 text-xs tracking-widest uppercase">100% Secure</span>
                </div>
              </div>
              <div className="absolute -inset-1 border border-yellow-500/30 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
            </motion.div>

            {/* Typography */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Our Unwavering<br className="hidden md:block"/>
                <span className="text-gold-gradient">₹50,000 Miracle Guarantee</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-6">
                “If no miracle happens in your life, we give you ₹50,000 from our own pocket.”
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-sans font-light px-4">
                We have ultimate faith and absolute confidence in this spiritual practice. If you follow this devotional guide sincerely and do not experience a positive miracle, we will personally transfer ₹50,000 to you. Just contact us directly at <span className="text-yellow-500 font-bold whitespace-nowrap">+91 9114411026</span>.
              </p>
            </div>

            {/* Inner Guarantee Box */}
            <div className="w-full bg-[#110103]/80 border border-yellow-900/50 rounded-[2rem] p-6 md:p-10 mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 border border-yellow-500/20">
                    <CalendarClock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-white font-serif font-bold text-xl mb-3">The Practice</h4>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Follow the daily rituals and chanting with pure soul and faith.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 border border-yellow-500/20">
                    <HeartHandshake className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-white font-serif font-bold text-xl mb-3">The Promise</h4>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    If you do not experience a positive breakthrough or miracle in your life...
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 border border-yellow-500/20">
                    <CreditCard className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-white font-serif font-bold text-xl mb-3">Our Word</h4>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Contact us at <span className="text-yellow-500 font-semibold">+91 9114411026</span>. We will personally hand you ₹50,000 as our compensation.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Trust Text */}
            <div className="text-center flex flex-col items-center justify-center gap-2 mt-4 opacity-80">
              <Sparkles className="w-4 h-4 text-yellow-500/50" />
              <p className="font-serif italic text-gray-400 text-sm md:text-base tracking-wide">
                “A genuine spiritual guarantee built on honesty, transparency, and respect for our devotees.”
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

