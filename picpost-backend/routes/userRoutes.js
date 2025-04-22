import express from 'express';
import followUser from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/follow/:id', authMiddleware, followUser);

export default router;
