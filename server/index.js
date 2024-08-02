import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import nodemon from "nodemon"
import {postLink, getSlug} from "./controllers/link.js"
import Link from "./models/Link.js"


const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT

 const mongoConnection = async ()=>{
const conn = await  mongoose.connect(process.env.MONGO_URL)
if (!conn)
{
    console.log("connection not successful")
}
else{
    console.log("mongoDB connected")
}

 }

 mongoConnection();


 app.get("/health",(req,res)=>{
  res.json({
      success:true,
      message:"server is running"

  })
})

app.post("/link", postLink)

app.get("/:slug",getSlug)






 

  app.listen(port, (req,res)=>{
    console.log(`server is running on port${port}`)
  })








 