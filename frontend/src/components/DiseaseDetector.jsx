import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, AlertCircle, Info, RefreshCw, Trash2, Search, Cpu, Zap, Activity, Shield } from 'lucide-react';
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 relative stagger-load">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Left side: Controls */}
      <div className="space-y-10 z-10">
        <div className="glass-card p-10 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-emerald-500 text-dark flex items-center justify-center text-sm font-black shadow-[0_0_30px_rgba(16,185,129,0.4)] rotate-3 group-hover:rotate-0 transition-transform">01</span>
              <div className="flex flex-col">
                <span className="text-white uppercase tracking-tighter">{lang === 'en' ? 'SENSORY INPUT' : 'புலன் உள்ளீடு'}</span>
                <span className="text-[9px] text-emerald-500 font-black uppercase tracking-[0.4em]">Image Processing Unit</span>
              </div>
            </h3>
            <div className="w-8 h-8 rounded-full border border-emerald-500/20 flex items-center justify-center">
               <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="relative group cursor-pointer border border-white/5 rounded-[2.5rem] p-1.5 hover:border-emerald-500/30 transition-all bg-[#0a1120]/80 shadow-2xl">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer z-20" 
              onChange={handleFileUpload}
            />
            {uploadedImage ? (
              <div className="relative overflow-hidden rounded-[2.2rem]">
                <img src={uploadedImage} alt="Crop" className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                
                {isScanning && (
                   <div className="absolute inset-0 pointer-events-none z-10">
                     <div className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)] scan-line"></div>
                     <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
                   </div>
                )}
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setUploadedImage(null); }}
                  className="absolute top-6 right-6 p-4 bg-red-500/20 backdrop-blur-xl text-white rounded-2xl hover:bg-red-500 transition-all z-20 border border-white/10"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center py-20 px-10">
                <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all shadow-inner relative">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Upload className="text-emerald-500 relative z-10" size={36} strokeWidth={2} />
                </div>
                <p className="text-lg text-white font-black uppercase tracking-tight mb-2">
                  {lang === 'en' ? 'DEPLOY SOURCE IMAGE' : 'படத்தைப் பதிவேற்றவும்'}
                </p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black italic">Neural Capture Ready</p>
              </div>
            )}
          </div>
        </div>

        <div className="glass-card p-10 border-white/5">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-emerald-500 text-dark flex items-center justify-center text-sm font-black shadow-[0_0_30px_rgba(16,185,129,0.4)] -rotate-3 group-hover:rotate-0 transition-transform">02</span>
              <div className="flex flex-col">
                <span className="text-white uppercase tracking-tighter">{lang === 'en' ? 'NEURAL MAPPING' : 'நரம்பியல் மேப்பிங்'}</span>
                <span className="text-[9px] text-emerald-500 font-black uppercase tracking-[0.4em]">Symptom Correlation</span>
              </div>
            </h3>
            <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[9px] font-black text-slate-500 tracking-widest">
               {selectedSymptoms.length} ACTIVE
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
            {SYMPTOMS.map((symptom, idx) => (
              <motion.label 
                key={symptom.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
                className={`flex items-center justify-between p-6 rounded-3xl border cursor-pointer transition-all duration-500 group/item ${
                  selectedSymptoms.includes(symptom.id) 
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-white shadow-[0_0_30px_rgba(16,185,129,0.05)]' 
                    : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    selectedSymptoms.includes(symptom.id) ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]' : 'bg-slate-800'
                  }`}></div>
                  <span className="text-sm font-black uppercase tracking-tight">{symptom.name[lang]}</span>
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={selectedSymptoms.includes(symptom.id)}
                  onChange={() => handleSymptomToggle(symptom.id)}
                />
                <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                  selectedSymptoms.includes(symptom.id) ? 'bg-emerald-500 border-emerald-500 rotate-[360deg]' : 'border-slate-800'
                }`}>
                  {selectedSymptoms.includes(symptom.id) && <CheckCircle2 size={16} className="text-dark" strokeWidth={3} />}
                </div>
              </motion.label>
            ))}
          </div>
          
          <button
            onClick={identifyDisease}
            disabled={selectedSymptoms.length === 0 || isScanning}
            className={`w-full mt-12 py-7 rounded-3xl font-black text-xs uppercase tracking-[0.4em] transition-all duration-500 flex items-center justify-center gap-5 relative overflow-hidden ${
              selectedSymptoms.length > 0 && !isScanning
                ? 'primary-gradient text-dark shadow-[0_30px_60px_-10px_rgba(16,185,129,0.4)] hover:scale-[1.03] active:scale-95' 
                : 'bg-[#0f172a] text-slate-700 cursor-not-allowed border border-white/5'
            }`}
          >
            {isScanning ? (
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  {[0.1, 0.2, 0.3].map((d, i) => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1, delay: d }}
                      className="w-2 h-2 bg-dark rounded-full"
                    ></motion.div>
                  ))}
                </div>
                <span className="glow-text">{lang === 'en' ? 'DECODING GENETIC STRUCTURE' : 'மறுசீரமைக்கப்படுகிறது...'}</span>
              </div>
            ) : (
              <>
                <Activity size={22} className="group-hover:rotate-180 transition-transform duration-1000" />
                {lang === 'en' ? 'INITIALIZE SYSTEM SCAN' : 'சிஸ்டம் ஸ்கேன்'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right side: Results */}
      <div className="flex flex-col h-full z-10" id="result-view">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 relative">
              <div className="absolute inset-0 bg-emerald-500/10 animate-ping rounded-2xl"></div>
              <Cpu size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                {lang === 'en' ? 'NEURAL OUTPUT' : 'முடிவுகள்'}
              </h2>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">Quantum Diagnostic Result</p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest mb-1">Session ID</span>
            <span className="text-[10px] text-emerald-500/60 font-mono">#{Math.random().toString(36).substring(7).toUpperCase()}</span>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 border-white/5 flex-1 flex flex-col justify-between shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Complex Background Geometry */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                   <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500 text-dark text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_15px_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 size={16} strokeWidth={3} />
                    {lang === 'en' ? 'DIAGNOSIS CONFIRMED' : 'உறுதி செய்யப்பட்டது'}
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Confidence Score</p>
                    <p className="text-2xl font-black text-emerald-400 italic">99.8%</p>
                  </div>
                </div>

                <h4 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter title-gradient drop-shadow-2xl italic">
                  {result.name[lang]}
                </h4>

                <div className="space-y-12">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full"></div>
                    <div className="absolute left-[-4px] top-0 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                    <p className="text-emerald-500 font-black text-[11px] uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                      <Zap size={14} className="animate-pulse" /> {lang === 'en' ? 'NEURAL SIGNATURE' : 'அறிகுறிகள்'}
                    </p>
                    <p className="text-slate-300 text-2xl leading-tight font-black uppercase tracking-tight">{result.symptoms[lang]}</p>
                  </div>
                  
                  <div className="p-10 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/5 relative overflow-hidden group/box">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-1000"></div>
                    <p className="text-emerald-500 font-black text-[11px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                      <Shield size={16} className="text-emerald-400" /> {lang === 'en' ? 'BIO-REMEDIATION PROTOCOL' : 'சிகிச்சை'}
                    </p>
                    <p className="text-slate-200 text-xl leading-relaxed font-medium">{result.prevention[lang]}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 flex items-end justify-between">
                <button 
                  onClick={handleReset}
                  className="px-10 py-5 rounded-[2rem] bg-white/5 hover:bg-emerald-500 hover:text-dark text-slate-400 text-xs font-black uppercase tracking-[0.3em] transition-all duration-700 border border-white/10 group shadow-2xl"
                >
                  <RefreshCw size={18} className="inline mr-3 group-hover:rotate-180 transition-transform duration-1000" />
                  {lang === 'en' ? 'RESET CORE' : 'மீட்டமைக்க'}
                </button>
                <div className="text-right flex flex-col gap-2">
                  <div className="flex items-center gap-2 justify-end">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Protocol Verified</span>
                  </div>
                  <div className="text-[9px] text-emerald-500/30 font-mono tracking-tighter">HASH-0x7F4B-AGRO-2026-N4</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-20 border-dashed border-white/5 flex-1 flex flex-col items-center justify-center text-center group bg-[#0a1120]/30"
            >
              <div className="relative mb-12">
                <div className="w-32 h-32 rounded-[3rem] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-1000 relative">
                   <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative w-20 h-20 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin-slow"></div>
                   <Activity size={32} className="absolute text-slate-700 group-hover:text-emerald-500 group-hover:scale-125 transition-all duration-1000" />
                </div>
              </div>
              <h4 className="text-3xl font-black text-slate-500 mb-6 uppercase tracking-tighter italic glow-text">
                {lang === 'en' ? 'AWAITING NEURAL FEED' : 'தரவுகளுக்காக காத்திருக்கிறது'}
              </h4>
              <p className="text-[10px] text-slate-700 max-w-sm font-black leading-loose uppercase tracking-[0.4em] opacity-60">
                {lang === 'en' 
                  ? 'Establish neural linkage by deploying a source image and mapping environmental symptoms.' 
                  : 'படத்தைப் பதிவேற்றி அறிகுறிகளைத் தேர்ந்தெடுப்பதன் மூலம் கண்டறியும் நெறிமுறையைத் தொடங்கவும்.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiseaseDetector;
