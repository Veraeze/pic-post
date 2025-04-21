import express from 'express';
import {addPost, getPost, removePost} from '../controllers/postController.js';
import upload from '../middleware/multer.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/upload', protect, upload.single('image'), addPost);
router.get('/posts', getPost)
router.delete('/delete', removePost)

export default router;