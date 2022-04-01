import mysql from 'mysql2';
import { config } from '../utilities/config.js';

// database connection settings
const databaseConnectionInfo = {
  host: config.databaseHost,
  port: config.databasePort,
  database: config.databaseName,
  user: config.databaseAdmin,
  password: config.databasePassword,
  multipleStatements: true,
};

export const databasePool = mysql.createPool(databaseConnectionInfo);

export const queryDatabase = (database, query, parameters) => {
  return new Promise((resolve, reject) => {
    database.query(query, parameters, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      const queryResult = JSON.parse(JSON.stringify(results));
      resolve(queryResult);
    });
  });
};
