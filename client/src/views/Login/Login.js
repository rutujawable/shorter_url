import React from 'react'
import "./../../global.css"
import { useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import "./../../global.css"
import  key from "./key.png"
import  "./Login.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'




function Login() {

  

  const [userLogin, setUserLogin] = useState(
    {
      "email":"",
      "password":""
    }
  )


  const login =  async ()=>{
    const response = await axios.post(`${process.env.REACT_APP_MONGO_URL}/login`,{
      "email":userLogin.email,
      "password":userLogin.password
    })

 console.log(response.data.data)

 if(response.data.success){

  toast.success("login sucessfully")

  localStorage.setItem("currentuser",JSON.stringify(response.data.data))
  toast.loading("Redirecting to dashboard....")
  
  setTimeout(()=>{
   window.location.href='/'
  },2000 )

}

else{
  toast.error(response.data.message)

}




  }



  return(
    <div>
      <Header/>

    <div className='login-h'>

    
      
        <form className='signup-form'>

          <input type='email'
          placeholder='Enter your email'
          className='user-input'
          value={userLogin.email}
          onChange={(e)=>{
            setUserLogin({...userLogin,email:e.target.value})
          }
        }
          
          />


 <input type='password'
          placeholder='Enter your password'
           className='user-input'
          value={userLogin.password}
          onChange={(e)=>{
            setUserLogin({...userLogin,password:e.target.value})
          }
        }
          
          />


<button type='button' className='btn' onClick={login} > login</button>
          
          
          
          
        
      




        </form>


        <Link className='link' to="/signup"> Don't have an account? signup</Link>
     
     

    <Toaster/>

    </div>
    <Footer/>
    </div>
  )





}
export default Login