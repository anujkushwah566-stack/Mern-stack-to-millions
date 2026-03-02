
const http = require('http')
const { MongoClient } = require('mongodb')
const {createUser , fetchUsers, updateUser, deletUser} = require("./modules/user")
const {type  , getMessage} = require("./modules/common")

let db = null
MongoClient.connect('mongodb://127.0.0.1:27017')

  .then(async (client) => {
    db = client.db('ecom')
  })

  .catch((err) => {
    console.log(err.message)
    process.exit(0)
  })



const server = http.createServer(async (req, res) => {
  const method = req.method
  const url = req.url
 

  if (!url.startsWith("/user")) {
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

  const userCollection = db.collection('users')

   //agar inme se or koi method hogi to ye chalega
   if(!method === "POST" && !method === "GET" && !method === "PUT" && !method === "DELETE")
   {
    const mesagge = getMessage("Method not allowed")
    res.writeHead(405 , type)
    res.end(mesagge)
    return
   }


  // agar method post hui to
  if (method === 'POST')  createUser (req , res , userCollection )
  
  if (method === 'GET') fetchUsers(req , res , userCollection)
  
  if(method === "PUT") updateUser(req , res , userCollection)

  if(method === "DELETE")   deletUser(req , res , userCollection)
  
})

server.listen(8080)
