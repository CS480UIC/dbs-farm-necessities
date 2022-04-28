import express from 'express';
import { getQueries } from '../controllers/queries.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/:queryType', auth,getQueries);

export default router;
