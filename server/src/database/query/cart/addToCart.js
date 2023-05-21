import connection from "../../config/connection.js";
const addToCartQuery = ({ userId, productId }) => {
    const query = {
        text: 'INSERT INTO cart(user_id, product_id) VALUES($1, $2) RETURNING *',
        values: [userId, productId]
    }
    return connection.query(query);

}
export default addToCartQuery;