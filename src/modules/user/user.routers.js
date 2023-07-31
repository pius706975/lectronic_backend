const express = require('express')
const userRouters = express.Router()
const ctrl = require('./user.controllers')
const middle = require('../../middleware/middle.auth')

userRouters.delete('/', middle.Authentication, ctrl.DeleteUser)

userRouters.get('/', middle.Authentication, ctrl.GetProfile)

module.exports = userRouters