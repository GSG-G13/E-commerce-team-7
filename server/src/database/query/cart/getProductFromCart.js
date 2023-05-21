import connection from '../../config/connection.js';



const getAllProductsFromCartController = ({userId}) => {
    const query = {
        text : 'select * from products LEFT JOIN cart on cart.product_id = products.id  WHERE cart.user_id = $1',
        values: [userId]
    }
    return connection.query(query)

};
export default getAllProductsFromCartController;