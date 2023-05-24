import { connection } from '../../config/connection.js';

export const deleteFromCart = ({productId}) => {
  const sql = {
    text : "DELETE FROM cart WHERE product_id=$1 RETURNING *",
    values: [productId]
  }
  return connection.query(sql)
};
