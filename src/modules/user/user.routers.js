const express = require('express')
const userRouters = express.Router()
const ctrl = require('./user.controllers')
const {Authentication} = require('../../middleware/middle.auth')
const upload = require('../../middleware/upload/multer.middleware')


userRouters.delete('/', Authentication, ctrl.DeleteUser)

userRouters.put('/profile-picture', Authentication, upload.single('image'), ctrl.UpdateProfilePicture)
userRouters.put('/edit-profile', Authentication, ctrl.UpdateUser)
userRouters.put('/password', Authentication, ctrl.UpdatePassword)

userRouters.get('/profile', Authentication, ctrl.GetProfile)

module.exports = userRouters 