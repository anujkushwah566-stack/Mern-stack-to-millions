import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB)

.then(()=>console.log("DB Connected"))

.catch(()=>console.log("Failed to connect with database"))

import express from 'express'
import cors from 'cors'
import encryptData from './controller/encrypt.controller.js'
const app = express()
app.listen(
    process.env.PORT || 8080, 
    ()=>console.log(`Server is running on ${process.env.PORT}`)
)

app.use(cors({
    origin: process.env.CLIENT
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post("/", encryptData)