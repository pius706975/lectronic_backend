const express = require('express')
const authRouters = express.Router()
const ctrl = require('./auth.controllers')



authRouters.post('/register', ctrl.Register)

module.exports = authRouters