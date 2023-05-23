/* eslint-disable camelcase */
import { connection } from '../../config/connection.js';

const checkCount = ({ userId, productId }) => {
  const sql = {
    text: 'SELECT count FROM cart WHERE user_id=$1 AND product_id=$2',
    values: [userId, productId],
  };
  return connection.query(sql);
};

export const incrementCount = ({ userId, productId }) => checkCount({ userId, productId })
  .then((data) => data.rows[0])
  .then((product) => connection.query(`UPDATE cart SET count =${product.count + 1} WHERE user_id =${userId} AND product_id =${productId} RETURNING *;`));

export const decrementCount = ({ userId, productId }) => {
  const sql = {
    text: 'DELETE FROM cart WHERE user_id =$1 AND product_id =$2;',
    values: [userId, productId],
  };

  return checkCount({ userId, productId})
    .then((data) => data.rows[0])
    .then((product) => {
      if (product) {
        if (+(product.count) <= 1) {
          return connection.query(sql);
        }
      }
      return connection.query(`UPDATE cart SET count = ${product.count - 1} WHERE user_id = ${userId} AND product_id = ${productId} RETURNING *;`);
    });
};
