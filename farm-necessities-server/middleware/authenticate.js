import jwt from 'jsonwebtoken';
import { config } from '../utilities/config.js';

/*
 * wants to fetch users
 * click the fetch users button -> auth middleware (next) -> users controller...
 */
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(403).json({ error: 'A valid token is required' });

    jwt.verify(token, config.tokenSecret, (error, decoded) => {
      if (error) return res.status(403).json({ error: 'Invalid token' });
      req.user_id = decoded?.user_id;
      next();
    });
  } catch (error) {
    console.log('auth-middleware-error', error);
  }
};

export default auth;
