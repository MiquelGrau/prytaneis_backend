import { Router } from 'express';
import { getAllCities, getCity } from './city.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getAllCities); // Apply the authMiddleware to the getAllCities route
router.get('/:cityId', authMiddleware, getCity); // Apply the authMiddleware to the getCity route

export default router;
