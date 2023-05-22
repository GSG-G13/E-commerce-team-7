import { getProductFromCartQuery } from "../../database/query/index.js";
const getAllProductsFromCart = (req, res) => {
    const {userData: { id } } = req
    getProductFromCartQuery({id})
    .then(({rows}) => {
        res.json({
            status: 201,
            rows   
        })
    })
    .catch(error => {
        console.log(error);
        res.json({error})
    })
}
export default getAllProductsFromCart;