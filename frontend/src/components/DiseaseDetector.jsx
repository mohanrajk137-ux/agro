import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, AlertCircle, Info, RefreshCw, Trash2, Search, Cpu, Zap, Activity } from 'lucide-react';
import { SYMPTOMS } from '../data/cropData';

const DiseaseDetector = ({ lang, selectedCrop }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    handleReset();
  }, [selectedCrop]);

  const handleReset = () => {
    setResult(null);
    setSelectedSymptoms([]);
    setUploadedImage(null);
  };

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId) 
        : [...prev, symptomId]
    );
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const identifyDisease = () => {
    if (selectedSymptoms.length === 0) return;
    
    setIsScanning(true);
    
    setTimeout(() => {
      let bestMatch = null;
      let maxMatchCount = 0;

      selectedCrop.diseases.forEach(disease => {
        const matches = disease.matchSymptoms.filter(s => selectedSymptoms.includes(s));
        const matchCount = matches.length;
        
        if (matchCount > maxMatchCount) {
          maxMatchCount = matchCount;
          bestMatch = disease;
        }
      });

      setResult(bestMatch);
      setIsScanning(false);
      
      const resultView = document.getElementById('result-view');
      if (resultView) resultView.scrollIntoView({ behavior: 'smooth' });
    }, 3000); // Longer for "Futuristic" effect
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Left side: Controls */}
      <div className="space-y-8 z-10">
        <div className="glass-card p-8 border-emerald-500/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
          
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-500 text-dark flex items-center justify-center text-sm font-black shadow-[0_0_20px_rgba(16,185,129,0.5)]">01</span>
            <div className="flex flex-col">
              <span className="text-white uppercase tracking-tight">{lang === 'en' ? 'Input Analysis' : 'பரிசோதனை உள்ளீடு'}</span>
              <span className="text-[10px] text-emerald-500/60 font-black uppercase tracking-widest">Image Recognition Engine</span>
            </div>
          </h3>
          
          <div className="relative group cursor-pointer border-2 border-dashed border-white/5 rounded-2xl p-1 px-1 hover:border-emerald-500/30 transition-all overflow-hidden bg-dark-accent/50">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer z-20" 
              onChange={handleFileUpload}
            />
            {uploadedImage ? (
              <div className="relative group/img">
                <img src={uploadedImage} alt="Crop" className="w-full h-72 object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover/img:scale-105" />
                {isScanning && (
                   <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,1)] z-10"
                   ></motion.div>
                )}
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="text-[10px] font-black text-white bg-dark/80 px-4 py-2 rounded-full uppercase tracking-[0.3em] backdrop-blur-md border border-white/10">Change Image</div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setUploadedImage(null); }}
                  className="absolute top-4 right-4 p-3 bg-red-500/80 backdrop-blur-md text-white rounded-xl hover:bg-red-500 transition-all z-20"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center py-16 px-10">
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all shadow-inner">
                  <Upload className="text-emerald-500" size={32} />
                </div>
                <p className="text-base text-slate-300 font-bold mb-2">
                  {lang === 'en' ? 'Deploy Source Image' : 'படத்தைப் பதிவேற்றவும்'}
                </p>
                <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-black">AI Processor Ready</p>
              </div>
            )}
          </div>
        </div>

        <div className="glass-card p-8 border-emerald-500/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-500 text-dark flex items-center justify-center text-sm font-black shadow-[0_0_20px_rgba(16,185,129,0.5)]">02</span>
              <div className="flex flex-col">
                <span className="text-white uppercase tracking-tight">{lang === 'en' ? 'Symptom Mapping' : 'அறிகுறிகள் மேப்பிங்'}</span>
                <span className="text-[10px] text-emerald-500/60 font-black uppercase tracking-widest">Neural Linkage Selection</span>
              </div>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-3 custom-scrollbar">
            {SYMPTOMS.map(symptom => (
              <motion.label 
                key={symptom.id}
                whileHover={{ x: 6, backgroundColor: 'rgba(16,185,129,0.05)' }}
                className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedSymptoms.includes(symptom.id) 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]' 
                    : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${selectedSymptoms.includes(symptom.id) ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`}></div>
                  <span className="text-sm font-bold uppercase tracking-tight">{symptom.name[lang]}</span>
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={selectedSymptoms.includes(symptom.id)}
                  onChange={() => handleSymptomToggle(symptom.id)}
                />
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  selectedSymptoms.includes(symptom.id) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-800'
                }`}>
                  {selectedSymptoms.includes(symptom.id) && <CheckCircle2 size={14} className="text-dark" />}
                </div>
              </motion.label>
            ))}
          </div>
          
          <button
            onClick={identifyDisease}
            disabled={selectedSymptoms.length === 0 || isScanning}
            className={`w-full mt-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 relative overflow-hidden ${
              selectedSymptoms.length > 0 
                ? 'primary-gradient text-dark shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:scale-[1.02] active:scale-95' 
                : 'bg-slate-800 text-slate-600 cursor-not-allowed opacity-50'
            }`}
          >
            {isScanning ? (
              <>
                <div className="flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-dark rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-dark rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-dark rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                {lang === 'en' ? 'PROCESSING NEURAL NET' : 'பரிசோதிக்கப்படுகிறது...'}
              </>
            ) : (
              <>
                <Activity size={20} />
                {lang === 'en' ? 'INITIALIZE SCAN' : 'ஸ்கேன் தொடங்கவும்'}
              </>
            )}
            {/* Gloss effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] group-hover:animate-[shine_1.5s_infinite]"></div>
          </button>
        </div>
      </div>

      {/* Right side: Results */}
      <div className="flex flex-col h-full z-10" id="result-view">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Activity size={20} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            {lang === 'en' ? 'Neural Diagnostic' : 'நரம்பியல் நோய் கண்டறிதல்'}
          </h2>
        </div>
        
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-10 border-l-[12px] border-l-emerald-500 flex-1 flex flex-col justify-between shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-emerald-500/[0.03] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 text-dark text-[10px] font-black uppercase mb-8 tracking-[0.2em] shadow-lg shadow-emerald-500/20">
                  <Shield size={14} />
                  {lang === 'en' ? 'CONFIRMED MATCH' : 'உறுதிப்படுத்தப்பட்டது'}
                </div>
                <h4 className="text-5xl font-black text-white mb-4 leading-tight uppercase tracking-tighter italic">{result.name[lang]}</h4>
                <div className="h-1.5 w-32 bg-emerald-500 rounded-full mb-12 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                
                <div className="space-y-10">
                  <div className="relative pl-8 border-l-2 border-emerald-500/30 group">
                    <p className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                      <Cpu size={14} className="group-hover:rotate-90 transition-transform" /> {lang === 'en' ? 'DETECTION PARAMETERS' : 'கண்டறிதல் அளவீடுகள்'}
                    </p>
                    <p className="text-slate-300 text-xl leading-relaxed font-medium">{result.symptoms[lang]}</p>
                  </div>
                  
                  <div className="p-8 bg-dark-accent/80 backdrop-blur-xl rounded-[2rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
                    <p className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <Zap size={14} className="animate-pulse" /> {lang === 'en' ? 'REMEDIATION PROTOCOL' : 'சிகிச்சை நெறிமுறை'}
                    </p>
                    <p className="text-slate-200 text-lg leading-relaxed">{result.prevention[lang]}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
                <button 
                  onClick={handleReset}
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-emerald-500 hover:text-dark text-slate-400 text-xs font-black uppercase tracking-widest transition-all border border-white/10 group"
                >
                  <RefreshCw size={16} className="inline mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  {lang === 'en' ? 'NEW ANALYSIS' : 'புதிய பரிசோதனை'}
                </button>
                <div className="text-right">
                  <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] mb-1">Authenticity Hash</div>
                  <div className="text-[8px] text-emerald-500/40 font-mono">AGRO-AI-9X-2026-v4.2.4</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-16 border-dashed border-white/10 flex-1 flex flex-col items-center justify-center text-center group bg-dark-accent/30"
            >
              <div className="relative mb-10">
                <div className="w-28 h-28 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center group-hover:border-emerald-500/40 transition-all duration-700">
                  <Cpu size={48} className="text-slate-800 group-hover:text-emerald-500 group-hover:rotate-45 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-[2.5rem] animate-[ping_3s_infinite] opacity-20"></div>
              </div>
              <h4 className="text-2xl font-black text-slate-400 mb-4 uppercase tracking-tighter italic">
                {lang === 'en' ? 'AWAITING NEURAL DATA' : 'தரவுகளுக்காக காத்திருக்கிறது'}
              </h4>
              <p className="text-sm text-slate-600 max-w-xs font-bold leading-relaxed uppercase tracking-widest opacity-60">
                {lang === 'en' 
                  ? 'Initiate the identification protocol by uploading a source image and selecting symptoms.' 
                  : 'படத்தைப் பதிவேற்றி அறிகுறிகளைத் தேர்ந்தெடுப்பதன் மூலம் கண்டறியும் நெறிமுறையைத் தொடங்கவும்.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper Components for the redesigned icons
const Shield = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default DiseaseDetector;
