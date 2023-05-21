import connection from '../../config/connection.js'

export const deleteFromCart = ({user_id, product_id}) => {
  const sql = {
    text : "DELETE FROM cart WHERE user_id=$1 AND product_id=$2 RETURNING 'SUCCESSFULLY'",
    values: [user_id, product_id]
  }
  return connection.query(sql)
}