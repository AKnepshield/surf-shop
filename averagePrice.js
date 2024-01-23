const {inventory} = require("./data.js")
const {
    isBargain, isClothing, isGear, isSurfboard, convertingDataForAccounting 
} = require("./productReport.js")

// calculateAveragePrice

const calculateAveragePrice = (inventory) => {
    let allPrices = 0
    for (const product of inventory) {
        allPrices += product.price
    }
    const averagePrice = allPrices / inventory.length
    
    return averagePrice
}


console.log("\n------------------------\n")

console.log("\n------------------------\n")

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)

