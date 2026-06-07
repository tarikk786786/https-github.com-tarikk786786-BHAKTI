import { motion } from 'motion/react';
import { Sun, Heart, Sparkles, CheckCircle, Clock } from 'lucide-react';

export default function SpiritualChallenge() {
  const days = [
    { day: "Day 1", title: "Establishing Peace", desc: "Setting the foundation with a calm mind and focused intention." },
    { day: "Day 2", title: "Building Consistency", desc: "Creating a small daily space for gratitude and prayer." },
    { day: "Day 3", title: "Removing Negativity", desc: "Letting go of stress and embracing spiritual positivity." },
    { day: "Day 4", title: "Inner Strength", desc: "Finding emotional balance during difficult moments." },
    { day: "Day 5", title: "Divine Connection", desc: "Experiencing the mental clarity of regular devotional discipline." }
  ];

  return (
    <section className="py-24 px-4 bg-[#210408] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>
      
      {/* Cinematic Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0,transparent_70%)] pointer-events-none blur-[50px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full flex items-center justify-center mb-6 border border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
          >
            <Sun className="w-10 h-10 text-yellow-500 drop-shadow-md" />
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            The 5-Day Spiritual <span className="text-gold-gradient">Positivity Challenge</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium italic font-serif leading-relaxed mb-4">
            "Give yourself 5 days of devotion, discipline, and positivity."
          </p>
          <p className="text-yellow-600/80 uppercase tracking-widest text-sm font-bold">A journey to emotional calmness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-xl border border-yellow-900/40 p-8 rounded-3xl shadow-[0_0_30px_rgba(255,215,0,0.05)] text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                “This is not about shortcuts — it is about consistency, peace, and faith. Take a few minutes daily for gratitude, prayer, and emotional calmness.”
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-200">5 days of calm spiritual practice</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-200">Transform your mindset</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-200">Embrace devotional discipline</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-yellow-500/30 before:to-transparent">
            {days.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-yellow-500 bg-[#1A0307] text-yellow-500 shadow-[0_0_10px_rgba(255,215,0,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-sm">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/40 backdrop-blur-sm border border-yellow-900/30 p-5 rounded-2xl shadow-sm hover:border-yellow-500/40 hover:bg-black/60 transition-all">
                  <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2">
                    {item.title} <Sparkles className="w-4 h-4 text-yellow-500 opacity-50" />
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
