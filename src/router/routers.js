const express = require('express')
const router = express.Router()
const auth = require('../modules/auth/auth.routers')
const user = require('../modules/user/user.routers')

router.use('/auth', auth)
router.use('/user', user)

module.exports = router