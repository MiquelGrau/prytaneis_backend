import { Router } from 'express';
import {
    createWarehouse,
    getPublicWarehousesByCity,
    getWarehousesByOwner,
    updateWarehouse,
} from './warehouse.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createWarehouse);
router.get('/public/:cityId', authMiddleware, getPublicWarehousesByCity);
router.get('/owner/:ownerId', authMiddleware, getWarehousesByOwner);
router.put('/:buildingId', authMiddleware, updateWarehouse);

export default router;
