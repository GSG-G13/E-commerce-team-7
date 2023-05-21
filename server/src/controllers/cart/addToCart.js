import {addToCartQuery} from '../../database/query/index.js'
const addToCartControllers = (req, res) => {
    const { body: { userId, productId } } = req;
    addToCartQuery({userId, productId})
    .then(response => {
        res.json({
            error: false,
            data:response.rows[0]
        })
    })
    .catch(error => {
        next(error)
    })

};
export default addToCartControllers;