import express from 'express';
import { addCart, editCart, getCart, removeCart } from '../controllers/cart.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addCart);
router.delete('/', auth, removeCart);
router.put('/', auth, editCart);

export default router;
