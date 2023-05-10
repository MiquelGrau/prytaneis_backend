// market.routes.ts
import { Router } from 'express';
import { getMarketGoods, buyGoods } from './market.controller';
import { authMiddleware } from '../../core/auth.middleware';

const router = Router();

router.get('/:marketId/goods', authMiddleware, getMarketGoods);
router.post('/:marketId/transaction/buy', authMiddleware, buyGoods);

export default router;
