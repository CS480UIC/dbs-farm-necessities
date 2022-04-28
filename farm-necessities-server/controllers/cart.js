import { databasePool, queryDatabase } from '../services/database.js';
import { deleteCart, insertCart, selectCart, updateCart } from '../utilities/queries.js';

export const getCart = async (req, res) => {
  try {
    const placeholders = [];
    const productCategories = await queryDatabase(databasePool, selectCart, placeholders);
    res.status(200).json(productCategories);
  } catch (error) {
    console.log('cart-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addCart = async (req, res) => {
  const { user_id,product_id,quantity} = req.body;
  try {
    const placeholders = [user_id,product_id,quantity];
    const addedProductCategory = await queryDatabase(databasePool, insertCart, placeholders);
    res.status(200).json(addedProductCategory);
  } catch (error) {
    console.log('cart-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editCart = async (req, res) => {
  const { user_id,product_id,quantity,cart_id} = req.body;
  try {
    const placeholders = [user_id,product_id,quantity,cart_id];
    const editedProductCategory = await queryDatabase(databasePool, updateCart, placeholders);
    res.status(200).json(editedProductCategory);
  } catch (error) {
    console.log('cart-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeCart = async (req, res) => {
  const { cart_id } = req.body;
  try {
    const placeholders = [cart_id];
    const removedProductCategory = await queryDatabase(databasePool, deleteCart, placeholders);
    res.status(200).json(removedProductCategory);
  } catch (error) {
    console.log('cart-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
