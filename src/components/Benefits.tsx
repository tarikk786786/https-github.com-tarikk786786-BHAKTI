import { motion } from 'motion/react';
import { Target, Shield, Sunrise, Brain, Heart, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Brain, title: "Encourages peaceful mindset", desc: "Soothes the mind and reduces restless thoughts." },
    { icon: Target, title: "Supports daily discipline", desc: "Builds a foundation of consistent positive habits." },
    { icon: Sunrise, title: "Helps reduce mental heaviness", desc: "Brings clarity during stressful financial phases." },
    { icon: Heart, title: "Inspires hope and positivity", desc: "Replaces fear and anxiety with faith and inner strength." },
    { icon: Shield, title: "Creates calm spiritual routine", desc: "A peaceful grounding practice to start your day." },
    { icon: CheckCircle2, title: "Beginner friendly guidance", desc: "Simple and respectful instructions for anyone." },
    { icon: Smartphone, title: "Mobile accessible anytime", desc: "Carry your devotional practice securely on your phone." },
    { icon: Sparkles, title: "Short daily devotional practice", desc: "Only takes a few minutes, but changes your whole day." }
  ];

  return (
    <section className="py-24 px-4 bg-[#1A0307] bg-[radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.05)_0,transparent_50%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            The Power of <span className="text-gold-gradient">Sacred Devotion</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the profound mental and spiritual benefits of this ancient practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/30 backdrop-blur-md border border-yellow-900/40 p-8 rounded-3xl hover:border-yellow-500/50 hover:-translate-y-2 hover:bg-black/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all border border-yellow-500/20">
                <b.icon className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-200 mb-3">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
