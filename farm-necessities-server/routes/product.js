import express from 'express';
import { addProduct, editProduct, getProduct, removeProduct } from '../controllers/product.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getProduct);
router.post('/', auth, addProduct);
router.delete('/', auth, removeProduct);
router.put('/', auth, editProduct);

export default router;
