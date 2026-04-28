import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Users } from 'lucide-react';

const SmartStats = ({ lang }) => {
  const stats = [
    { icon: <Activity className="text-emerald-400" />, label: lang === 'en' ? 'System Accuracy' : 'கணினி துல்லியம்', value: '98.4%', delay: 0.1 },
    { icon: <ShieldCheck className="text-emerald-400" />, label: lang === 'en' ? 'Protected Crops' : 'பாதுகாக்கப்பட்ட பயிர்கள்', value: '1.2M+', delay: 0.2 },
    { icon: <Users className="text-emerald-400" />, label: lang === 'en' ? 'Active Farmers' : 'செயலில் உள்ள விவசாயிகள்', value: '450K+', delay: 0.3 },
    { icon: <Zap className="text-emerald-400" />, label: lang === 'en' ? 'Response Time' : 'பதில் நேரம்', value: '0.4s', delay: 0.4 }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: stat.delay }}
          viewport={{ once: true }}
          className="glass-card p-6 border-white/5 relative overflow-hidden group hover:border-emerald-500/20 transition-all shadow-xl"
        >
          <div className="absolute -right-2 -top-2 opacity-5 group-hover:opacity-10 transition-opacity">
            {stat.icon}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform text-emerald-400">
              {stat.icon}
            </div>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <h4 className="text-2xl font-black text-white tracking-tighter">{stat.value}</h4>
          </div>
          {/* Animated Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default SmartStats;
