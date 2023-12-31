const express = require('express')
const router = express.Router()
const auth = require('../modules/auth/auth.routers')
const user = require('../modules/user/user.routers')
const category = require('../modules/product/category/category.routers')
const product = require('../modules/product/product.routers')
const cart = require('../modules/cart/cart.routers')

router.use('/auth', auth)
router.use('/user', user)
router.use('/category', category)
router.use('/product', product)
router.use('/cart', cart)

module.exports = router