import express from 'express';
import { generateContent, getHistory } from '../controllers/contentController.js';

const router = express.Router();

router.post('/generate', generateContent);
router.get('/history', getHistory);

export default router;
