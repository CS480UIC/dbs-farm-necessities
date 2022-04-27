import { databasePool, queryDatabase } from '../services/database.js';
import { selectAddress,insertAddress,updateAddress,deleteAddress } from '../utilities/queries.js';

export const getAddress = async (req, res) => {
  try {
    const placeholders = [];
    const addresses = await queryDatabase(databasePool, selectAddress.all, placeholders);
    res.status(200).json(addresses);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addAddress = async (req, res) => {
  const { user_id, address } = req.body;
  try {
    const placeholders = [user_id, address];
    const addedAddress = await queryDatabase(databasePool, insertAddress, placeholders);
    res.status(200).json(addedAddress);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const editAddress = async (req, res) => {
  const { address_id,user_id,address } = req.body;
  try {
    const placeholders = [user_id,address,address_id];
    const editedAddress = await queryDatabase(databasePool, updateAddress, placeholders);
    res.status(200).json(editedAddress);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const removeAddress = async (req, res) => {
  const { address_id } = req.body;
  try {
    const placeholders = [address_id];
    const removedAddress = await queryDatabase(databasePool, deleteAddress, placeholders);
    res.status(200).json(removedAddress);
  } catch (error) {
    console.log('get-users-error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};