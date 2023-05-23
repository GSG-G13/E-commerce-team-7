import { connection } from '../../config/connection.js';
import { checkCount } from './count.js';

export const addToCartQuery = ({ id, productId }) => {
  checkCount({user_id: id, product_id: productId})
    .then((data) => console.log(data.rowCount))
  const query = {
    text: 'INSERT INTO cart(user_id, product_id) VALUES($1, $2) RETURNING *',
    values: [id, productId],
  };
  return connection.query(query);
};
