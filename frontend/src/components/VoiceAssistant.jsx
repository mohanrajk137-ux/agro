import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Zap, Activity, Cpu } from 'lucide-react';

const VoiceAssistant = ({ lang }) => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="absolute bottom-full left-0 mb-6 glass-card p-6 min-w-[280px] border-emerald-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Activity size={24} className="animate-pulse" />
                </div>
                <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-2xl animate-ping opacity-20"></div>
              </div>
              <div>
                <h5 className="font-black text-white text-xs uppercase tracking-widest">{lang === 'en' ? 'Neural Listening' : 'கேட்டுக்கொண்டிருக்கிறது'}</h5>
                <span className="text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.2em]">Voice_Sync_v2.0</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 font-medium italic">
              {lang === 'en' ? '"Show me Tomato diseases..."' : '"தக்காளி நோய்களைக் காண்பி..."'}
            </p>
            {/* Visualizer bars */}
            <div className="flex gap-1 h-8 items-end mt-4">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [4, Math.random() * 24 + 4, 4] }}
                  transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                  className="w-1.5 bg-emerald-500/40 rounded-full"
                ></motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsListening(!isListening)}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl group ${
          isListening 
            ? 'bg-emerald-500 text-dark shadow-emerald-500/40' 
            : 'bg-white/5 backdrop-blur-lg border border-white/10 text-emerald-400 hover:bg-white/10'
        }`}
      >
        <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none"></div>
        {isListening ? <Mic size={28} /> : <MicOff size={28} />}
        
        {/* Orbital Ring */}
        <div className={`absolute inset-[-4px] border-2 border-dashed border-emerald-500/20 rounded-[inherit] ${isListening ? 'animate-[spin_4s_linear_infinite]' : ''}`}></div>
      </motion.button>
    </div>
  );
};

export default VoiceAssistant;
