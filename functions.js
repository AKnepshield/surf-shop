// const {inventory} = require("./data.js")


// const isBargain = (inventoryItem) => {
//     let returnValue = false

//     if (inventoryItem.price < 50.00) {
//         returnValue = true
//     }

//     return returnValue
// }

// const isClothing = (item) => {
//     let returnValue = false

//     if (item.type === "clothing") {
//         returnValue = true
//     }

//     return returnValue
// }

// const isSurfboard = (item) => {
//     let returnValue = false

//     if (item.type === "surfboard") {
//         returnValue = true
//     }

//     return returnValue
// }

// const isGear = (gear) => {
//     let returnValue = false

//     if (gear.type === "gear") {
//         returnValue = true
//     }

//     return returnValue
// }

// const convertDataForAccounting = (product) => {
//     const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
//     return allUpperCase
// }

// const calculateAveragePrice = (inventory) => {
//     let allPrices = 0
//     for (const product of inventory) {
//         allPrices += product.price
//     }
//     const averagePrice = allPrices / inventory.length
    
//     return averagePrice
// }

// for (let surfProduct of inventory) {
//     let message = ""

//     if (isClothing(surfProduct)) {
//         message = `${surfProduct.description} is a clothing product`
//     }

//     if (isGear(surfProduct)) {
//         message = `${surfProduct.description} is a surfing gear product`
//     }


//     if (isSurfboard(surfProduct)) {
//         message = `${surfProduct.description} is a surfboard`
//     }

//     if (isBargain(surfProduct)) {
//         message = `${surfProduct.description} is currently on sale`
//     }

//     if (message !== "") {
//         console.log(message)
//     }
// }

// for (const product of inventory) {
//     const modifiedData = convertDataForAccounting(product)
//     console.log(modifiedData)
// }

// module.exports = {
//     isBargain, isClothing, isGear, isSurfboard, calculateAveragePrice

// }

// convertDataForAccounting, 