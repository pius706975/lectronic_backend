const GetDiscount = (itemPrices)=>{
    let discountPercentage = 0
    let appliedDiscount = 0

    if (itemPrices >= 10000000) {
        discountPercentage = Math.min(5, 100 * 5000000 / itemPrices)
    }

    const discountAmount = (itemPrices * discountPercentage) / 100
    appliedDiscount = discountAmount
    const discountedPrice = itemPrices - discountAmount

    return {discountedPrice, appliedDiscount}
}

module.exports = GetDiscount