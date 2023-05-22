import {addToCartQuery} from '../../database/query/index.js'
const addToCartControllers = (req, res, next) => {
    const { body: { productId } } = req;
    const {userData: { id } } = req
    addToCartQuery({id, productId})
    .then(response => {
        res.json({
            status: 201,
            data:response.rows[0]
        })
    })
    .catch(error => {
        console.log(error);
        next(error)
    })

};
export default addToCartControllers;