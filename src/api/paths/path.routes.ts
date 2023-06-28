import { Router } from 'express';
import { getAllPaths } from './path.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllPaths);

export default router;
