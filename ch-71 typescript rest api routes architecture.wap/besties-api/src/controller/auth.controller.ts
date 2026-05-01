import { Request, Response } from "express"

export const signup = (req:Request , res:Response) =>{
   res.send("hello")
}

export const forgotPassword = (req:Request , res:Response) =>{
   res.send("forgot password")
}

export const login = (req:Request , res:Response) =>{
   res.send("login")
}