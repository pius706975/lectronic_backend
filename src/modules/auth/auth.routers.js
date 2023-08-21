const express = require('express')
const authRouters = express.Router()
const ctrl = require('./auth.controllers')
const {Authentication} = require('../../middleware/middle.auth')

authRouters.post('/register', ctrl.Register)
authRouters.post('/login', ctrl.Login)
authRouters.post('/refresh_token', ctrl.RefreshToken)
authRouters.post('/logout', Authentication, ctrl.Logout)

authRouters.get('/verification', ctrl.VerifyEmail)
authRouters.get('/resend', ctrl.ResendVerification)

module.exports = authRouters