// const http = require("http")
// const { MongoClient }= require("mongodb")
// let db = null
// MongoClient.connect("mongodb://127.0.0.1:27017")

// .then(async (client)=>{
//     db = client.db("ecom")
// })

// .catch((err)=>{
//     console.log(err.message)
//     process.exit(0)
// })

// const getMessage = (msg)=>{
//     return JSON.stringify({
//         message: msg
//     })
// }

// const server = http.createServer(async (req, res)=>{
//     const url = req.url
//     const method = req.method
//     const type = {
//         'Content-Type': 'application/json'
//     }

//     if(url !== "/user")
//     {
//         const message = getMessage("Endpoint not found")
//         res.writeHead(404, type)
//         res.end(message)
//         return
//     }

//     if(!db)
//     {
//         const message = getMessage("Db not intialized yet")
//         res.writeHead(500, type)
//         res.end(message)
//         return
//     }

//     if(method === "POST")
//     {
//         try {
//             const payload = {
//                 fullname: "er saurav",
//                 email: "er@gmail.com",
//                 mobile: 1234
//             }
//             const User = db.collection("users")
//             await User.insertOne(payload)
//             res.writeHead(200, type)
//             res.end(JSON.stringify(payload))
//         }
//         catch(err)
//         {
//             const message = getMessage(err.message)
//             res.writeHead(500, type)
//             res.end(message)
//         }
//     }

//     if(method === "GET")
//     {
//         try {
//             const User = db.collection("users")
//             const users = await User.find().toArray()
//             res.writeHead(200, type)
//             res.end(JSON.stringify(users))
//         }
//         catch(err)
//         {
//             const message = getMessage(err.message)
//             res.writeHead(500, type)
//             res.end(message)
//         }
//     }
// })

// server.listen(8080)

// ******************************************************************************************

const http = require('http')
const { MongoClient } = require('mongodb')

let db = null
MongoClient.connect('mongodb://127.0.0.1:27017')

  .then(async (client) => {
    db = client.db('ecom')
  })

  .catch((err) => {
    console.log(err.message)
    process.exit(0)
  })

// ye function isliye banaya ki barr stringyfy ka use na karna pade
const getMessage = (msg) => {
  return JSON.stringify({
    mesagge: msg,
  })
}

const server = http.createServer(async (req, res) => {
  const method = req.method
  const url = req.url
  const type = {
    'Content-Type': 'applocation/json',
  }

  if (url !== '/user') {
    const mesagge = getMessage('Endpoint not found')
    res.writeHead(404, type)
    res.end(mesagge)
    return
  }

  // ky db null he
  if (!db) {
    const mesagge = getMessage('DB not intialized yet')
    res.writeHead(500, type)
    res.end(mesagge)
    return
  }

  // agar method post hui to
  if (method === 'POST') {
    try {
      const payload = {
        fullname: 'er saurav',
        email: 'er@gmail.com',
        mobile: 1234,
      }
      const User = db.collection('users')
      await User.insertOne(payload)
      res.writeHead(200, type)
      res.end(JSON.stringify(payload))
    } catch (err) {
      const message = getMessage(err.message)
      res.writeHead(500, type)
      res.end(message)
    }
  }

  if (method === 'GET') {
    try {
      const User = db.collection('users')
      const users = await User.find().toArray()
      res.writeHead(200, type)
      res.end(JSON.stringify(users))
    } catch (err) {
      const message = getMessage(err.message)
      res.writeHead(500, type)
      res.end(message)
    }
  }
})

server.listen(8080)
