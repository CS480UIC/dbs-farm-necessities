import express from 'express';
import { getUsers } from '../controllers/users.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getUsers);

export default router;
