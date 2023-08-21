const express = require('express')
const cartRouters = express.Router()
const ctrl = require('./cart.controllers')
const {Authentication, IsAdmin, IsUser} = require('../../middleware/middle.auth')

cartRouters.post('', Authentication, IsUser, ctrl.AddToCart)

cartRouters.delete('/id=:cart_id', Authentication, IsUser, ctrl.DeleteItem)

cartRouters.get('', Authentication, IsUser, ctrl.GetAllItems)
cartRouters.get('/id=:cart_id', Authentication, IsUser, ctrl.GetItemByID)

module.exports = cartRouters