import React from 'react';
import { motion } from 'framer-motion';
import { CROPS } from '../data/cropData';

const CropList = ({ lang, activeCategory, selectedCrop, setSelectedCrop }) => {
  const filteredCrops = CROPS.filter(crop => crop.category === activeCategory);

  return (
    <div className="mb-20 stagger-load">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-black flex items-center gap-4 text-white uppercase tracking-tighter">
          <div className="w-10 h-1 h-1 bg-emerald-500 rounded-full"></div>
          {lang === 'en' ? 'Intelligence Library' : 'நுண்ணறிவு நூலகம்'}
        </h2>
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
          {filteredCrops.length} {lang === 'en' ? 'Nodes Detected' : 'முனைகள் கண்டறியப்பட்டன'}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredCrops.map((crop, index) => (
          <motion.button
            key={crop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCrop(crop)}
            className={`group relative p-8 rounded-3xl border transition-all duration-500 text-center overflow-hidden ${
              selectedCrop?.id === crop.id
                ? 'bg-emerald-500 border-emerald-500 text-dark shadow-[0_20px_40px_rgba(16,185,129,0.2)]'
                : 'bg-white/5 border-white/5 hover:border-emerald-500/40 text-slate-400'
            }`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-500 ${
              selectedCrop?.id === crop.id ? 'bg-white/40' : 'bg-emerald-500/20 group-hover:bg-emerald-500/60'
            }`}></div>
            
            <span className={`block font-black uppercase tracking-widest text-xs mb-2 transition-colors ${
              selectedCrop?.id === crop.id ? 'text-dark' : 'text-slate-500 group-hover:text-emerald-400'
            }`}>
              {crop.id.slice(0, 4)}
            </span>
            
            <span className="relative z-10 block font-black uppercase tracking-tighter text-sm md:text-base">
              {crop.name[lang]}
            </span>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CropList;
