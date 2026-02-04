// const http = require("http")
// const url = require("url")

// const server = http.createServer((req, res)=>{
//     const parsed = url.parse(req.url, true)
//     const endpoint = parsed.pathname

//     if(endpoint !== "/product")
//     {
//         res.writeHead(404, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({message: 'Api not found'}))
//         return
//     }

//     const method = req.method

//     if(method === "GET")
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({message: "Fetched Data"}))
//         return
//     }

//     if(method === "POST")
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({message: "Created Data"}))
//         return
//     }

//     if(method === "PUT")
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({message: "Updated Data"}))
//         return
//     }

//     if(method === "DELETE")
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({message: "Deleted Data"}))
//         return  
//     }

//     res.writeHead(405, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify({message: "Method not allowed"}))
// })

// server.listen(8080)

//************************************************************************************** */


const http = require('http')

const queryString = require("querystring")
const url = require('url')

const server = http.createServer((req , res)=>{
  const parsed = url.parse(req.url , true)
    const endpoint =  parsed.pathname
    

    if(endpoint !== "/product")
    {
          res.writeHead(484 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "Api does not exist"}))
        return
    }
     
     const method = req.method

     if(method === "GET")
     {
        res.writeHead(200 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "Fetched or read Succesfuly"}))
        return
     }

     if(method === "POST")
     {
        res.writeHead(200 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "create or store Succesfuly"}))
        return
     }

     if(method === "PUT")
     {
        res.writeHead(200 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "Updated Succesfuly"}))
        return
     }

     if(method === "DELETE")
     {
       res.writeHead(200 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "Deleted Succesfuly"}))
        return
     }

        res.writeHead(405 ,{"content-type" : 'application/json'})
        res.end(JSON.stringify({message: "Method not allowed"}))

})

server.listen(8080)