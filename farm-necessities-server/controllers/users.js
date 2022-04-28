import { databasePool, queryDatabase } from '../services/database.js';
import { selectUser } from '../utilities/queries.js';

export const getUsers = async (req, res) => {
  try {
    const placeholders = [];
    const users = await queryDatabase(databasePool, selectUser.all, placeholders);
    res.status(200).json(users);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getUsersIDs = async (req, res) => {
  try {
    const placeholders = [];
    const userIds = await queryDatabase(databasePool, selectUser.getIDs, placeholders);
    res.status(200).json(userIds);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
