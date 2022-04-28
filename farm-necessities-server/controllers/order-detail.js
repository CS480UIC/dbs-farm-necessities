import { databasePool, queryDatabase } from '../services/database.js';
import { deleteOrderDetail, insertOrderDetail, selectOrderDetail, updateOrderDetail } from '../utilities/queries.js';

export const getOrderDetail = async (req, res) => {
  try {
    const placeholders = [];
    const orderDetails = await queryDatabase(databasePool, selectOrderDetail, placeholders);
    res.status(200).json(orderDetails);
  } catch (error) {
    console.log('get-order-detail-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addOrderDetail = async (req, res) => {
  const { order_id, product_id, quantity } = req.body;
  try {
    const placeholders = [order_id, product_id, quantity];
    const addedOrderDetail = await queryDatabase(databasePool, insertOrderDetail, placeholders);
    res.status(200).json(addedOrderDetail);
  } catch (error) {
    console.log('add-order-detail-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editOrderDetail = async (req, res) => {
  const { order_id, product_id, quantity, order_detail_id } = req.body;
  try {
    const placeholders = [order_id, product_id, quantity, order_detail_id];
    const editedOrderDetail = await queryDatabase(databasePool, updateOrderDetail, placeholders);
    res.status(200).json(editedOrderDetail);
  } catch (error) {
    console.log('edit-order-detail-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeOrderDetail = async (req, res) => {
  const { order_detail_id } = req.body;
  try {
    const placeholders = [order_detail_id];
    const removedOrderDetail = await queryDatabase(databasePool, deleteOrderDetail, placeholders);
    res.status(200).json(removedOrderDetail);
  } catch (error) {
    console.log('remove-order-detail-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
