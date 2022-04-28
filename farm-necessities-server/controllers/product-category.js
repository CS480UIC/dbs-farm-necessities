import { databasePool, queryDatabase } from '../services/database.js';
import { deleteProductCategory, insertProductCategory, selectProductCategory, updateProductCategory } from '../utilities/queries.js';

export const getProductCategory = async (req, res) => {
  try {
    const placeholders = [];
    const productCategories = await queryDatabase(databasePool, selectProductCategory, placeholders);
    res.status(200).json(productCategories);
  } catch (error) {
    console.log('product-category-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addProductCategory = async (req, res) => {
  const { product_id,category_id} = req.body;
  try {
    const placeholders = [product_id,category_id];
    const addedProductCategory = await queryDatabase(databasePool, insertProductCategory, placeholders);
    res.status(200).json(addedProductCategory);
  } catch (error) {
    console.log('product-category-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editProductCategory = async (req, res) => {
  const { product_id,category_id,product_category_id} = req.body;
  try {
    const placeholders = [product_id,category_id,product_category_id];
    const editedProductCategory = await queryDatabase(databasePool, updateProductCategory, placeholders);
    res.status(200).json(editedProductCategory);
  } catch (error) {
    console.log('product-category-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeProductCategory = async (req, res) => {
  const { product_category_id } = req.body;
  try {
    const placeholders = [product_category_id];
    const removedProductCategory = await queryDatabase(databasePool, deleteProductCategory, placeholders);
    res.status(200).json(removedProductCategory);
  } catch (error) {
    console.log('product-category-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
