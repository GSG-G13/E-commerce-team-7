import { connection } from '../../config/connection.js';
import { checkCount } from './count.js';

export const addToCartQuery = ({ id, productId }) => {

  return checkCount({user_id: id, product_id: productId})
    .then((data) => {
      if(data.rowCount) {
        return {
          text: 'UPDATE cart SET count =$1 WHERE user_id =$2 AND product_id =$3 RETURNING *',
          values: [data.rows[0].count + 1, id, productId]
        }
      } 
        return {
          text: 'INSERT INTO cart(user_id, product_id) VALUES($1, $2) RETURNING *',
          values: [id, productId],
        };
    }).then((sql) => connection.query(sql) )
 
  
};
