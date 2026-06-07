import { motion } from 'motion/react';
import { Star, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const allTestimonials = [
    { name: "Rajesh Kumar", location: "Delhi", text: "This guide helped me stay calm during stressful times. The daily routine brought structure to my life.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
    { name: "Priya Sahu", location: "Bhubaneswar", text: "I feel more positive and disciplined now. Taking a few minutes every morning gave me deep peace.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
    { name: "Amit Sharma", location: "Mumbai", text: "Simple and peaceful spiritual routine. I used to wake up stressed, but now I start my day with faith.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
    { name: "Neha Patel", location: "Ahmedabad", text: "Very respectful and easy to follow. It genuinely helped me reduce negative thinking.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
    { name: "Vivek Verma", location: "Lucknow", text: "Gave me emotional peace and motivation. It reminds you to stay grounded and keep doing your daily karma.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
    { name: "Suman Mishra", location: "Odisha", text: "I started feeling mentally lighter. It helped me find emotional balance while dealing with family pressures.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" }
  ];

  // Duplicate for smooth infinite scrolling
  const testimonials = [...allTestimonials, ...allTestimonials, ...allTestimonials];

  return (
    <section className="py-24 px-4 bg-[#1A0307] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#1A0307] to-transparent z-10 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#1A0307] to-transparent z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto mb-16 text-center relative z-20">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
          Real User <span className="text-gold-gradient">Experiences</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
           <div className="flex flex-col items-center">
              <span className="text-yellow-500 text-2xl mb-1">⭐</span>
              <span className="text-white font-bold text-lg">4.9/5 Average</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">Experience</span>
           </div>
           <div className="w-px h-12 bg-yellow-900/40 hidden md:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-yellow-500 text-2xl mb-1">🪔</span>
              <span className="text-white font-bold text-lg">Thousands</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">Devotional Downloads</span>
           </div>
           <div className="w-px h-12 bg-yellow-900/40 hidden md:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-yellow-500 text-2xl mb-1">🙏</span>
              <span className="text-white font-bold text-lg">Trusted Across India</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">By Devotees</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full -rotate-2">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-x-hidden group">
          <motion.div
            className="flex gap-6 whitespace-nowrap min-w-max group-hover:[animation-play-state:paused]"
            animate={{ x: [0, -2000] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative flex overflow-x-hidden group mt-4">
          <motion.div
            className="flex gap-6 whitespace-nowrap min-w-max group-hover:[animation-play-state:paused]"
            animate={{ x: [-2000, 0] }}
            transition={{
              repeat: Infinity,
              duration: 55,
              ease: "linear",
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-yellow-900/40 p-6 md:p-8 rounded-3xl w-[350px] md:w-[400px] inline-flex flex-col whitespace-normal shrink-0 hover:border-yellow-500/50 hover:bg-[#2A050B]/80 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.05)] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors"></div>
      
      <div className="flex justify-between items-start mb-6 align-top">
        <div className="flex gap-1">
          {[...Array(5)].map((_, j) => (
            <motion.div 
              key={j} 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: j * 0.1 }}
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-green-900/30 text-green-400 px-3 flex-shrink-0 py-1.5 rounded-full border border-green-800/50">
          <CheckCircle className="w-3.5 h-3.5" />
          <span className="text-[10px] uppercase tracking-wider font-bold">Verified Devotee</span>
        </div>
      </div>
      
      <p className="text-yellow-500/80 text-xs font-bold uppercase tracking-wider mb-3">Spiritual Experience Shared</p>
      <p className="text-gray-300 mb-8 flex-grow font-serif italic text-lg md:text-xl leading-relaxed text-shadow-sm">"{testimonial.text}"</p>
      
      <div className="mt-auto border-t border-yellow-900/30 pt-5 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-yellow-600/50 object-cover shadow-lg" loading="lazy" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
          </div>
          <div>
            <p className="font-bold text-gray-100 text-base">{testimonial.name}</p>
            <p className="text-xs text-yellow-500/80 font-medium tracking-wide uppercase">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
