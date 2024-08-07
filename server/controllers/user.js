
import User from "../models/User.js"

const postSignup = async(req,res)=>{
    const {fullname,email,password,dob} = req.body
      
    const user = new User ({
      fullname,
      email,
      password,
      dob:new Date(dob)
    })
  
    const savedUser= await user.save()
      if(savedUser){
        res.json({
          success:true,
          data:savedUser,
          message:"signup successfully"
        })
      }
  
  
      else{
      res.json({ success:false,
        data:null,
        message:"signup failed"
      })
    }
  }

    const postLogin =  async (req,res)=>{
        const {email,password}= req.body
        try{
        const user = await User.findOne({
          email:email,
          password:password
        })
      
       if(user){
        res.json({
          success:true,
          data:user,
          message:"login successfully"
        })
      }
      
        else{
          res.json({
          success:false,
          message:"invalid email or password"
      
          })
          
        }
      }
      catch(e){
        data:e.message
      }
       }

     
      




  export {postSignup, postLogin,}