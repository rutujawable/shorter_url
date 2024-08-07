import React from 'react'
import { useState } from 'react'
import "./../../global.css"
import "./Signup.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import {Link} from "react-router-dom"
import "./../../global.css"


function Signup() {

     const [user,setUser] = useState({
          "fullname":"",
          "email":"",
          "password":"",
          "dob":""
     })

  const signup =  async ()=>{
   const response = await axios.post(`${process.env.REACT_APP_MONGO_URL}/signup`,{
      "fullname":user.fullname,
      "email":user.email,
      "password":user.password,
      "dob":user.dob
   })
   console.log(response.data.data)

   if(response.data.success){
      toast.success("signup successfully")
   }
   else{
      toast.error("failed to signup")
   }


   
   
  }





  return (
    <div>
     <form className='signup-form'>

        <input type='text'
         placeholder='Enter your name'
            className='user-input'
            value = {user.fullname}
            onChange={(e)=>{
               setUser({...user, fullname:e.target.value})
            }}
         />

     <input type='email'
         placeholder='Enter your email'
            className='user-input'
            value = {user.email}
            onChange={(e)=>{
               setUser({...user, email:e.target.value})
            }}
         />

     <input type='password'
         placeholder='Enter your password'
            className='user-input'
            value = {user.password}
            onChange={(e)=>{
               setUser({...user, password:e.target.value})
            }}
         />

      <input type='date'
         placeholder='Enter your date of birth'
            className=' user-input'
            value = {user.dob}
            onChange={(e)=>{
               setUser({...user, dob:e.target.value})
            }}
         />
     


      <button type='button' className='btn' onClick={signup}> sign up</button>




        
        
        


     </form>

     <Link to="/login" className='link'> Already have an account? login</Link>
    

   <Toaster/>

    </div>
  )
}

export default Signup