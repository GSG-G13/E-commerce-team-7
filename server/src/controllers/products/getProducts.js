// import { connection } from '../../database/config/connection.js';
import { connection } from '../../database/config/connection.js';
// const connection = require('../../database/config/connection.js')

export const getProducts = async (req, res) => {
  try {
    const query = await connection.query('SELECT * FROM products');
    const result = await query.rows;
    res.json(result);
  } catch (e) {
    console.warn(e.message);
  }
};
