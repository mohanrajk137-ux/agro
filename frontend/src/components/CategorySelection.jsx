import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Carrot, Apple } from 'lucide-react';

const CategorySelection = ({ lang, activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'grains', name: { en: 'GRAINS', ta: 'தானியங்கள்' }, icon: <Wheat size={48} />, subtitle: 'CEREAL NODES' },
    { id: 'vegetables', name: { en: 'VEGETABLES', ta: 'காய்கறிகள்' }, icon: <Carrot size={48} />, subtitle: 'ROOT SYSTEMS' },
    { id: 'fruits', name: { en: 'FRUITS', ta: 'பழங்கள்' }, icon: <Apple size={48} />, subtitle: 'ORGANIC MATRICES' }
  ];

  return (
    <div className="mb-32 stagger-in">
      <div className="flex items-center gap-6 mb-16">
        <div className="w-2 h-10 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)]"></div>
        <div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter futuristic-font leading-none mb-2">
            {lang === 'en' ? 'SYSTEM SECTORS' : 'கணினி துறைகள்'}
          </h2>
          <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">Agricultural Classification Engine</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -15, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative p-12 rounded-[3.5rem] border transition-all duration-700 flex flex-col items-center gap-8 group overflow-hidden ${
              activeCategory === cat.id 
                ? 'bg-emerald-500/10 border-emerald-500/60 shadow-[0_50px_100px_-20px_rgba(16,185,129,0.3)]' 
                : 'glass-panel border-white/5 hover:border-emerald-500/30'
            }`}
          >
            {/* Background Sensory Glow */}
            <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[100px] transition-opacity duration-1000 ${
              activeCategory === cat.id ? 'bg-emerald-500/30 opacity-100' : 'bg-emerald-500/10 opacity-0 group-hover:opacity-100'
            }`}></div>

            <div className={`p-9 rounded-[2.8rem] transition-all duration-1000 relative z-10 ${
              activeCategory === cat.id 
                ? 'bg-emerald-500 text-dark shadow-[0_25px_50px_rgba(16,185,129,0.5)] rotate-[360deg]' 
                : 'bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:border-emerald-500/40 group-hover:rotate-12'
            }`}>
              {cat.icon}
            </div>
            
            <div className="flex flex-col items-center relative z-10">
              <span className={`text-[10px] font-black tracking-[0.5em] mb-3 transition-colors duration-700 ${
                activeCategory === cat.id ? 'text-emerald-400' : 'text-slate-600'
              }`}>
                {cat.subtitle}
              </span>
              <span className={`text-3xl font-black tracking-tighter transition-colors duration-700 futuristic-font ${
                activeCategory === cat.id ? 'text-white' : 'text-slate-400'
              }`}>
                {cat.name[lang]}
              </span>
            </div>

            {/* Neural Sync Indicator */}
            {activeCategory === cat.id && (
              <div className="absolute bottom-6 flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: i * 0.2 + 's' }}></div>
                ))}
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
