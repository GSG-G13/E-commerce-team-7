import { deleteFromCart } from '../../database/query/index.js';
import { CustomError } from '../../utils/index.js';

export const deleteProduct = (req, res, next) => {
  // const userId = req.userData.id
  const { productId } = req.params;
  console.log(productId);
  deleteFromCart({productId})
    .then(({rows}) => {
      if(rows.length > 0){
      res.status(201).json({
        status:201,
        message: 'successfully',
        rows
      })
    }
    else {throw new CustomError(401,'this product dos not exist!')}
    })
    .catch((error) => {
      console.log(error);
      next(error)
    })
}