import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, MessageSquare, Sparkles, User } from 'lucide-react';
import { CROPS } from '../data/cropData';

const ChatBot = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: lang === 'en' ? 'Hello! I am AgroBot. How can I help you with your crops today?' : 'வணக்கம்! நான் அக்ரோபாட். இன்று உங்கள் பயிர்களுக்கு நான் எவ்வாறு உதவ முடியும்?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Logic
    setTimeout(() => {
      const botResponse = generateResponse(input.toLowerCase());
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query) => {
    // Simple mock logic
    if (query.includes('hello') || query.includes('hi') || query.includes('வணக்கம்')) {
      return lang === 'en' ? 'Hi there! You can ask me about diseases, fertilizers, or seasonal tips.' : 'வணக்கம்! நோய்கள், உரங்கள் அல்லது பருவகால குறிப்புகளைப் பற்றி நீங்கள் என்னிடம் கேட்கலாம்.';
    }
    
    // Search in crop data
    const foundCrop = CROPS.find(c => query.includes(c.name.en.toLowerCase()) || query.includes(c.name.ta.toLowerCase()));
    
    if (foundCrop) {
      if (query.includes('disease') || query.includes('நோய்')) {
        return lang === 'en' 
          ? `Common diseases for ${foundCrop.name.en} include ${foundCrop.diseases.map(d => d.name.en).join(', ')}. Check the Crop Diagnosis section for more.`
          : `${foundCrop.name.ta} பயிருக்கு பொதுவான நோய்கள்: ${foundCrop.diseases.map(d => d.name.ta).join(', ')}. மேலும் விவரங்களுக்கு 'பயிர் பரிசோதனை' பகுதியை பார்க்கவும்.`;
      }
      if (query.includes('water') || query.includes('நீர்')) {
        return lang === 'en' 
          ? `${foundCrop.name.en} requires ${foundCrop.guide.water.en} irrigation.` 
          : `${foundCrop.name.ta} பயிருக்கு ${foundCrop.guide.water.ta} நீர் தேவைப்படுகிறது.`;
      }
      return lang === 'en' 
        ? `I have data on ${foundCrop.name.en}. It grows best in ${foundCrop.guide.soil.en} during ${foundCrop.guide.season.en}.` 
        : `${foundCrop.name.ta} பற்றிய தகவல் என்னிடம் உள்ளது. இது ${foundCrop.guide.soil.ta} மண்ணில் ${foundCrop.guide.season.ta} காலத்தில் சிறப்பாக வளரும்.`;
    }

    if (query.includes('weather') || query.includes('வானிலை')) {
      return lang === 'en' ? 'The weather is currently sunny (32°C). Great for harvesting!' : 'வானிலை தற்போது வெயிலாக (32°C) உள்ளது. அறுவடைக்கு ஏற்றது!';
    }

    return lang === 'en' 
      ? "I'm not sure about that. Try asking about specific crops like Tomato, Paddy, or Mango!" 
      : "மன்னிக்கவும், அது பற்றி எனக்குத் தெரியவில்லை. தக்காளி, நெல் அல்லது மாம்பழம் போன்ற பயிர்களைப் பற்றி கேட்டுப் பாருங்கள்!";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-50 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-emerald-400 shadow-2xl hover:bg-emerald-500 hover:text-white transition-colors group"
      >
        <Bot size={28} className="group-hover:animate-pulse" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-dark animate-bounce"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-[60] w-full max-w-[380px] h-[550px] glass-card shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border-emerald-500/30"
          >
            {/* Header */}
            <div className="p-5 primary-gradient flex justify-between items-center">
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">AgroBot AI</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">{lang === 'en' ? 'Online' : 'ஆன்லைனில்'}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-dark/40"
            >
              {messages.map(msg => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                    msg.type === 'bot' 
                      ? 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5' 
                      : 'bg-emerald-500 text-dark font-black rounded-tr-none shadow-lg'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-dark-accent border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={lang === 'en' ? 'Ask AgroBot...' : 'அக்ரோபாட்டிடம் கேளுங்கள்...'}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-emerald-500/50 transition-all font-medium"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-emerald-500 text-dark rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
