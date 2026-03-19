const FileModel = require('../model/file.model')
const fs = require('fs')
const path = require("path")

// jo files uplaod hui he uska information db me store karega
const createFile = async (req, res) => {
  try {
    const file = req.file
    const payload = {
      path: (file.destination + file.filename),
      filename : file.filename,
      type: file.mimetype.split('/')[0],
      size: file.size,
    }

    const newFile = await FileModel.create(payload)
    res.status(200).json(newFile)
  } 
  catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// jo files uplaod hui he uska information db me se fetch karke dega
const fetchFiles = async (req, res) => {
  try {
    const files = await FileModel.find()
    res.status(200).json(files)
  } 
  catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//pehle db se delete karnege fir files me se delete karenge
const deletefile = async (req, res) => {
  try {
        const {id} = req.params
        const file = await FileModel.findByIdAndDelete(id)
        
        //agar file me null aye to 
        if(!file)
            return res.status(404).json({message: "file not found"})
        
        fs.unlinkSync(file.path)// ye files ko delete karega
        res.status(200).json(file)
  } 
  catch (err) {
    res.status(500).json({message: err.message})
  }
}

const downlodeFile =async(req , res)=>{
   try {
         const {id}  = req.params
         const file = await FileModel.findById(id)
         
         if(!file)
          return res.status(404).json({message: "file not found"})
         
         const root = process.cwd()
         const filePath = path.join(root , file.path)

         res.setHeader('Content-Disposition' , `attachment; filenmae="${file.filename}"`)

         res.sendFile(filePath , (err)=>{
          if(err)
             res.status(404).json({message: "File not found"})
         })

   }
    catch(err)
    {
      res.status(500).json({message: err.message})
   }
  
}

module.exports = {
  createFile,
  fetchFiles,
  deletefile,
  downlodeFile
}
