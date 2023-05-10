import { Router } from 'express';
import { getAllBuildings } from './building.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllBuildings);

export default router;
