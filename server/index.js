import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import {postLink, getSlug,getLinks,getUserLinks} from "./controllers/link.js"
import { postLogin, postSignup } from "./controllers/user.js"



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

app.get("/userlinks",getUserLinks)

app.post("/link", postLink)
app.get("/Links",getLinks)


app.get("/:slug",getSlug)

app.post("/signup", postSignup)

app.post("/login",postLogin)









  app.listen(port, (req,res)=>{
    console.log(`server is running on port${port}`)
  })








 