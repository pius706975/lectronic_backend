const express = require('express')
const productRouters = express.Router()
const ctrl = require('./product.controller')
const middle = require('../../middleware/middle.auth')
const upload = require('../../middleware/upload/multer.middleware')

productRouters.post('', middle.Authentication, middle.IsAdmin, ctrl.AddProduct)

productRouters.delete('/:product_id', middle.Authentication, middle.IsAdmin, ctrl.DeleteProduct)

productRouters.put('/edit/:product_id', middle.Authentication, middle.IsAdmin, ctrl.UpdateProduct)
productRouters.put('/edit-pic/:product_id', middle.Authentication, middle.IsAdmin, upload.single('image'), ctrl.UpdateProductPicture)

productRouters.get('', ctrl.GetAllProducts)
productRouters.get('/id=:product_id', ctrl.GetProductByID)
productRouters.get('/category', ctrl.GetProductByCategory)
productRouters.get('/name', ctrl.GetProductByName)

module.exports = productRouters