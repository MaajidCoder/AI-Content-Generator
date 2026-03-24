import { FiClock, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HistorySidebar = ({ history, onSelect }) => {
  return (
    <div className="w-72 border-r border-white/10 glass-panel h-full flex flex-col z-20">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
          <FiClock className="text-xl" />
        </div>
        <div>
          <h2 className="text-white font-bold text-lg leading-tight">History</h2>
          <p className="text-textSecondary text-xs">Past generations</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {history.length === 0 ? (
          <p className="text-textSecondary text-center text-sm mt-10">No history yet.</p>
        ) : (
          history.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              key={item._id || index}
              onClick={() => onSelect(item)}
              className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-blue-300">
                  {item.contentType}
                </span>
                <span className="text-[10px] text-textSecondary uppercase tracking-wider">{item.tone}</span>
              </div>
              <p className="text-white/80 text-sm line-clamp-2 leading-snug group-hover:text-white transition-colors">
                "{item.prompt}"
              </p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistorySidebar;
