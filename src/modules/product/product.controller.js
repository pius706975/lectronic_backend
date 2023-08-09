const controller = {}
const models = require('./product.models')
const response = require('../../libs/responses')
const multer = require('multer')
const formData = multer().none()
const uploadFile = require('../../middleware/upload/cloudinary')

controller.AddProduct = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            const queries = {
                category_id: req.body.category_id,
                name: req.body.name,
                price: req.body.price ? req.body.price : 0,
                stock: req.body.stock ? req.body.stock : 0,
                sold: req.body.sold ? req.body.sold : 0,
                image: req.body.image ? req.body.image : process.env.DEFAULT_PRODPIC,
                rating: req.body.rating ? req.body.rating : 0,
                description: req.body.description
            }

            const productExists = await models.ProductExists(queries)
            if (!req.body.category_id) {
                return response(res, 400, {message: 'Category id cannot be empty'})
            } else if (!req.body.name) {
                return response(res, 400, {message: 'Product name cannot be empty'})
            } else if (productExists.length >= 1) {
                return response(res, 400, {message: 'Product already exists'})
            }

            const result = await models.AddProduct(queries)

            return response(res, 201, result)
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.UpdateProduct = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }
            
            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            // const queries = {
            //     product_id
            // }
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetAllProduct = async (req, res)=>{
    try {
        const {page, limit} = req.query
        const pagination = page ? parseInt(page) : 1
        const limitation = limit ? parseInt(limit) : 5
        const offset = pagination === 1 ? 0 : limitation * (pagination - 1)

        const result = await models.GetAllProduct({limit: limitation, offset})

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetProductByID = async (req, res)=>{
    try {
        const product_id = req.params.product_id
        const result = await models.GetProductByID({product_id})
        if (result.length <= 0) {
            return response(res, 404, {message: 'Product not found'})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

module.exports = controller