const controller = {}
const models = require('../user/user.models')
const response = require('../../libs/responses')
const multer = require('multer')
const formData = multer().none()
const UploadFile = require('../../middleware/upload/cloudinary')
const bcrypt = require('bcrypt')

controller.UpdateUser = async (req, res)=>{

    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            const userProfile = await models.GetProfile({user_id: user.user_id})

            const queries = {
                name: req.body.name ? req.body.name : 'user',
                email: user.email, //email doesn't need to be changed to keep data secure
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
        const result = await UploadFile(req.file.path, 'lectronic/userImages')
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
}

controller.UpdatePassword = async (req, res)=>{
    try {
        const isValidPassword = (password)=>{
            const lengthRegex = /.{8,}/
            const uppercaseRegex = /[A-Z]/
            const symbolRegex = /[\W_]/
            const numberRegex = /\d/

            const hasLength = lengthRegex.test(password)
            const hasUppercase = uppercaseRegex.test(password)
            const hasSymbol = symbolRegex.test(password)
            const hasNumber = numberRegex.test(password)

            return hasLength && hasUppercase && hasSymbol && hasNumber
        }
        
        const saltRounds = 10
        const hassedPassword = await bcrypt.hashSync(req.body.password, saltRounds)

        if (!isValidPassword(req.body.password)) {
            return response(res, 400, {message: 'Password must contain at least 8 characters, 1 uppercase letter, 1 symbol, and 1 number'})
        }

        const email = req.userData.email
        await models.UpdatePassword({password: hassedPassword, email})

        return response(res, 200, {message: 'Password updated'})
        
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