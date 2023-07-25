const controllers = {}
const models = require('./auth.models')
const response = require('../../libs/responses')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendEmail = require('../../libs/node.mailer')
const crypto = require('crypto')
const validator = require('validator')

controllers.Register = async (req, res)=>{
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds)
        const token_verify = await crypto.randomBytes(16).toString('hex')
        const emailExists = await models.Login({email: req.body.email})

        if (!req.body.email || !req.body.password) {
            return response(res, 401, {message: 'Email or password cannot be empty'})
        } else if (!validator.isEmail(req.body.email)) {
            return response(res, 400, {message: 'Invalid email'})
        } else if (emailExists.length > 0) {
            return response(res, 400, {message: 'Email already exists'})
        }

        const queries = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role ? req.body.role : 'user',
            token_verify: token_verify,
            is_verified: false,
        }

        const verificationLink = `${process.env.BASE_URL}/auth/verification?token=${token_verify}`
        const resendVerificationLink = `${process.env.BASE_URL}/auth/resend/name=${queries.name}`
        
        await sendEmail(queries.email, 'Email verification\n', verificationLink)
        
        const result = await models.Register(queries)

        return response(res, 200, {users: result, status: 'Verify email is resent', resend: resendVerificationLink})
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

module.exports = controllers