/* eslint-disable camelcase */
import { decrementCount } from '../../database/index.js';

const decrement = (req, res, next) => {
  const user_id = req.userData.id;
  const { product_id } = req.params;

  decrementCount({ user_id, product_id })
    .then((data) => {
      if (!data.rows.length) {
        console.log('hi');
        return res.json({
          msg: 'deleted successfully',
        });
      }
      res.json({
        count: data.rows[0].count,
        msg: 'Successfully',
      });
    }).catch(next);
};

export default decrement;
