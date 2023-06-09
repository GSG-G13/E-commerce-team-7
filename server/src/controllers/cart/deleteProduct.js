import { deleteFromCart } from '../../database/query/index.js';
import { CustomError } from '../../utils/index.js';

export const deleteProduct = (req, res, next) => {
  const { productId } = req.params;
  const userId = req.userData.id;
  deleteFromCart({ productId, userId })
    .then(({ rows }) => {
      if (rows.length > 0) {
        res.status(201).json({
          status: 201,
          message: 'successfully',
          rows
        })
      }
      else { throw new CustomError(401, 'this product dos not exist!') }
    })
    .catch((error) => {
      next(error)
    })
}
