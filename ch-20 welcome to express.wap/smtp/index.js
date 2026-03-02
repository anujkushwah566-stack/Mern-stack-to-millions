const express = require("express")
const {createProduct, fetchProducts, updateProduct, deleteProduct} = require("./modules/product")
const app = express()
app.listen(8080)


app.use(express.json())
app.use(express.urlencoded({extended: false})) // ye dono isliye likha taki req.body me data aa sake
        
        // endpoint
app.get('/product', fetchProducts)

app.post('/product', createProduct)

app.put('/product/:id', updateProduct)

app.delete('/product/:id', deleteProduct)