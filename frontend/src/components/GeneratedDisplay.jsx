import { useState } from 'react';
import { FiCopy, FiCheck, FiCpu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const GeneratedDisplay = ({ content, loading }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full relative z-10 min-h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">🤖</span>
          AI Output
        </h2>
        {content && !loading && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors text-white"
          >
            {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>

      <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-6 overflow-y-auto relative custom-scrollbar">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-primary/80"
            >
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
              <p className="animate-pulse text-textSecondary">Consulting the AI minds...</p>
            </motion.div>
          ) : content ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/90 leading-relaxed whitespace-pre-wrap font-medium"
            >
              {content}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-textSecondary/50"
            >
              <FiCpu className="text-5xl mb-4 opacity-50" />
              <p>Your generated content will appear here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GeneratedDisplay;
