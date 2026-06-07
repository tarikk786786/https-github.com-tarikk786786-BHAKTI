import { motion } from 'motion/react';
import { Award, BookOpen, Users, Star } from 'lucide-react';

export default function Authority() {
  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
            Guided with Devotion and Experience
          </h2>
          <p className="text-gray-400 text-lg">Authentic spiritual roots focusing on simplicity, faith, and consistency.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-black/40 border border-yellow-900/30 p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.05)] backdrop-blur-sm">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-yellow-500/20 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-yellow-500/20 rounded-br-3xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-56 h-56 md:w-72 md:h-72 shrink-0 rounded-full border-4 border-yellow-600/40 p-3 relative shadow-[0_0_30px_rgba(255,215,0,0.15)] group"
          >
            <div className="absolute inset-0 rounded-full border border-yellow-400/20 animate-[spin_15s_linear_infinite]"></div>
            <img 
              src="https://i.ibb.co/B59KW74Q/614gc-MJJt-IL.jpg" 
              alt="Pandit Raghu Bharma" 
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2 tracking-wide">Pandit Raghu Bharma</h3>
            <p className="text-yellow-500 font-medium mb-8 text-lg md:text-xl tracking-wider">Spiritual Guide & Vedic Scholar</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.1)] shrink-0"><Award className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-1">40+ Years Experience</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Dedicated more than four decades to deep spiritual practice, Vedic learning, devotional guidance, and sacred ritual traditions rooted in Indian spirituality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.1)] shrink-0"><BookOpen className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-1">Sacred Banaras Tradition</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Born into a spiritually connected environment inspired by the ancient wisdom and devotional culture of Banaras, carrying forward traditional values with sincerity and discipline.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.1)] shrink-0"><Star className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-1">Ancient Ganesh Sadhana</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Known for practicing and sharing traditional Ganesh Sadhana methods focused on positivity, spiritual discipline, inner peace, and devotional guidance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.1)] shrink-0"><Users className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-1">Guided Thousands</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">For many years, devotees from different parts of India have sought spiritual guidance, peaceful rituals, and motivational support through his devotional teachings.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black/30 border border-yellow-900/30 p-6 rounded-2xl flex flex-col gap-4">
              <p className="text-gray-300 text-sm font-medium leading-relaxed italic border-l-2 border-yellow-600/40 pl-4">
                His mission is to spread hope, faith, positivity, discipline, and spiritual peace for people going through emotionally difficult and stressful phases of life.
              </p>
              <p className="text-gray-300 text-sm font-medium leading-relaxed italic border-l-2 border-yellow-600/40 pl-4">
                Believes true spirituality is built on sincerity, humility, devotion, discipline, and genuine service toward humanity.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-serif italic text-2xl text-gray-400 signature-font">Raghu Bharma</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
