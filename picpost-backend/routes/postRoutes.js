import express from 'express';
import {addPost, getPost} from '../controllers/postController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/upload', upload.single('image'), addPost);
router.get('/posts', getPost)

export default router;