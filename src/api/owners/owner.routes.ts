import { Router } from 'express';
import { getAllOwners } from './owner.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllOwners);

export default router;
