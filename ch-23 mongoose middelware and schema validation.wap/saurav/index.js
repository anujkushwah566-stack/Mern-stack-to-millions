const dotenv = require("dotenv")
dotenv.config() // ye esliye taki env file ko read kar sake

const mongoose = require("mongoose")
mongoose.connect(process.env.DB)

const express = require("express")
const morgan = require("morgan")
const { fetchProduct, createProduct, updateProduct, deleteProduct } = require("./controller/product.controller")
const app = express()
app.listen(process.env.PORT)

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/product" , fetchProduct)
app.post("/product" , createProduct)
app.put("/product/:id" , updateProduct)
app.delete("/product/:id" , deleteProduct)