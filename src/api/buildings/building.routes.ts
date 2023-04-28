import { Router } from 'express';
import { getAllBuildings, getGoodsByBuilding } from './building.controller';

const router = Router();

router.get('/', getAllBuildings);
router.get('/:buildingId/goods', getGoodsByBuilding); // Fix this line

export default router;
