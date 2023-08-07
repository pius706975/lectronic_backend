const express = require('express')
const userRouters = express.Router()
const ctrl = require('./user.controllers')
const middle = require('../../middleware/middle.auth')
const upload = require('../../middleware/upload /multer.middleware')


userRouters.delete('/', middle.Authentication, ctrl.DeleteUser)

userRouters.put('/profile-picture', middle.Authentication, upload.single('image'), ctrl.UpdateProfilePicture)
userRouters.put('/edit-profile', middle.Authentication, ctrl.UpdateUser)
userRouters.put('/password', middle.Authentication, ctrl.UpdatePassword)

userRouters.get('/profile', middle.Authentication, ctrl.GetProfile)

module.exports = userRouters 