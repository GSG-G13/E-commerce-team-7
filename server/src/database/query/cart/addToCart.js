import { connection } from '../../config/connection.js';

export const addToCartQuery = ({ id, productId }) => {
  const query = {
    text: 'INSERT INTO cart(user_id, product_id) VALUES($1, $2) RETURNING *',
    values: [id, productId],
  };
  return connection.query(query);
};
