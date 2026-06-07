import { motion } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function AmbientMusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // using a placeholder meditative sound
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_f84391eef4.mp3?filename=om-chanting-111003.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed left-6 bottom-6 z-40">
      <motion.button
        onClick={toggleMusic}
        className="relative w-12 h-12 bg-black/60 backdrop-blur-xl border border-yellow-500/40 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.1)] group transition-all"
        whileHover={{ scale: 1.1, borderColor: "rgba(234, 179, 8, 0.8)" }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`absolute inset-0 bg-yellow-500/10 rounded-full blur-md transition-all ${isPlaying ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100'}`}></div>
        {isPlaying ? (
          <Volume2 className="w-5 h-5 relative z-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]" />
        ) : (
          <VolumeX className="w-5 h-5 relative z-10 text-yellow-500/70 group-hover:text-yellow-400" />
        )}
      </motion.button>
    </div>
  );
}
