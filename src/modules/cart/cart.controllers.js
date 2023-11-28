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

controller.UpdateItem = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            const qty = parseInt(req.body.qty, 10)
            const queries = {
                qty: qty,
                cart_id: req.params.cart_id
            }

            const dataExists = await models.GetItemByID(queries)
            if (dataExists.length <= 0) {
                return response(res, 404, {message: 'Item not found'})
            } 

            const priceData = await models.GetItemPrice({product_id: dataExists[0].product_id})
            const price = parseInt(priceData[0].price)
            const getItemPrices = price * qty
            const {discountedPrice, appliedDiscount} = discount(getItemPrices)

            const availableStock = await stock.GetProductStock({product_id: dataExists[0].product_id})

            if (qty > availableStock[0].stock) {
                return response(res, 400, {message: 'Out of stock'})
            }

            const updateData = {
                qty: qty,
                item_prices: getItemPrices,
                discount: appliedDiscount,
                total: discountedPrice,
                cart_id: req.params.cart_id
            }

            const result = await models.UpdateItem(updateData)

            return response(res, 200, result)
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetAllItems = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }
        
        const products = await models.GetAllItems()
        if (products.length <= 0) {
            return response(res, 404, {message: `You haven't added any products yet`})
        }

        const result = products.map(data => ({
            cart_id: data.cart_id,
            user_id: data.user_id,
            product_data: {
                product_id: data.product_id,
                category_name: data.category_name,
                name: data.product_name,
                price: data.price,
                stock: data.stock,
                sold: data.sold,
                image: data.image,
                rating: data.rating,
                description: data.description,
                },
                qty: data.qty,
                item_prices: data.item_prices,
                discount: data.discount,
                total: data.total,
                status: data.status,
                created_at: data.created_at,
                updated_at: data.updated_at,
        }))

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetItemByName = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }

        const product_name = req.query.product_name

        const products = await models.GetItemByName({product_name: product_name})
        if (products.length <= 0) {
            return response(res, 404, {message: 'Item not found'})
        }

        const result = products.map(data => ({
            cart_id: data.cart_id,
            user_id: data.user_id,
            product_data: {
                product_id: data.product_id,
                category_name: data.category_name,
                name: data.product_name,
                price: data.price,
                stock: data.stock,
                sold: data.sold,
                image: data.image,
                rating: data.rating,
                description: data.description,
                },
                qty: data.qty,
                item_prices: data.item_prices,
                discount: data.discount,
                total: data.total,
                status: data.status,
                created_at: data.created_at,
                updated_at: data.updated_at,
        }))

        return response(res, 200, result)
    } catch (error) {
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
        const product = await models.GetItemByID({cart_id})
        if (product.length <= 0) {
            return response(res, 404, {message: 'Item not found'})
        }

        const result = product.map(data => ({
            cart_id: data.cart_id,
            user_id: data.user_id,
            product_data: {
                product_id: data.product_id,
                category_id: data.category_id,
                name: data.prod_name,
                price: data.price,
                stock: data.stock,
                sold: data.sold,
                image: data.image,
                rating: data.rating,
                description: data.description,
                },
                qty: data.qty,
                item_prices: data.item_prices,
                discount: data.discount,
                total: data.total,
                status: data.status,
                created_at: data.created_at,
                updated_at: data.updated_at,
        }))

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

module.exports = controller