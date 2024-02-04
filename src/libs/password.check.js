const isPasswordValid = (password)=>{
    const lengthRegex = /.{8,}/
    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const symbolRegex = /[\W_]/
    const numberRegex = /\d/

    const errors = []

    if (!lengthRegex.test(password)) errors.push('Password must contain at least 8 characters')
    if (!uppercaseRegex.test(password)) errors.push('Password must contain at least 1 uppercase letter')
    if (!lowercaseRegex.test(password)) errors.push('Password must contain at least 1 lowercase letter')
    if (!symbolRegex.test(password)) errors.push('Password must contain at least 1 symbol')
    if (!numberRegex.test(password)) errors.push('Password must contain at least 1 number')

    return errors.length === 0 ? true : errors
}

module.exports = isPasswordValid