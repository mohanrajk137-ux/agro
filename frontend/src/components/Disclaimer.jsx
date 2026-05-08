import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, ShieldCheck } from 'lucide-react';

const DISCLAIMER_KEY = 'farmora_disclaimer_accepted';

const content = {
  en: {
    title: 'Disclaimer',
    subtitle: 'Please read before using FARMORA',
    body: [
      'FARMORA is an educational and informational platform designed to assist farmers with general agricultural knowledge.',
      'The disease predictions, soil recommendations, crop calendars, and market prices shown on this platform are based on general data and algorithms — they are NOT a substitute for professional agronomist advice.',
      'Always consult a certified agricultural expert or your local Krishi Vigyan Kendra (KVK) before making critical farming decisions.',
      'Government scheme information is provided for reference only. Verify eligibility and details at official government portals.',
      'The developers of FARMORA are not liable for any loss, damage, or crop failure resulting from the use of information provided on this platform.',
    ],
    accept: 'I Understand & Accept',
    bannerText: '⚠️ FARMORA is for educational purposes only. Not a substitute for professional agricultural advice.',
    bannerLink: 'Read Disclaimer',
  },
  ta: {
    title: 'மறுப்பு அறிவிப்பு',
    subtitle: 'FARMORA பயன்படுத்துவதற்கு முன் படிக்கவும்',
    body: [
      'FARMORA என்பது விவசாயிகளுக்கு பொது விவசாய அறிவை வழங்குவதற்காக வடிவமைக்கப்பட்ட ஒரு கல்வி மற்றும் தகவல் தளம்.',
      'இந்த தளத்தில் காட்டப்படும் நோய் முன்கணிப்புகள், மண் பரிந்துரைகள், பயிர் காலண்டர்கள் மற்றும் சந்தை விலைகள் பொது தரவை அடிப்படையாகக் கொண்டவை — இவை தொழில்முறை வேளாண் ஆலோசகரின் கருத்துக்கு மாற்றாகாது.',
      'முக்கியமான விவசாய முடிவுகளை எடுப்பதற்கு முன், சான்றளிக்கப்பட்ட வேளாண் நிபுணரை அல்லது உங்கள் உள்ளூர் கிருஷி விஞ்ஞான் கேந்திரத்தை (KVK) அணுகவும்.',
      'அரசு திட்ட தகவல்கள் குறிப்பு மட்டுமே. அதிகாரப்பூர்வ அரசு போர்டல்களில் தகுதி மற்றும் விவரங்களை சரிபார்க்கவும்.',
      'இந்த தளத்தில் வழங்கப்படும் தகவல்களின் பயன்பாட்டால் ஏற்படும் எந்தவொரு இழப்பு, சேதம் அல்லது பயிர் தோல்விக்கும் FARMORA உருவாக்குனர்கள் பொறுப்பேற்கமாட்டார்கள்.',
    ],
    accept: 'புரிந்துகொண்டேன் & ஒப்புக்கொள்கிறேன்',
    bannerText: '⚠️ FARMORA கல்வி நோக்கங்களுக்காக மட்டுமே. தொழில்முறை வேளாண் ஆலோசகரின் மாற்றாகாது.',
    bannerLink: 'மறுப்பு படிக்கவும்',
  },
};

export default function Disclaimer({ lang = 'en' }) {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const t = content[lang] || content.en;

  useEffect(() => {
    const accepted = localStorage.getItem(DISCLAIMER_KEY);
    if (!accepted) {
      // Small delay so the page loads before modal appears
      const timer = setTimeout(() => setShowModal(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(DISCLAIMER_KEY, 'true');
    setShowModal(false);
  };

  return (
    <>
      {/* ── Sticky top banner ─────────────────────────────────────── */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[9998] flex items-center justify-between gap-3 px-4 py-2"
            style={{
              background: 'linear-gradient(90deg, rgba(245,158,11,0.18) 0%, rgba(234,88,12,0.12) 100%)',
              borderBottom: '1px solid rgba(245,158,11,0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex items-center gap-2 text-amber-400 text-[11px] font-bold tracking-wide flex-1 min-w-0">
              <AlertTriangle size={13} className="shrink-0 animate-pulse" />
              <span className="truncate">{t.bannerText}</span>
              <button
                onClick={() => setShowModal(true)}
                className="shrink-0 underline underline-offset-2 hover:text-amber-300 transition-colors"
              >
                {t.bannerLink}
              </button>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="shrink-0 p-1 rounded-lg text-amber-500/70 hover:text-amber-300 hover:bg-amber-500/10 transition-all"
              aria-label="Close banner"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Disclaimer Modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
          >
            <motion.div
              initial={{ scale: 0.88, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(20,30,50,0.98) 100%)',
                border: '1px solid rgba(245,158,11,0.35)',
                boxShadow: '0 0 80px rgba(245,158,11,0.15), 0 40px 80px rgba(0,0,0,0.6)',
              }}
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                    <AlertTriangle size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-white font-black text-xl uppercase tracking-tight">{t.title}</h2>
                    <p className="text-amber-400/70 text-[11px] font-semibold tracking-widest uppercase">{t.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6 max-h-72 overflow-y-auto space-y-4 custom-scroll">
                {t.body.map((point, i) => (
                  <div key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-amber-400/70"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-8 pb-8 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-slate-500 text-[10px] mb-4 font-semibold uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-emerald-500/60" />
                  FARMORA · For Educational Use Only
                </div>
                <button
                  onClick={handleAccept}
                  className="w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                    color: '#000',
                    boxShadow: '0 0 30px rgba(245,158,11,0.35)',
                  }}
                  onMouseEnter={e => (e.target.style.opacity = '0.9')}
                  onMouseLeave={e => (e.target.style.opacity = '1')}
                >
                  {t.accept}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
