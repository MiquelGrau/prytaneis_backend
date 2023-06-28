import { Router } from 'express';
import { getAllNodes } from './node.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllNodes);

export default router;
