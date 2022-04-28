import express from 'express';
// import { getUsers } from '../controllers/users.js';
import {
  getPaymentDetail,
  addPaymentDetail,
  editPaymentDetail,
  removePaymentDetail,
} from '../controllers/payment-detail.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getPaymentDetail);
router.post('/', auth, addPaymentDetail);
router.delete('/', auth, removePaymentDetail);
router.put('/', auth, editPaymentDetail);

export default router;
