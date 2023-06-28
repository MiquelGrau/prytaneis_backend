import express from 'express';
import { getUser, getUserGames, registerUser } from './user.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = express.Router();

router.post('/register', authMiddleware, registerUser);
router.get('/:id', authMiddleware, getUser);
router.get('/:id/games', authMiddleware, getUserGames);

export default router;
