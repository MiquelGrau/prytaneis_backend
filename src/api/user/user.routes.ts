import express from 'express';
import { registerUser } from './user.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = express.Router();

router.post('/', authMiddleware, registerUser);

export default router;
