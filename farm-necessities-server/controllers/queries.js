import { databasePool, queryDatabase } from '../services/database.js';
import { queries } from '../utilities/queries.js';

export const getQueries = async (req, res) => {
  try {
    const placeholders = [];
    const query = await queryDatabase(databasePool, queries[req.params.queryType], placeholders);
    res.status(200).json(query);
  } catch (error) {
    console.log('query-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};