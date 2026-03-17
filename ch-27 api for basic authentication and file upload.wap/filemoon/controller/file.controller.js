const path = require('path')
const FileModel = require('../model/file.model')
const fs = require('fs')
const { json } = require('stream/consumers')




// jo files uplaod hui he uska information db me store karega
const createFile = async (req, res) => {
  try {
    const file = req.file
    console.log(file)
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

module.exports = {
  createFile,
  fetchFiles,
  deletefile,
}
