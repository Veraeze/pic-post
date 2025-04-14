import express from 'express';
import addPost from '../controllers/postController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/upload', upload.single('image'), addPost);

export default router;