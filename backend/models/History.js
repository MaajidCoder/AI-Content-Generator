import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
    enum: ['Blog', 'Caption', 'Email'],
  },
  tone: {
    type: String,
    required: true,
  },
  generatedContent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const History = mongoose.model('History', historySchema);

export default History;
