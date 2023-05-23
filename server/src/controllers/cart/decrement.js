import { decrementCount } from '../../database/index.js';

export const decrement = (req, res, next) => {
  const userId = req.userData.id;
  const { productId } = req.params;

  decrementCount({ userId, productId })
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
