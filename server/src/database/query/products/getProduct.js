import { connection } from '../../config/index.js'

export const getProduct = ({ id }) => {
  const sql = {
    text : 'SELECT * FROM products WhERE id=$1',
    values: [id]
  }
  return connection.query(sql)
}
