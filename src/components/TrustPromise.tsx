import { motion } from 'motion/react';
import { ShieldCheck, Download, HeartHandshake, AlertCircle, IndianRupee, Lock, UserCheck, MessageCircle } from 'lucide-react';

export default function TrustPromise() {
  const counters = [
    { value: "10,000+", label: "Devotees Guided" },
    { value: "24/7", label: "Human Support" },
    { value: "Instant", label: "Digital Access" },
    { value: "100%", label: "Secure Checkout" }
  ];

  const trustBadges = [
    { icon: Lock, text: "Secure UPI Checkout" },
    { icon: Download, text: "Instant Digital Access" },
    { icon: MessageCircle, text: "Human WhatsApp Support" },
    { icon: UserCheck, text: "Trusted by Devotees" },
    { icon: ShieldCheck, text: "Safe & Encrypted Payment" },
    { icon: HeartHandshake, text: "Respectful Spiritual Guidance" }
  ];

  return (
    <section className="py-24 px-4 bg-[#1A0307] border-y border-yellow-900/20 relative z-10 overflow-hidden">
      {/* Temple Silhouette / Subtle Pattern background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80')] opacity-[0.02] mix-blend-plus-lighter pointer-events-none"></div>
      
      {/* Luxury Cinematic Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.06)_0,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-transparent flex items-center justify-center mb-8 border border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
              <ShieldCheck className="w-8 h-8 text-yellow-500" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Built with <span className="text-gold-gradient">Devotion</span>, <br />
              Designed with <span className="text-gold-gradient">Honesty</span>.
            </h2>
            
            <div className="space-y-6 mb-10 border-l-2 border-yellow-600/30 pl-6">
              <p className="text-xl text-gray-300 font-serif italic">
                "Our mission is not to sell miracles — but to support devotion and positivity."
              </p>
              <p className="text-lg text-gray-400">
                "Your trust is more valuable than any transaction. Secure payments. Respectful guidance. Human support."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {counters.map((count, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-sm border border-yellow-900/30 rounded-2xl p-4 flex flex-col justify-center items-center text-center shadow-inner hover:bg-black/60 transition-colors">
                  <span className="text-3xl font-bold text-white drop-shadow-md">{count.value}</span>
                  <span className="text-xs uppercase tracking-wider text-yellow-500 font-medium mt-1">{count.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {trustBadges.map((badge, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-black/80 to-[#1A0307] backdrop-blur-md border border-yellow-900/40 p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.02)] flex flex-col items-start gap-4 hover:border-yellow-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                  <badge.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-gray-200 font-medium text-sm md:text-base leading-snug">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
