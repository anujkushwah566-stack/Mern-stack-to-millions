const { ObjectId } = require("mongodb")

let db = null
const mongo = require("mongodb").MongoClient
mongo.connect("mongodb://localhost:27017")

.then((client)=>{
    db = client.db("wapdb")
    console.log("DataBase is connected")
})

.catch((err)=>{
    console.log("Failed to connect with database")
    console.log(err.message)
    process.exit(1) // ye islie taki koi db me dikat ho to server crash ho jaye aur aage code na chale
})

const createProduct = async (req, res)=>{
    const Product = db.collection("products")
    const payload = req.body
    await Product.insertOne(payload)
    res.status(200).json(payload)
}

const fetchProducts = async (req, res)=>{
    const Product = db.collection("products")
    const products = await Product.find().toArray()
    res.status(200).json(products)
}

const updateProduct = async (req, res)=>{
    const payload = req.body
    const {id} = req.params
    const Product = db.collection("products")
    await Product.updateOne({_id: new ObjectId(id)}, {$set: payload})
    res.status(200).json(payload)
}

const deleteProduct = async (req, res)=>{
    const {id} = req.params
    const Product = db.collection("products")
    await Product.deleteOne({_id: new ObjectId(id)})
    res.status(200).json({message: "Product deleted"})
}


module.exports = {
    createProduct,
    fetchProducts,
    updateProduct,
    deleteProduct
}