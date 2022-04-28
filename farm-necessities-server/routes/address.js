import express from 'express';
// import { getUsers } from '../controllers/users.js';
import {getAddress,addAddress,editAddress,removeAddress} from '../controllers/address.js';
import auth from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', auth,getAddress);
router.post('/',auth,addAddress);
router.delete('/',auth,removeAddress);
router.put('/',auth,editAddress);

export default router;
