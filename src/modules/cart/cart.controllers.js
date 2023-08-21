const controllers = {}
const response = require('../../libs/responses')
const multer = require('multer')
const models = require('./cart.models')
const formData = multer().none()
const discount = require('../../libs/getDiscount')

controllers.AddToCart = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            const product_id = req.body.product_id
            const qty = parseInt(req.body.qty, 10)
            const priceData = await models.GetItemPrice({product_id: product_id})
            if (!priceData || priceData.length === 0) {
                return response(res, 400, {message: 'Product cannot be counted'})
            }

            const price = parseInt(priceData[0].price)
            const getItemPrices = price * qty
            const {discountedPrice, appliedDiscount} = discount(getItemPrices)

            const queries = {
                user_id: user.user_id,
                product_id: product_id,
                qty: qty,
                item_prices: getItemPrices,
                discount: appliedDiscount,
                total: discountedPrice,
                status: req.body.status ? req.body.status : 'Ready to pay'
            }

            const result = await models.AddToCart(queries)

            return response(res, 200, result)
        })
    } catch (error) {
        return response(res, 500, error.message)
    }
}

module.exports = controllers