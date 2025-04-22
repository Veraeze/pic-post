import express from 'express';
import {addPost, getPost, removePost} from '../controllers/postController.js';
import upload from '../middleware/multer.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/upload', authMiddleware, upload.single('image'), addPost);
router.get('/posts',authMiddleware, getPost)
router.delete('/delete', removePost)

export default router;