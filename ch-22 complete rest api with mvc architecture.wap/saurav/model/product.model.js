const {Schema , model} = require("mongoose")

const productSchema = new Schema({
     title : String,
     description: String,
     price: Number,
     discount: Number,
     brand: String
} , {timestamps: true})

const productModel = model("Product" , productSchema)

module.exports = productModel