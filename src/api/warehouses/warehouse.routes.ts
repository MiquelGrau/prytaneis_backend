import { Router } from 'express';
import {
    createWarehouse,
    getPublicWarehousesByCity,
    getWarehousesByOwner,
    updateWarehouse,
} from './warehouse.controller';

const router = Router();

router.post('/', createWarehouse);
router.get('/public/:cityId', getPublicWarehousesByCity);
router.get('/owner/:ownerId', getWarehousesByOwner);
router.put('/:buildingId', updateWarehouse);

export default router;
