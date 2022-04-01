import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { databasePool, queryDatabase } from '../services/database.js';
import { config } from '../utilities/config.js';
import { insertUser, selectUser } from '../utilities/queries.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const placeholders = [email];
    let userExists = await queryDatabase(databasePool, selectUser.byEmail, placeholders);
    if (userExists && userExists.length === 0) return res.status(404).json({ message: 'User does not exist.' });

    userExists = userExists[0];
    const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ email: userExists.email, user_id: userExists.user_id }, config.tokenSecret, {
      expiresIn: '1h',
    });
    res.status(200).json({ result: userExists, token });
  } catch (error) {
    console.log('login-error', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, phone_number, account_type } = req.body;
  try {
    let placeholders = [email];
    const userExists = await queryDatabase(databasePool, selectUser.byEmail, placeholders);
    if (userExists && userExists.length > 0) return res.status(409).json({ message: 'User already exists.' });

    const hashedPassword = await bcrypt.hash(password, 12);
    placeholders = [name, hashedPassword, email, phone_number, account_type];
    const result = await queryDatabase(databasePool, insertUser, placeholders);
    const token = jwt.sign({ email: email, user_id: result.insertId }, config.tokenSecret, {
      expiresIn: '1h',
    });

    placeholders = [email];
    const addedUser = await queryDatabase(databasePool, selectUser.byEmail, placeholders);
    if (addedUser && addedUser.length === 0) return res.status(404).json({ message: 'Error in registering new user' });
    res.status(200).json({ result: addedUser[0], token });
  } catch (error) {
    console.log('signup-error', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
