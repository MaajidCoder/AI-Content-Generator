import History from '../models/History.js';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the official Gemini SDK
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

export const generateContent = async (req, res) => {
  try {
    const { prompt, contentType, tone } = req.body;

    if (!prompt || !contentType || !tone) {
      return res.status(400).json({ error: 'Please provide prompt, contentType, and tone.' });
    }

    const systemInstruction = `You are an expert AI content generator. Generate a high-quality ${contentType} with a ${tone} tone based on the user's prompt.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const generatedContent = response.text;

    // Save to History
    const newHistoryEntry = new History({
      prompt,
      contentType,
      tone,
      generatedContent
    });

    await newHistoryEntry.save();

    res.status(201).json({
      success: true,
      data: newHistoryEntry
    });

  } catch (error) {
    console.error('Error in generateContent:', error);
    res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
};

export const getHistory = async (req, res) => {
  try {
    const history = await History.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: history });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};
