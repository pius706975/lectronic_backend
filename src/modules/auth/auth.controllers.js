const controllers = {}
const models = require('./auth.models')
const response = require('../../libs/responses')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendEmail = require('../../libs/node.mailer')
const sodium = require('libsodium-wrappers')
const validator = require('validator')
const isPasswordValid = require('../../libs/password.check')

controllers.Register = async (req, res)=>{
    try {
        const passwordValidation = isPasswordValid(req.body.password)

        if (!req.body.name) {
            return response(res, 400, {message: 'Name cannot be empty'})
        }else if (!req.body.email || !req.body.password) {
            return response(res, 400, {message: 'Email or password cannot be empty'})
        } else if (!validator.isEmail(req.body.email)) {
            return response(res, 400, {message: 'Invalid email'})
        } else if (passwordValidation !== true) {
            return response(res, 400, {message: passwordValidation.join(', ')})
        } 

        const saltRounds = 10
        const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds)
        const token_verify = await sodium.to_hex(sodium.randombytes_buf(16))
        const expiredToken = new Date(Date.now() + 20000 * 60)
        const emailExists = await models.Login({email: req.body.email})

        if (emailExists.length > 0) {
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
            image: req.body.image ? req.body.image : process.env.DEFAULT_PICTURE
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

controllers.Login = async (req, res)=>{
    try {
        const {email, password} = req.body
        const result = await models.Login({email: email})
        
        const user = result[0]
        if (!user) {
            return response(res, 401, {message: 'Email or password is incorrect'})
        } 
        
        const comparedData = await bcrypt.compareSync(password, user.password)
        if (!comparedData) {
            return response(res, 401, {message: 'Email or password is incorrect'})
        } else if (user.is_verified === false) {
            return response(res, 401, {message: 'You need to verify your account'})
        } 

        delete user.password
        
        const token = `Bearer ${jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '12h'})}`
        const responseData = {token}

        return response(res, 200, responseData)
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

controllers.Logout = async (req, res)=>{

    try {
        const token = req.headers.authorization
        if (!token) {
            return response(res, 401, {message: 'you have looged out'})
        }

        const tokenToBlacklist = token.split(' ')[1]
        await models.AddBlacklist({blacklist_token: tokenToBlacklist})

        return response(res, 200, {message: 'You logged out'})
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
        // const expiredAt = new Date(user.token_expire).toLocaleString('en', {timeZone: 'Asia/Jakarta'})
        // const expiredToken = new Date(timeNow).toLocaleString('en', {timeZone: 'Asia/Jakarta'})
        const expiredAt = new Date(user.token_expire).toISOString()
        const expiredToken = new Date(timeNow).toISOString()

        if (user.token_verify !== token.token_verify) {
            return response(res, 401, {message: 'Email verification failed'})
        } else if (user.is_verified === true) {
            return response(res, 401, {message: 'Email has been verified'})
        } else if (expiredAt < expiredToken) {
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

        const token_verify = await sodium.to_hex(sodium.randombytes_buf(16))
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

controllers.RefreshToken = async (req, res)=>{

    try {
        const token = req.headers.token
        if (!token) {
            return response(res, 401, {message: 'Token is required'})
        }

        const refreshTokenCheck = await models.RefreshTokenCheck({refresh_token: token})
        if (refreshTokenCheck <= 0) {
            return response(res, 400, {message: 'Invalid refresh token'})
        }

        const user = refreshTokenCheck[0]
        if (user.refresh_token !== token) {
            return response(res, 400, {message: 'Invalid refresh token'})
        }

        delete user.password
        delete user.refresh_token

        const newTokenAccess = jwt.verify(token.split(' ')[1], process.env.REFRESH_TOKEN_SECRET)
        const tokenAccess = `Bearer ${jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '1d'})}`

        const responseData = {tokenAccess}

        return response(res, 200, responseData)
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

module.exports = controllers