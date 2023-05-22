/* eslint-disable camelcase */
import { incrementCount } from '../../database/index.js';

const increment = (req, res, next) => {
  const user_id = req.userData.id;
  const { product_id } = req.params;

  incrementCount({ user_id, product_id })
    .then((data) => {
      res.json({
        count: data.rows[0].count,
        msg: 'Successfully',
      });
    }).catch(next);
};

export default increment;
