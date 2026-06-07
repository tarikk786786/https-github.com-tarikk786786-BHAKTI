import { motion } from 'motion/react';
import { CreditCard, Download, Activity, Sun } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: CreditCard, title: "Secure Payment", desc: "Complete the simple, secure UPI checkout." },
    { icon: Download, title: "Instant Access", desc: "Receive immediate digital access securely." },
    { icon: Activity, title: "Daily Devotion", desc: "Follow the simple, guided daily devotional practice." },
    { icon: Sun, title: "Build Peace", desc: "Build peace, focus, and spiritual consistency." }
  ];

  return (
    <section className="py-24 px-4 bg-[#1A0307]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400">A clean, simple 4-step path to your spiritual journey.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-black/50 backdrop-blur-md border border-yellow-900/40 p-8 rounded-3xl text-center shadow-xl relative group hover:-translate-y-2 hover:border-yellow-500/50 transition-all duration-500"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm border-4 border-[#1A0307] shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                  {i + 1}
                </div>
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full flex items-center justify-center mb-6 border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(255,215,0,0.05)]">
                  <step.icon className="w-8 h-8 text-yellow-500/90 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
