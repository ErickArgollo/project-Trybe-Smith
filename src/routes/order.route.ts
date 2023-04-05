import { Router } from 'express';
import checkToken from '../middlewares/validateToken';

import { getAllOrders, newOrder } from '../controllers/order.controller';

const router = Router();

router.get('/', getAllOrders);
router.post('/', checkToken, newOrder);

export default router;