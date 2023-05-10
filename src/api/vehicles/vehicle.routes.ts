import { Router } from 'express';
import { getAllVehicles } from './vehicle.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllVehicles);

export default router;
