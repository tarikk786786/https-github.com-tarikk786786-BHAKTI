import { motion } from 'motion/react';
import { Package, CheckCircle, FileText, Book, Sparkles, Infinity, Smartphone } from 'lucide-react';

export default function Deliverables() {
  const items = [
    { title: "Ganesh Mantra Guide", icon: FileText },
    { title: "Daily Ritual Instructions", icon: CheckCircle },
    { title: "Simple Chanting Steps", icon: Book },
    { title: "Devotional Focus Guide", icon: Sparkles },
    { title: "Positive Mindset Support", icon: Sparkles },
    { title: "Lifetime Digital Access", icon: Infinity },
    { title: "Mobile Friendly Format", icon: Smartphone },
    { title: "Instant Download", icon: Package }
  ];

  return (
    <section className="py-24 px-4 bg-[#2A050B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 md:p-14 shadow-[0_0_50px_rgba(255,215,0,0.1)] relative z-10 overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full flex items-center justify-center mb-6 border border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
          >
            <Package className="w-10 h-10 text-yellow-500 drop-shadow-md" />
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            What You <span className="text-gold-gradient">Receive</span>
          </h2>
          <p className="text-lg text-gray-400">Everything you need to begin your daily practice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-yellow-900/40 p-5 rounded-2xl hover:bg-black/60 hover:border-yellow-500/40 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors border border-yellow-900/30">
                <item.icon className="w-5 h-5 text-yellow-500 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all" />
              </div>
              <span className="text-gray-200 font-medium text-lg">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
