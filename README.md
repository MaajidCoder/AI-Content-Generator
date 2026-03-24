# AI-Powered Content Generator 🚀

A modern, full-stack MERN application that leverages the power of Artificial Intelligence (Google Gemini API) to generate high-quality blogs, social media captions, and professional emails tailored to your desired tone of voice.
<img width="1911" height="895" alt="image" src="https://github.com/user-attachments/assets/32de8cc5-34a5-41c3-9ffd-b53c0757bcdf" />

## 🌟 Features
- **AI Content Generation:** Quickly generate Blogs, Captions, or Emails using the Gemini 2.5 Flash model.
- **Tone Customization:** Choose from Professional, Witty, Casual, Persuasive, Empathetic, or Inspirational tones.
- **History Tracking:** Automatically saves all your prompts and generated content to an integrated MongoDB database.
- **Premium UI:** Beautiful, dynamic glassmorphism design with Framer Motion animations and responsive Tailwind CSS.
- **1-Click Copy:** Easily copy your newly generated content to the clipboard.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB & Mongoose
- **AI Integration:** `@google/genai` (Google Gemini API)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed on your system. You will also need a free Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 1. Backend Setup
Navigate to the `backend` directory and install the dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup
Navigate to the `frontend` directory and install the dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 3. Usage
Open your browser and navigate to `http://localhost:5173` (or the port provided by Vite in your terminal). Start generating content!

## 📝 License
This project is open-source and available under the MIT License.
