import { addToCartQuery } from '../../database/query/index.js';

export const addToCartControllers = (req, res, next) => {
  const { body: { productId } } = req;
  const { userData: { id } } = req;
  addToCartQuery({ id, productId })
    .then((response) => {
      res.json({
        status: 201,
        data: response.rows[0],
      });
    })
    .catch((error) => {
      next(error);
    });
};
