// const http = require("http")
// const { MongoClient } = require("mongodb")
// const conn = MongoClient.connect("mongodb://localhost:27017")

// conn.then(()=>{
//     console.log("Connected")
// })

// .catch((err)=>{
//     console.log(err.message)
//     process.exit(0)
// })

// const server = http.createServer((req, res)=>{
//     const username = "demo@gmail.com"
//     const password = "hello@1234"

//     if(username === "demo@gmail.com")
//     {
//         if(password === "hello@1234")
//         {
//             res.statusCode = 200
//             res.end("Login success")
//         }
//         else {
//             res.statusCode = 401
//             res.end("Incorrect passoword")
//         }
//     }
//     else {
//         res.statusCode = 404
//         res.end("User doesn`t exist please rigister or signup to continue")
//     }
// })

// server.listen(8080)



// **********************************************************************


const http = require("http")

// const { MongoClient } = require("mongodb")
// const conn = MongoClient.connect("mongodb://localhost:27017")

// conn.then(()=>{
//     console.log("Connected")
// })

// .catch((err)=>{
//     console.log(err.message)
//     process.exit(0)
// })

const server  = http.createServer((req , res )=>{
   
    const username = 'demo@gmail.com'
    const password = 'hello@1234'

    if(username === "demo@gmail.com")
        {
            if(password === "hello@1234"){
                res.statusCode = 200
                res.end("Login succesfull")
            }else{
                res.statusCode = 401
                res.end("Incorrect password")
            }
        }
        else{
            res.statusCode = 404
            res.end('user does nott exist please register or sign up to continue')
        } 

})

server.listen(8080)