const { ObjectId } = require("mongodb")
const { type, getMessage } = require("./common")
const queryString = require('querystring')
const url  = require('url')


const createUser = (req , res , userCollection)=>{

    try {
    //     const payload = {
    //         name: "rahul"
    //     }
    //    await userCollection.insertOne(payload)
    //    res.writeHead(200 , type)
    //    res.end(JSON.stringify(payload))

        let payload = ''
        req.on('data' , (chunks)=>{
            payload = payload + chunks.toString()
        })

        req.on('end' , async()=>{
            const data = queryString.parse(payload)
            data.createdAt = new Date()
            await userCollection.insertOne(data)
            res.writeHead(200 , type)
            res.end(JSON.stringify(data))
        })

    } 
    catch (err) {
       const  message = getMessage(err.message)
       res.writeHead(500 , type) 
       res.end(message)
    }
}

const fetchUsers = async(req , res , userCollection)=>{
    
        try { 
              const users = await userCollection.find().sort({createdAt: -1}).toArray()
              res.writeHead(200 , type)
              res.end(JSON.stringify(users))
        
    } 
    catch (err) {
       const  message = getMessage(err.message)
       res.writeHead(500 , type) 
       res.end(message)
    }
}

const updateUser = (req , res , userCollection)=>{
    
        try {
              let payload = ''
              req.on('data' , (chunks)=>{
                payload = payload + chunks.toString()
              })

              req.on('data' ,async()=>{
                const data = queryString.parse(payload)
                const {query} = url.parse(req.url ,true)
                await userCollection.updateOne({_id: new ObjectId(query.id)},{$set: data})
                res.writeHead(200  ,type)
                res.end(JSON.stringify(data))
              })
        
    } 
    catch (err) {
       const  message = getMessage(err.message)
       res.writeHead(500 , type) 
       res.end(message)
    }
}

const deletUser = async(req , res , userCollection)=>{
    
        try {

            const {query} =  url.parse(req.url , true)
             await userCollection.deleteOne({_id: new ObjectId(query.id)})
             const mesagge = getMessage("User Deleted")
             res.writeHead(200 , type)
             res.end(mesagge)
    } 
    catch (err) {
       const  message = getMessage(err.message)
       res.writeHead(500 , type) 
       res.end(message)
    }
}

module.exports = {
    createUser ,fetchUsers , updateUser ,deletUser
}