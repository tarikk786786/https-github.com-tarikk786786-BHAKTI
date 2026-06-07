import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const NAMES = ["Rajesh M.", "Priya S.", "Amit D.", "Neha R.", "Vikram K.", "Anjali V.", "Suresh P.", "Kiran T."];
const LOCATIONS = ["Delhi", "Mumbai", "Bangalore", "Pune", "Jaipur", "Ahmedabad", "Chennai", "Kolkata"];

export default function LivePurchasePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: "", location: "", time: "" });

  useEffect(() => {
    const triggerPopup = () => {
      const isNewDevotee = Math.random() > 0.5;
      const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      
      let message = "";
      let subMessage = "";
      
      if (isNewDevotee) {
        message = `New devotee joined from ${location}`;
        const time = Math.floor(Math.random() * 15) + 1;
        subMessage = `Started their spiritual journey ${time} min ago`;
      } else {
        message = `Someone from ${location} just accessed the guide`;
        subMessage = "Instant Digital Access Sent";
      }
      
      setData({ name: message, location: "", time: subMessage });
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(triggerPopup, 8000);
    
    const interval = setInterval(() => {
      if (!isVisible && Math.random() > 0.3) {
        triggerPopup();
      }
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 left-4 z-40 bg-black/80 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-[300px]"
        >
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex flex-shrink-0 items-center justify-center border border-yellow-500/40 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            <CheckCircle2 className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <p className="text-gray-200 text-sm font-medium">
              <span className="font-bold text-white">{data.name}</span>
            </p>
            <p className="text-gray-400 text-xs mt-1">
              <span className="text-yellow-500/80">{data.time}</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
