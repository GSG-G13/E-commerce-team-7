import {addToCartQuery} from '../../database/query/index.js'
const addToCartControllers = (req, res) => {
    const { body: { userId, productId } } = req;
    addToCartQuery({userId, productId})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error);
        res.json({
            error
        })
    })

};
export default addToCartControllers;