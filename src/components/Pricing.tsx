import { motion } from 'motion/react';
import { Download, ShieldCheck, Phone, Smartphone, BadgeCheck } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#2A050B] bg-mandala relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.1)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#1A0307] to-black border-2 border-yellow-500/80 shadow-[0_0_80px_rgba(255,215,0,0.25)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group"
        >
          {/* Animated glow ray behind card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-500/50 text-yellow-500 font-bold text-sm px-6 py-2 rounded-full mb-8 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            <span className="text-lg">🔥</span> LIMITED TIME SPIRITUAL OFFER
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">Sacred Digital Access</h2>
          <p className="text-gray-400 mb-8 font-medium tracking-wide">One-time payment. Lifetime access.</p>

          <div className="flex justify-center items-end gap-4 mb-8">
            <span className="text-2xl text-gray-500 line-through decoration-red-500/60 decoration-2">₹1999</span>
            <span className="text-6xl md:text-7xl font-bold text-gold-gradient drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">₹299</span>
          </div>

          <div className="space-y-5 mb-10 text-left bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-yellow-500/30 shadow-[inset_0_0_20px_rgba(255,215,0,0.05)]">
            <div className="flex items-center gap-4"><div className="p-2 bg-yellow-500/10 rounded-lg"><Download className="w-5 h-5 text-yellow-500"/></div><span className="text-gray-200 font-medium text-lg">Instant Download</span></div>
            <div className="flex items-center gap-4"><div className="p-2 bg-yellow-500/10 rounded-lg"><ShieldCheck className="w-5 h-5 text-yellow-500"/></div><span className="text-gray-200 font-medium text-lg">Secure UPI Payment</span></div>
            <div className="flex items-center gap-4"><div className="p-2 bg-yellow-500/10 rounded-lg"><BadgeCheck className="w-5 h-5 text-yellow-500"/></div><span className="text-gray-200 font-medium text-lg">Lifetime Access</span></div>
            <div className="flex items-center gap-4"><div className="p-2 bg-yellow-500/10 rounded-lg"><Phone className="w-5 h-5 text-yellow-500"/></div><span className="text-gray-200 font-medium text-lg">WhatsApp Support</span></div>
            <div className="flex items-center gap-4"><div className="p-2 bg-yellow-500/10 rounded-lg"><Smartphone className="w-5 h-5 text-yellow-500"/></div><span className="text-gray-200 font-medium text-lg">Beginner Friendly</span></div>
          </div>

          <motion.a
            href="https://upi.pe/princetarikislam-4@oaxis/299.00?pn=Ganesh+Tool"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-[length:200%_auto] animate-[gradient_2s_ease_infinite] text-[#1A0307] font-bold text-2xl py-5 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:shadow-[0_0_50px_rgba(234,179,8,0.8)] transition-all mb-8 relative overflow-hidden border border-yellow-300"
          >
            <span className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 -translate-x-full animate-[shine_3s_infinite]"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              GET INSTANT DIVINE ACCESS <ShieldCheck className="w-6 h-6" />
            </span>
          </motion.a>

          <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-widest">100% Secure Checkout</p>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <span className="bg-black/50 border border-white/10 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-300 font-medium shadow-sm hover:border-yellow-500/30 transition-colors">Google Pay</span>
            <span className="bg-black/50 border border-white/10 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-300 font-medium shadow-sm hover:border-yellow-500/30 transition-colors">PhonePe</span>
            <span className="bg-black/50 border border-white/10 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-300 font-medium shadow-sm hover:border-yellow-500/30 transition-colors">Paytm</span>
            <span className="bg-black/50 border border-white/10 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-300 font-medium tracking-wide shadow-sm hover:border-yellow-500/30 transition-colors">BHIM UPI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
