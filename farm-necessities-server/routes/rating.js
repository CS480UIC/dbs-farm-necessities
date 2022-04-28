import express from 'express';
import {
  addRating,
  editRating,
  getRating,
  removeRating,
} from '../controllers/rating.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getRating);
router.post('/', auth, addRating);
router.delete('/', auth, removeRating);
router.put('/', auth, editRating);

export default router;
