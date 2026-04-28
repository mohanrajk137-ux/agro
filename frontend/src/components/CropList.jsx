import React from 'react';
import { motion } from 'framer-motion';
import { CROPS } from '../data/cropData';

const CropList = ({ lang, activeCategory, selectedCrop, setSelectedCrop }) => {
  const filteredCrops = CROPS.filter(crop => crop.category === activeCategory);

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-400">
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
        {lang === 'en' ? 'Available Crops' : 'கிடைக்கும் பயிர்கள்'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {filteredCrops.map((crop) => (
          <motion.button
            key={crop.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCrop(crop)}
            className={`p-5 rounded-2xl border-2 transition-all text-center relative overflow-hidden group ${
              selectedCrop?.id === crop.id
                ? 'bg-emerald-500 border-emerald-500 text-dark font-black shadow-lg shadow-emerald-500/20'
                : 'bg-dark-accent border-white/5 hover:border-emerald-500/30 text-slate-400'
            }`}
          >
            <span className="relative z-10 uppercase tracking-tighter text-xs md:text-sm">{crop.name[lang]}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CropList;
