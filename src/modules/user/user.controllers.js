const controller = {}
const models = require('../user/user.models')
const response = require('../../libs/responses')
const multer = require('multer')
const upload = multer().none()

controller.UpdateUser = async (req, res)=>{

    try {
        upload(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const {name, email, address, phone_number, date_of_birth, gender} = req.body
            await models.UpdateProfile({
                name, 
                email,
                address,
                phone_number,
                date_of_birth,
                gender
            })

            const user = req.userData
            const getProfile = await models.GetProfile({user_id: user.user_id})

            return response(res, 200, {message: 'Profile updated', data: getProfile})
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
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