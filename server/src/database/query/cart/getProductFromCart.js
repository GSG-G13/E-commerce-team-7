import connection from '../../config/connection.js';



const getAllProductsFromCartController = ({id}) => {
    const query = {
        text : 'select * from products  JOIN cart on cart.product_id = products.id  WHERE cart.user_id = $1',
        values: [id]
    }
    return connection.query(query)

};
export default getAllProductsFromCartController;