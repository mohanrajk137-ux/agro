import React from 'react';
import { motion } from 'framer-motion';
import { Info, Leaf, ShieldCheck, Database, Cpu } from 'lucide-react';

const About = ({ lang }) => {
  return (
    <div className="pt-32 px-6 pb-20 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-12 border-emerald-500/30"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="p-4 bg-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Info className="text-dark" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter futuristic-font">
              {lang === 'en' ? 'ABOUT FARMORA' : 'பார்மோரா பற்றி'}
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">Platform Specifications</p>
          </div>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed font-medium">
          <section className="p-8 bg-dark rounded-3xl border border-white/5">
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest flex items-center gap-3">
              <Leaf className="text-emerald-500" /> {lang === 'en' ? 'Our Mission' : 'எங்கள் நோக்கம்'}
            </h2>
            <p>
              {lang === 'en' 
                ? 'FARMORA is a next-generation agricultural intelligence platform. We combine precision farming data, AI-driven diagnostics, and real-time market telemetry to empower farmers. By seamlessly bridging the gap between traditional agricultural knowledge and cutting-edge technology, we aim to maximize yield, optimize resource usage, and ensure sustainable farming practices.' 
                : 'FARMORA ஒரு அடுத்த தலைமுறை விவசாய நுண்ணறிவு தளம். விவசாயிகளுக்கு அதிகாரமளிக்க துல்லியமான விவசாய தரவு, AI-உந்துதல் கண்டறிதல் மற்றும் நிகழ்நேர சந்தை தரவுகளை நாங்கள் இணைக்கிறோம். பாரம்பரிய விவசாய அறிவு மற்றும் புதிய தொழில்நுட்பத்திற்கு இடையிலான இடைவெளியை குறைப்பதே எங்கள் நோக்கம்.'}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <h3 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                <Cpu className="text-emerald-400" size={20} /> AI Diagnostics
              </h3>
              <p className="text-sm text-slate-400">Advanced neural mapping to identify crop diseases instantly from uploaded symptoms and imagery.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <h3 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                <Database className="text-emerald-400" size={20} /> Market Telemetry
              </h3>
              <p className="text-sm text-slate-400">Live commodity pricing and weather-integrated predictive irrigation alerts for smart resource management.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 md:col-span-2">
              <h3 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" size={20} /> Secure Ecosystem
              </h3>
              <p className="text-sm text-slate-400">Fully bilingual support, end-to-end encrypted farmer forums, equipment sharing hubs, and verified government scheme access all built on a hyper-responsive React architecture.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
