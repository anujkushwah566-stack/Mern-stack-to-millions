const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


const signup = async (req , res)=>{
  try {
      await userModel.create(req.body)
     res.status(200).json({message: " Signup Success"})
  } 
  catch (err) 
  {
      res.status(500).json({message: err.message})
  }
}

const login = async (req , res)=>{
  try {
     const {email , password} = req.body
     const user = await userModel.findOne({email: email})
      
     // agar email nhi he to
     if(!user)
        return res.status(400).json({message: "User does not exist"})
     
     const isLogin =  bcrypt.compareSync(password , user.password)

    // agar password sahi nhi he to
     if(!isLogin)
        return res.status(401).json({message: "Incorrect pssword"})
    

    const payload = {
      email: user.email,
      mobile: user.mobile,
      fullname: user.fullname,
      id: user._id
    }
                   
      // converting payload in token            secret key
     const token = await jwt.sign(payload , process.env.JWT_SECRET , {expiresIn: '7d'})

     // sab sahi he to
     res.status(200).json({
      message: "Login SuccessFully",
      token: token
     })
     
  }
   catch (err) {
     res.status(500).json({message: err.message})
  }
}

module.exports = {
    signup,
    login
}