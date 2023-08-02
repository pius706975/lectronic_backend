const controller = {}
const models = require('../user/user.models')
const response = require('../../libs/responses')
const multer = require('multer')
const upload = multer().none()
const cloudinary = require('../../middleware/upload /cloudinary')

controller.UpdateUser = async (req, res)=>{

    try {
        upload(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            const userProfile = await models.GetProfile({user_id: user.user_id})

            const queries = {
                name: req.body.name ? req.body.name : 'user',
                email: user.email, //email doesn't need to change to keep data secure
                address: req.body.address ? req.body.address : user.address,
                phone_number: req.body.phone_number ? req.body.phone_number : user.phone_number,
                date_of_birth: req.body.date_of_birth ? req.body.date_of_birth : user.date_of_birth,
                gender: req.body.gender ? req.body.gender : user.gender
            } 

            const updatedProfile = await models.UpdateProfile(queries)

            return response(res, 200, {message: 'Profile updated', data: updatedProfile})
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

controller.UpdateProfilePicture = async (req, res)=>{
    
    try {
        cloudinary.uploader.upload(req.file.path, {folder: 'lectronic/userImages'}, async function (err, result) {
            if (err) {
                console.log(err)
                return response(res, 500, err.message)
            }

            try {
                const email = req.userData.email
                const image = result.secure_url
                const updatedData = await models.UpdateProfilePicture({image, email})

                return response(res, 200, {
                    message: 'Profile picture updated',
                    data: updatedData
                })
            } catch (error) {
                console.log(error)
                return response(res, 500, error.message)
            }
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.DeleteUser = async (req, res)=>{

    try {
        const {user_id} = req.userData
        await models.DeleteUser({user_id})
        return response(res, 200, {message: 'Account has been deleted'})
    } catch (error) {
        console.log(error)
        return response(res, 500, error) 
    }
}

controller.GetProfile = async (req, res)=>{

    try {
        const user = req.userData
        const getProfile = await models.GetProfile({user_id: user.user_id})
        return response(res, 200, getProfile)
    } catch (error) {
        console.log(error)
        return response()
    }
}

module.exports = controller