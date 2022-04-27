import { databasePool, queryDatabase } from '../services/database.js';
import { deleteProduct, insertProduct, selectProduct, updateProduct } from '../utilities/queries.js';

export const getProduct = async (req, res) => {
  try {
    const placeholders = [];
    const products = await queryDatabase(databasePool, selectProduct, placeholders);
    res.status(200).json(products);
  } catch (error) {
    console.log('get-product-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addProduct = async (req, res) => {
  const { user_id, name, description, price } = req.body;
  try {
    const placeholders = [user_id, name, description, price];
    const addedProduct = await queryDatabase(databasePool, insertProduct, placeholders);
    res.status(200).json(addedProduct);
  } catch (error) {
    console.log('add-product-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editProduct = async (req, res) => {
  const { user_id, name, description, price, product_id } = req.body;
  try {
    const placeholders = [user_id, name, description, price, product_id];
    const editedProduct = await queryDatabase(databasePool, updateProduct, placeholders);
    res.status(200).json(editedProduct);
  } catch (error) {
    console.log('edit-product-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeProduct = async (req, res) => {
  const { product_id } = req.body;
  try {
    const placeholders = [product_id];
    const removedProduct = await queryDatabase(databasePool, deleteProduct, placeholders);
    res.status(200).json(removedProduct);
  } catch (error) {
    console.log('remove-product-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
