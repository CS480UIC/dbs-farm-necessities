import express from 'express';
import { initializeDatabase } from '../controllers/intialize-database.js';

const router = express.Router();

router.get('/', initializeDatabase);

export default router;
