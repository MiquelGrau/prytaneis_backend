import { Router } from 'express';
import { getAllOwners } from './owner.controller';

const router = Router();

router.get('/', getAllOwners);

export default router;
