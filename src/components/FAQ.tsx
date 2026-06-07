import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "Is this beginner friendly?", a: "Yes, absolutely. The digital package includes easy-to-follow, step-by-step instructions that anyone can understand and practice, regardless of their prior spiritual experience." },
    { q: "Is this digital or physical?", a: "This is a 100% digital product. You will receive instant access to download the PDF guide to your mobile or computer immediately after checkout." },
    { q: "Is payment secure?", a: "Yes, our payment gateway is 100% secure and encrypted. We support all major UPI apps like Google Pay, PhonePe, and Paytm." },
    { q: "How will I receive access?", a: "Once your payment is successful, you will be redirected to the download page. You will also have lifetime digital access." },
    { q: "How long should I practice daily?", a: "We recommend dedicating just 5 to 10 minutes daily in a quiet space to experience mental peace and positivity." },
    { q: "Can anyone use this guide?", a: "Yes. While rooted in ancient spiritual tradition, the core focus is on mindset, devotional discipline, and inner calm. Anyone seeking mental strength and positivity can practice it with an open heart." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#1A0307]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-yellow-900/30 rounded-2xl bg-black/40 overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-gray-200">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-yellow-500 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
