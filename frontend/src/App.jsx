import { useState, useEffect } from 'react';
import api from './api/axios';
import HistorySidebar from './components/HistorySidebar';
import GeneratorForm from './components/GeneratorForm';
import GeneratedDisplay from './components/GeneratedDisplay';

function App() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);

  const fetchHistory = async () => {
    try {
      const { data } = await api.get('/history');
      if (data.success) {
        setHistory(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch history', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleGenerate = async (formData) => {
    setLoading(true);
    setGeneratedData(null);
    try {
      const { data } = await api.post('/generate', formData);
      if (data.success) {
        setGeneratedData(data.data.generatedContent);
        // Prepend to history for immediate UI feedback
        setHistory([data.data, ...history]);
      }
    } catch (error) {
      console.error('Generation failed', error);
      alert('Failed to generate content. Please check your connection or backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-animated">
      <HistorySidebar history={history} onSelect={(item) => setGeneratedData(item.generatedContent)} />
      
      <main className="flex-1 flex flex-col items-center p-8 overflow-y-auto w-full relative">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none"></div>
        
        <header className="mb-10 text-center z-10 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
            AI Content Generator
          </h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Create premium blogs, engaging captions, and professional emails instantly with the power of AI.
          </p>
        </header>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 flex-1">
          <GeneratorForm onGenerate={handleGenerate} loading={loading} />
          <GeneratedDisplay content={generatedData} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
