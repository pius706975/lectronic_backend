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
        const expiredToken = new Date(Date.now( + 20000 * 60))
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
            token_expire: expiredToken,
            is_verified: false,
        }

        const verificationLink = `${process.env.BASE_URL}/auth/verification?token=${token_verify}`
        const resendVerificationLink = `${process.env.BASE_URL}/auth/resend?email=${queries.email}`
        
        await sendEmail(queries.email, 'Email verification\n', verificationLink)
        
        const result = await models.Register(queries)

        return response(res, 200, {
            users: result, 
            status: 'Check your email! We have sent you a verification link.', 
            resend: resendVerificationLink
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

controllers.VerifyEmail = async (req, res)=>{

    try {
        const token = {token_verify: req.query.token}
        const result = await models.TokenVerify(token)

        if (result.length <= 0) {
            return response(res, 401, {message: 'Your account is not verified yet'})
        }

        const user = result[0]
        const timeNow = Date.now()
        const expiredAt = new Date(user.token_expire).toLocaleString('en', {timeZone: 'Asia/Jakarta'})
        const expiredToken = new Date(timeNow).toLocaleString('en', {timeZone: 'Asia/Jakarta'})

        if (user.token_verify !== token.token_verify) {
            return response(res, 401, {message: 'Email verification failed'})
        } else if (user.is_verified === true) {
            return response(res, 401, {message: 'Email has been verified'})
        } else if (expireAt < expiredToken) {
            return response(res, 401, {message: 'This link is expired, resend the verification link!'})
        }

        const queries = {
            is_verified: true,
            name: user.name
        }

        const verifyEmail = await models.VerifyEmail(queries)

        return response(res, 200, {
            user: verifyEmail,
            message: 'Email is verified'
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

controllers.ResendVerification = async (req, res)=>{
    
    try {
        const email = {email: req.query.email}
        const checkUser = await models.Login(email)
        const user = checkUser[0]

        if (checkUser.length <= 0) {
            return response(res, 401, {message: 'Resend verification failed'})
        } else if (user.is_verified === true) {
            return response(res, 401, {message: 'Email has been verified'})
        }

        const token_verify = await crypto.randomBytes(16).toString('hex')
        const expiredAt = new Date(Date.now() + 20000 * 60)

        const queries = {
            token_verify: token_verify,
            token_expire: expiredAt,
            email: req.query.email

        }

        const verificationLink = `${process.env.BASE_URL}/auth/verification?token=${token_verify}`
        
        await sendEmail(user.email, 'Email verification\n', verificationLink)

        const result = await models.ResendVerification(queries)

        return response(res, 200, {
            user: result,
            message: 'Verification email is resent'
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

module.exports = controllers