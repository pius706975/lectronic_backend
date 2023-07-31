const controller = {}
const models = require('../user/user.models')
const response = require('../../libs/responses')

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

module.exports = controller