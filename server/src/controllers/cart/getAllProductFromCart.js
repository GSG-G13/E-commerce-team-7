import { getProductFromCartQuery } from "../../database/query/index.js";
const getAllProductsFromCart = (req, res) => {
    const {userData: { id } } = req;
    getProductFromCartQuery({id})
    .then(({rows}) => {
        return res.json({
            status: 201,
            rows   
        })
    })
    .catch(error => {
        res.json({error})
    })
}
export default getAllProductsFromCart;
