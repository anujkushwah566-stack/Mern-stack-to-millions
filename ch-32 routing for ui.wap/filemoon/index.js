const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.DB)

const root  = process.cwd() // ye absolute path dega mtlb server par project kaha exist karta he vo dega
const express = require("express")
const path = require("path") // ye ek se jyada path ko jodne ka kam karta  he
const {v4: uniqueId} = require("uuid")
const cors = require('cors')


const multer  = require("multer") // for file uplaoding
const storage = multer.diskStorage({
    destination : (req , file , next)=>{
         next(null , "files/")
    },
    filename : (req , file , next)=>{
      const nameArr = file.originalname.split(".")
      const ext = nameArr.pop()
      const name = `${uniqueId()}.${ext}`
      next(null , name)
    }
})
const upload = multer({storage: storage})

const { signup, login } = require("./controller/user.controller")
const { createFile, fetchFiles, deletefile, downlodeFile } = require("./controller/file.controller")
const { fetchDashboard } = require("./controller/dashboard.controller")
const { verifyToken } = require("./controller/token.controller")
const app = express()


app.listen(process.env.PORT || 8080)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("view"))
app.use(cors({
  origin: 'http://127.0.0.1:5500'// domain name
}))// alow kar diya ki user interface ees port par chal raha he to api access kar sakta he


// ui endpoint
const getPath = (filename)=>{
  return path.join(root , "view" , filename)
}

app.get("/signup" , (req , res)=>{
 const p =  getPath("signup.html")
  res.sendFile(p)
})

app.get("/login" , (req , res)=>{
 const p =  getPath("index.html")
  res.sendFile(p)
})

app.get("/" , (req , res)=>{
 const p =  getPath("index.html")
  res.sendFile(p)
})

app.get("/dashboard" , (req , res)=>{
 const p =  getPath("app/dashboard.html")
  res.sendFile(p)
})

app.get("/history" , (req , res)=>{
 const p =  getPath("app/history.html")
  res.sendFile(p)
})

app.get("/files" , (req , res)=>{
 const p =  getPath("app/files.html")
  res.sendFile(p)
})


// API endpoint
app.post("/api/signup" , signup)
app.post("/api/login" , login)
app.post("/api/file" ,upload.single("file") ,  createFile)
app.get("/api/file" , fetchFiles)
app.delete('/api/file/:id' , deletefile)
app.get("/api/file/downlode/:id" , downlodeFile)
app.get('/api/dashboard' , fetchDashboard)
app.post("/api/ token/verify" , verifyToken)