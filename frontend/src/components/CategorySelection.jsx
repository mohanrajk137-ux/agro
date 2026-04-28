import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Carrot, Apple } from 'lucide-react';

const CategorySelection = ({ lang, activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'grains', name: { en: 'Grains', ta: 'தானியங்கள்' }, icon: <Wheat size={32} /> },
    { id: 'vegetables', name: { en: 'Vegetables', ta: 'காய்கறிகள்' }, icon: <Carrot size={32} /> },
    { id: 'fruits', name: { en: 'Fruits', ta: 'பழங்கள்' }, icon: <Apple size={32} /> }
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
        <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
        {lang === 'en' ? 'Explore Categories' : 'வகைகளை ஆராயுங்கள்'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 group overflow-hidden ${
              activeCategory === cat.id 
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                : 'bg-white/5 border-transparent hover:bg-white/10 text-slate-500'
            }`}
          >
            <div className={`p-5 rounded-2xl transition-all relative z-10 ${
              activeCategory === cat.id ? 'bg-emerald-500 text-dark shadow-2xl' : 'bg-dark group-hover:scale-110'
            }`}>
              {cat.icon}
            </div>
            <span className="text-xl font-black relative z-10">{cat.name[lang]}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
