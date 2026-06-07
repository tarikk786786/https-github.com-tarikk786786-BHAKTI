import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const quotes = [
  {
    sanskrit: "शान्तिः शान्तिः शान्तिः",
    translation: "May there be peace in me, peace in my environment, and peace in the universe.",
    author: "Ancient Vedic Blessing"
  },
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    translation: "You have the right to perform your prescribed duty, but you are not entitled to the fruits of action.",
    author: "Bhagavad Gita"
  },
  {
    sanskrit: "तमसो मा ज्योतिर्गमय",
    translation: "Lead me from darkness to light, from ignorance to truth.",
    author: "Upanishads"
  }
];

export default function SpiritualQuotes() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden flex items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0,transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <Quote className="w-12 h-12 text-yellow-600/50 mb-8" />
          
          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-yellow-500 mb-6 drop-shadow-lg tracking-wide leading-relaxed">
            {quotes[current].sanskrit}
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium italic max-w-3xl leading-relaxed mb-8">
            "{quotes[current].translation}"
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-yellow-500/50"></div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-600 font-bold">{quotes[current].author}</p>
            <div className="w-12 h-[1px] bg-yellow-500/50"></div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current ? 'bg-yellow-500 w-8' : 'bg-gray-700'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
