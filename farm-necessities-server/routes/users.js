import express from 'express';
import { getUsers,getUsersIDs } from '../controllers/users.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth, getUsers);
// router.get('/userIds', auth, getUsersIDs);
export default router;
