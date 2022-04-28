import express from 'express';
import { addProductCategory, editProductCategory, getProductCategory, removeProductCategory } from '../controllers/product-category.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getProductCategory);
router.post('/', auth, addProductCategory);
router.delete('/', auth, removeProductCategory);
router.put('/', auth, editProductCategory);

export default router;
