/* eslint-disable camelcase */
import { decrementCount } from '../../database/index.js';

export const decrement = (req, res, next) => {
  const user_id = req.userData.id;
  const { product_id } = req.params;

  decrementCount({ user_id, product_id })
    .then((data) => {
      if (!data.rows.length) {
        return res.json({
          msg: 'deleted successfully',
        });
      }
      return res.json({
        count: data.rows[0].count,
        msg: 'Successfully',
      });
    }).catch(next);
};
