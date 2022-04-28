import express from 'express';
import { addOrderDetail, editOrderDetail, getOrderDetail, removeOrderDetail } from '../controllers/order-detail.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getOrderDetail);
router.post('/', auth, addOrderDetail);
router.delete('/', auth, removeOrderDetail);
router.put('/', auth, editOrderDetail);

export default router;
