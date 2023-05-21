import { deleteFromCart } from '../../database/query/index.js';

export const deleteProduct = (req, res) => {
  console.log('hi');
  // const user_id = res.userData.id;
  const user_id = 1
  const { product_id } = req.params

  deleteFromCart({user_id, product_id})
    // .then((data) => data.rows[0])
    .then((data) => {
      if(data.rowCount){
      res.status(201).json({
        error:false,
        message: 'successfully'
      })
    }
    else {throw new CustomError('this product dos not exist!')}
    }).catch(console.log)
}