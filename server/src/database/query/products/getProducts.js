import { connection } from '../../config/connection.js';

export const gitProductsQuery = async () => {
  const data = await connection.query('SELECT * FROM products');
  const result = data.rows;
  return result;
};
