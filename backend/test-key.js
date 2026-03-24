import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

async function testApiKey() {
  console.log('Testing your Gemini API key...');
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Say test',
    });
    
    console.log('\n✅ SUCCESS! Your GEMINI API key is working perfectly.');
    console.log('Gemini Response:', response.text);
  } catch (error) {
    console.error('\n❌ API Key Test Failed.');
    console.error(error);
    console.error('\nPlease ensure you have added a valid GEMINI_API_KEY to your backend/.env file and restart your server.');
  }
}

testApiKey();
