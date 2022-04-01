import * as api from '../api';

// * Action Creators
export const initializeDatabase = () => async () => {
  try {
    const result = await api.initializeDatabase();
    console.log('initialize-database-result', result);
  } catch (error) {
    console.log('initialize-database-error', error);
  }
};
