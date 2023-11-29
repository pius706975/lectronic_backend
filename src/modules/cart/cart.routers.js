const express = require('express')
const cartRouters = express.Router()
const ctrl = require('./cart.controllers')
const {Authentication, IsUser} = require('../../middleware/middle.auth')

cartRouters.post('', Authentication, IsUser, ctrl.AddToCart)

cartRouters.delete('/id=:cart_id', Authentication, IsUser, ctrl.DeleteItem)

cartRouters.put('/id=:cart_id', Authentication, IsUser, ctrl.UpdateItem)
cartRouters.put('/increase=:cart_id', Authentication, IsUser, ctrl.UpdateItemQtyIncrease)
cartRouters.put('/decrease=:cart_id', Authentication, IsUser, ctrl.UpdateItemQtyDecrease)

cartRouters.get('', Authentication, IsUser, ctrl.GetAllItems)
cartRouters.get('/id=:cart_id', Authentication, IsUser, ctrl.GetItemByID)
cartRouters.get('/search', Authentication, IsUser, ctrl.GetItemByName)

module.exports = cartRouters