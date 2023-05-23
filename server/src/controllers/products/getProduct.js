import { getProduct } from '../../database/index.js'


export const getProductController = (req, res, next) => {
  console.log('hi');
  const { id } = req.params
  getProduct({ id })
    .then(({ rows }) => {
      res.json(rows[0])
    }).catch(next)
} 