import { databasePool, queryDatabase } from '../services/database.js';
import { deleteOrderHistory, insertOrderHistory, selectOrderHistory, updateOrderHistory } from '../utilities/queries.js';

export const getOrderHistory = async (req, res) => {
  try {
    const placeholders = [];
    const orderHistories = await queryDatabase(databasePool, selectOrderHistory, placeholders);
    res.status(200).json(orderHistories);
  } catch (error) {
    console.log('order-history-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addOrderHistory = async (req, res) => {
  const { user_id,payment_id,address_id,delivery_date} = req.body;
  try {
    const placeholders = [user_id,payment_id,address_id,delivery_date];
    const addedOrderHistory = await queryDatabase(databasePool, insertOrderHistory, placeholders);
    res.status(200).json(addedOrderHistory);
  } catch (error) {
    console.log('order-history-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editOrderHistory = async (req, res) => {
  const { user_id,payment_id,address_id,delivery_date,order_id} = req.body;
  try {
    const placeholders = [user_id,payment_id,address_id,delivery_date,order_id];
    const editedOrderHistory = await queryDatabase(databasePool, updateOrderHistory, placeholders);
    res.status(200).json(editedOrderHistory);
  } catch (error) {
    console.log('order-history-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeOrderHistory = async (req, res) => {
  const { order_id } = req.body;
  try {
    const placeholders = [order_id];
    const removedOrderHistory = await queryDatabase(databasePool, deleteOrderHistory, placeholders);
    res.status(200).json(removedOrderHistory);
  } catch (error) {
    console.log('order-history-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
