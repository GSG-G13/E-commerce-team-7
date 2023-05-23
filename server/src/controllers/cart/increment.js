/* eslint-disable camelcase */
import { incrementCount } from '../../database/index.js';

export const increment = (req, res, next) => {
  const userId = req.userData.id;
  const { productId } = req.params;

  incrementCount({ userId, productId })
    .then((data) => {
      res.json({
        count: data.rows[0].count,
        msg: 'Successfully',
      });
    }).catch(next);
};
