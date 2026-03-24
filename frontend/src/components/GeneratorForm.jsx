import { useState } from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';

const CONTENT_TYPES = ['Blog', 'Caption', 'Email'];
const TONES = ['Professional', 'Casual', 'Witty', 'Persuasive', 'Empathetic', 'Inspirational'];

const GeneratorForm = ({ onGenerate, loading }) => {
  const [formData, setFormData] = useState({
    contentType: 'Blog',
    tone: 'Professional',
    prompt: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.prompt.trim()) return;
    onGenerate(formData);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full z-10">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
        <span className="bg-primary/20 p-2 rounded-lg text-primary">✨</span>
        Configure AI
      </h2>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-5">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-textSecondary font-medium">Content Type</label>
            <select
              name="contentType"
              value={formData.contentType}
              onChange={handleChange}
              className="input-field appearance-none"
            >
              {CONTENT_TYPES.map(type => (
                <option key={type} value={type} className="bg-surface text-white">{type}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-textSecondary font-medium">Tone of Voice</label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="input-field appearance-none"
            >
              {TONES.map(tone => (
                <option key={tone} value={tone} className="bg-surface text-white">{tone}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2 flex-1 flex flex-col">
          <label className="text-sm text-textSecondary font-medium">Topic or Prompt</label>
          <textarea
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            placeholder="What should the AI write about?"
            className="input-field flex-1 resize-none h-48"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !formData.prompt.trim()}
          className={`btn-primary flex items-center justify-center gap-2 mt-auto ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin text-xl" /> Generating...
            </>
          ) : (
            <>
              Generate Content <FiSend />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GeneratorForm;
