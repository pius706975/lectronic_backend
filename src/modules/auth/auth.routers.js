const express = require('express')
const authRouters = express.Router()
const ctrl = require('./auth.controllers')



authRouters.post('/register', ctrl.Register)
authRouters.get('/verification', ctrl.VerifyEmail)

module.exports = authRouters