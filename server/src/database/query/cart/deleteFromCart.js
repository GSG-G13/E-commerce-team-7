import connection from '../../config/connection.js';

// eslint-disable-next-line import/prefer-default-export
export const deleteFromCart = ({ userID, productId }) => {
  const sql = {
    text: 'DELETE FROM cart WHERE user_id=$1 AND product_id=$2',
    values: [userID, productId],
  };
  return connection.query(sql);
};
