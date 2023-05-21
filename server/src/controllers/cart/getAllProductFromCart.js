import { getProductFromCartQuery } from "../../database/query/index.js";
const getAllProductsFromCart = (req, res) => {
    const {body: {userId}} = req;
    getProductFromCartQuery({userId})
    .then(response => {
        console.log(response.rows);
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error);
        res.json({error})
    })
}
export default getAllProductsFromCart;