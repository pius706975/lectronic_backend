const express = require('express')
const productRouters = express.Router()
const ctrl = require('./product.controller')
const {Authentication, IsAdmin} = require('../../middleware/middle.auth')
const upload = require('../../middleware/upload/multer.middleware')

productRouters.post('', Authentication, IsAdmin, ctrl.AddProduct)

productRouters.delete('/:product_id', Authentication, IsAdmin, ctrl.DeleteProduct)

productRouters.put('/edit/:product_id', Authentication, IsAdmin, ctrl.UpdateProduct)
productRouters.put('/edit-pic/:product_id', Authentication, IsAdmin, upload.single('image'), ctrl.UpdateProductPicture)

productRouters.get('', ctrl.GetAllProducts)
productRouters.get('/id=:product_id', ctrl.GetProductByID)
productRouters.get('/category', ctrl.GetProductByCategory)
productRouters.get('/name', ctrl.GetProductByName)

module.exports = productRouters