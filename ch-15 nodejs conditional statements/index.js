// const http = require("http")

// const queryString = require('querystring')

// const server = http.createServer((req , res)=>{
//    const q = req.url.slice(2)
//    const {username , password} = queryString.parse(q)
   
//    if(username === 'ravi@gmail.com')
//    { 
//        if(password === "1234")
//        {    
//            res.statusCode = 200
//            res.end('Login Succesfully')
//        }
//        else{
//             res.statusCode = 401
//            res.end("incorrect password")
//        }
//    }
//    else{
//     res.statusCode = 404
//      res.end("user does not exist")
//    }
// })

// server.listen(8080)








// const http = require("http")

// const queryString = require('querystring')

// const server = http.createServer((req , res)=>{
//    const q = req.url.slice(2)
//    const {username , password} = queryString.parse(q)
   
//     if(username !== "ravi@gmail.com")
//     {
//          res.statusCode = 400
//          res.end('user does not exist')
//          return
//     }

//     if(password !== "1234")
//     {
//          res.statusCode = 401
//          res.end('incorrect password')
//          return
//     }   
    
//     res.statusCode = 200
//     res.end("Login Succesfully")
// })

// server.listen(8080)

// -------------------------------------------------------------

const http = require("http")

const queryString = require('querystring')

const server = http.createServer((req , res)=>{
   const q = req.url.slice(2)
   const {username , password} = queryString.parse(q)
   const existingUSer = "hello@gmail.com"

   if(username === existingUSer)
   {
        res.statusCode = 409
        res.end('user Aready exist')
        return
   }

   if(password.length < 8)
   {
       res.statusCode = 500
       res.end('Password must be atlest 8 character')
       return
   }

   if(password !== "ersaurav")
   {
     res.statusCode = 500
     res.end('only sourav as a password allowed')
     return
   }

   res.statusCode = 200
   res.end("sign up success")

})

server.listen(8080)