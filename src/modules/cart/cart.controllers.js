const controller = {}
const response = require('../../libs/responses')
const multer = require('multer')
const models = require('./cart.models')
const stock = require('../product/product.models')
const formData = multer().none()
const discount = require('../../libs/get.discount')

controller.AddToCart = async (req, res)=>{
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
            const getStock = await stock.GetProductStock({product_id})
            const availableStock = getStock[0].stock
            const priceData = await models.GetItemPrice({product_id: product_id})
            
            if (!priceData || priceData.length === 0) {
                return response(res, 400, {message: 'Product cannot be counted'})
            } else if (qty > availableStock) {
                return response(res, 400, {message: 'Out of stock'})
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
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.DeleteItem = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }

        const cart_id = req.params.cart_id
        const dataExists = await models.GetItemByID({cart_id})
        if (dataExists.length <= 0) {
            return response(res, 404, {message: 'Item not found'})
        }

        await models.DeleteItem({cart_id})

        return response(res, 200, {message: 'Item has been deleted'})
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetAllItems = async (req, res)=>{
    try {
        const result = await models.GetAllItems()
        if (result.length <= 0) {
            return response(res, 404, {message: `You haven't added any products yet`})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetItemByID = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }

        const cart_id = req.params.cart_id
        const result = await models.GetItemByID({cart_id})
        if (result.length <= 0) {
            return response(res, 404, {message: 'Item not found'})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

module.exports = controller