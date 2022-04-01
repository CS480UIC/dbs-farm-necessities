import fs from 'fs';
import { databasePool, queryDatabase } from '../services/database.js';

export const initializeDatabase = async (req, res) => {
  try {
    const placeholders = [];
    const sqlFile = fs.readFileSync('initializeDB.sql', 'utf8');
    const results = await queryDatabase(databasePool, sqlFile, placeholders);
    res.status(200).json(results);
  } catch (error) {
    console.log('initialize-database-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
