import { databasePool, queryDatabase } from '../services/database.js';
import {
  selectPaymentDetail,
  insertPaymentDetail,
  updatePaymentDetail,
  deletePaymentDetail,
} from '../utilities/queries.js';

export const getPaymentDetail = async (req, res) => {
  try {
    const placeholders = [];
    const paymentDetails = await queryDatabase(
      databasePool,
      selectPaymentDetail,
      placeholders
    );
    res.status(200).json(paymentDetails);
  } catch (error) {
    console.log('Payment-Details-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const addPaymentDetail = async (req, res) => {
  const { user_id, card_number } = req.body;
  try {
    const placeholders = [user_id, card_number];
    const addedPaymentDetail = await queryDatabase(
      databasePool,
      insertPaymentDetail,
      placeholders
    );
    res.status(200).json(addedPaymentDetail);
  } catch (error) {
    console.log('Payment-Details-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editPaymentDetail = async (req, res) => {
  const { payment_id, user_id, card_number } = req.body;
  try {
    const placeholders = [user_id, card_number, payment_id];
    const editedPaymentDetail = await queryDatabase(
      databasePool,
      updatePaymentDetail,
      placeholders
    );
    res.status(200).json(editedPaymentDetail);
  } catch (error) {
    console.log('Payment-Details-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removePaymentDetail = async (req, res) => {
  const { payment_id } = req.body;
  try {
    const placeholders = [payment_id];
    const removedPaymentDetail = await queryDatabase(
      databasePool,
      deletePaymentDetail,
      placeholders
    );
    res.status(200).json(removedPaymentDetail);
  } catch (error) {
    console.log('Payment-Details-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
