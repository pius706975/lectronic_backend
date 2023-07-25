const express = require('express')
const router = express.Router()
const auth = require('../modules/auth/auth.routers')

router.use('/auth', auth)

module.exports = router