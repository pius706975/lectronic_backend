const express = require('express')
const productRouters = express.Router()
const ctrl = require('./product.controller')
const middle = require('../../middleware/middle.auth')
const upload = require('../../middleware/upload/multer.middleware')

productRouters.post('', middle.Authentication, middle.IsAdmin, ctrl.AddProduct)

module.exports = productRouters