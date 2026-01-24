// const {x ,y , z} = require("./file")
// console.log(x,y,z)

// const {converToCapitalLetter , converToSmallLetter} = require("./string")

// console.log(converToSmallLetter("HIIII"))
// const result = converToCapitalLetter("anuj")

// console.log(result)

//******************************************************************************** */

// const time = require("./time")
// const currentDateTime = time.getCurrentDateTime("F")

// console.log(currentDateTime)

// ************************************************************************************

const moment = require("moment")

const dt = moment()

console.log(dt.format('DD-MM-YYYY hh:mm:ss A'))