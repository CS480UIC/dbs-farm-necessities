import { databasePool, queryDatabase } from '../services/database.js';
import {
  selectRating,
  insertRating,
  updateRating,
  deleteRating,
} from '../utilities/queries.js';

export const getRating = async (req, res) => {
  try {
    const placeholders = [];
    const rating = await queryDatabase(
      databasePool,
      selectRating,
      placeholders
    );
    res.status(200).json(rating);
  } catch (error) {
    console.log('rating-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const addRating = async (req, res) => {
  const { user_id, product_id, rating, review } = req.body;
  try {
    const placeholders = [user_id, product_id, rating, review];
    const addedRating = await queryDatabase(
      databasePool,
      insertRating,
      placeholders
    );
    res.status(200).json(addedRating);
  } catch (error) {
    console.log('rating-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editRating = async (req, res) => {
  const { user_id, product_id, rating, review, rating_id } = req.body;
  try {
    const placeholders = [user_id, product_id, rating, review, rating_id];
    const editedRating = await queryDatabase(
      databasePool,
      updateRating,
      placeholders
    );
    res.status(200).json(editedRating);
  } catch (error) {
    console.log('rating-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeRating = async (req, res) => {
  const { rating_id } = req.body;
  try {
    const placeholders = [rating_id];
    const removedRating = await queryDatabase(
      databasePool,
      deleteRating,
      placeholders
    );
    res.status(200).json(removedRating);
  } catch (error) {
    console.log('rating-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
