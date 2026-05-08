import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowUpRight, ShieldCheck } from 'lucide-react';

const GovPortal = ({ lang }) => {
  const schemes = [
    {
      id: 1,
      title: { en: 'PM-Kisan Samman Nidhi', ta: 'பி.எம்-கிசான் சம்மான் நிதி' },
      benefit: { en: '₹6000/year Direct Support', ta: 'ஆண்டுக்கு ₹6000 நேரடி உதவி' },
      tag: 'FINANCIAL'
    },
    {
      id: 2,
      title: { en: 'Crop Insurance (PMFBY)', ta: 'பயிர் காப்பீடு (PMFBY)' },
      benefit: { en: 'Full coverage for crop loss', ta: 'பயிர் இழப்புக்கு முழு பாதுகாப்பு' },
      tag: 'SECURITY'
    },
    {
      id: 3,
      title: { en: 'Kisan Credit Card', ta: 'கிசான் கடன் அட்டை' },
      benefit: { en: 'Low-interest agricultural loans', ta: 'குறைந்த வட்டி விவசாய கடன்கள்' },
      tag: 'CREDIT'
    },
    {
      id: 4,
      title: { en: 'Free Power Supply', ta: 'இலவச மின்சாரம்' },
      benefit: { en: 'Subsidized electricity for pumps', ta: 'பம்புகளுக்கு மானிய விலையில் மின்சாரம்' },
      tag: 'ENERGY'
    }
  ];

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Landmark className="text-dark" size={32} />
          </div>
          <div>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter futuristic-font">
              {lang === 'en' ? 'GOVERNMENT PORTAL' : 'அரசு போர்டல்'}
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Central & State Subsidy Gateway</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schemes.map((scheme, idx) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 group cursor-pointer border-white/5 hover:border-emerald-500/30"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[9px] font-black text-emerald-400 tracking-widest uppercase">
                  {scheme.tag}
                </span>
                <ArrowUpRight className="text-slate-600 group-hover:text-emerald-400 transition-colors" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {scheme.title[lang]}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {scheme.benefit[lang]}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Verified Scheme</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovPortal;
