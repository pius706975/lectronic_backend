const isPasswordValid = (password)=>{
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

module.exports = isPasswordValid