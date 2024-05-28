import { Router } from 'express';
const router = Router();
import { createPayment, executePayment } from '..paypalController';

router.post('/create-payment', createPayment);
router.post('/execute-payment', executePayment);

export default router;
