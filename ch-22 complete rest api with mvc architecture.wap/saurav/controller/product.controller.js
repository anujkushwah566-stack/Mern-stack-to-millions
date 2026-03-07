const ProductModel = require("../model/product.model")


const createProduct = async (req , res)=>{
      try {
       const product = await ProductModel.create(req.body)
       res.status(200).json(product)
      } 
      catch (err) {
        res.status(500).json({message: err.message})
      }
}

const fetchProduct = async (req , res)=>{
      try {
         const products = await ProductModel.find()
         res.status(200).json(products)

      } 
      catch (err) {
        res.status(500).json({message: err.message})
      }
}

const updateProduct = async (req , res)=>{
      try {
         const {id} = req.params
         const product = await ProductModel.findByIdAndUpdate(id , req.body)
         
        //  agar product ka value null he or id galat he to
        // ye sirf find by id upadta amd delet wale me hi use karna he
        if(!product)
            return res.status(404).json({message : "Product not found"})

         res.status(200).json(product)
      } 
      catch (err) {
        res.status(500).json({message: err.message})
      }
}

const deleteProduct = async (req , res)=>{
      try {
         const {id} = req.params
         const product = await ProductModel.findByIdAndDelete(id)
        
         if(!product)
            return res.status(404).json({message : "Product not found"})

         res.status(200).json(product)
      } 
      catch (err) {
        res.status(500).json({message: err.message})
      }
}

module.exports = {
    createProduct,
    fetchProduct,
    updateProduct,
    deleteProduct
}