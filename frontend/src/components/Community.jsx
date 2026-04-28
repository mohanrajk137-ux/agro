import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, UserCircle, MessageCircle } from 'lucide-react';

const Community = ({ lang }) => {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('agro_posts');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, user: 'Arun Kumar', content: lang === 'en' ? 'Which fertilizer is best for Tomato in this season?' : 'இந்த பருவத்தில் தக்காளிக்கு எந்த உரம் சிறந்தது?', date: '2h ago' },
      { id: 2, user: 'Senthil V', content: lang === 'en' ? 'Paddy harvest started in my village. Good yield this time!' : 'எனது கிராமத்தில் நெல் அறுவடை தொடங்கியது. இந்த முறை நல்ல மகசூல்!', date: '5h ago' }
    ];
  });

  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    localStorage.setItem('agro_posts', JSON.stringify(posts));
  }, [posts]);

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      user: lang === 'en' ? 'You' : 'நீங்கள்',
      content: newPost,
      date: lang === 'en' ? 'Just now' : 'சற்று முன்'
    };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
        {lang === 'en' ? 'Farmer Community' : 'விவசாயிகள் சமூகம்'}
      </h2>
      <div className="glass-card p-6 md:p-8 overflow-hidden">
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder={lang === 'en' ? 'Ask a question or share tips...' : 'கேள்வி கேளுங்கள் அல்லது குறிப்புகளைப் பகிருங்கள்...'}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all"
            onKeyPress={(e) => e.key === 'Enter' && handlePost()}
          />
          <button 
            onClick={handlePost}
            className="p-4 rounded-2xl primary-gradient text-white shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <Send size={24} />
          </button>
        </div>

        <div className="space-y-6 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
          <AnimatePresence initial={false}>
            {posts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <UserCircle size={24} className="text-emerald-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-slate-100">{post.user}</span>
                    <span className="text-[10px] text-slate-600 font-medium uppercase tracking-tighter">{post.date}</span>
                  </div>
                  <p className="text-sm text-slate-400 bg-white/5 p-4 rounded-2xl rounded-tl-none inline-block border border-white/5">
                    {post.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Community;
