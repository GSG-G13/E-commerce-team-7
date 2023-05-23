/* eslint-disable camelcase */
import { connection } from '../../config/connection.js';

const checkCount = ({ user_id, product_id }) => {
  const sql = {
    text: 'SELECT count FROM cart WHERE user_id=$1 AND product_id=$2',
    values: [user_id, product_id],
  };
  return connection.query(sql);
};

export const incrementCount = ({ user_id, product_id }) => checkCount({ user_id, product_id })
  .then((data) => data.rows[0])
  .then((product) => connection.query(`UPDATE cart SET count =${product.count + 1} WHERE user_id =${user_id} AND product_id =${product_id} RETURNING *;`));

export const decrementCount = ({ user_id, product_id }) => {
  const sql = {
    text: 'DELETE FROM cart WHERE user_id =$1 AND product_id =$2;',
    values: [user_id, product_id],
  };

  return checkCount({ user_id, product_id })
    .then((data) => data.rows[0])
    .then((product) => {
      if (product) {
        if (+(product.count) <= 1) {
          return connection.query(sql);
        }
      }
      return connection.query(`UPDATE cart SET count = ${product.count - 1} WHERE user_id = ${user_id} AND product_id = ${product_id} RETURNING *;`);
    });
};
