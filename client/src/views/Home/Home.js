import React from 'react'
import "./Home.css"
import axios from"axios"
import { useState } from 'react'
import toast, {Toaster} from "react-hot-toast"

import { useEffect } from 'react'
import LinkCard from '../../components/LinkCard/LinkCard.js'



function Home() {
  const  [user,setUser] =useState('')
  

  useEffect(()=>{
    const currentuser =JSON.parse( localStorage.getItem('currentuser'))
    if(currentuser){
      setlinkData({...linkData, user: currentuser._id})
      setUser(currentuser)
    }

    else{
      window.location.href = '/login'
    }

  },[])

   const [links,setLinks] = useState([])

    const fetchAllLinks =  async ()=>{
      if(!user._id){
        return
      }
      console.log(user._id)
      toast.loading("links loading...")
         const response= await axios.get(`${process.env.REACT_APP_MONGO_URL}/userlinks?userID=${user._id}`)
        
        
         console.log(response)
        
         toast.dismiss()
         
         setLinks(response.data.data)
        

         toast.success("all links fetched successfully")


    }

    useEffect(()=>{
 
      fetchAllLinks()
    },[user])




  const [linkData,setlinkData] = useState({     
    title:"",
     target:"",
     slug:"",
    user: ""
  })

  const  shortURL =  async (req,res)=>{

     const response = await axios.post(`${process.env.REACT_APP_MONGO_URL}/link`,linkData)


     if(response.data.success){
      toast.success("link shorter successfully")
      setlinkData({
        title:"",
     target:"",
     slug:"",
    user: ""
      })
      

     }     

     else{
      toast.error(response.data.message)
     }

    
  }
  return (

    <div>
      <h2 style={{textAlign:'center', margin:"20"}}>Hello {user.fullname}</h2>


     <h2 style={{textAlign:'center', margin:"20"}}> Let's short the link Quickly in 2 minutes⌚</h2>

     <button className=' btn-logout' onClick={()=>{
      localStorage.clear()
      toast.success("log out successfully")

      setTimeout(()=>{
        window.location.href="/login"
      },
      200)
     }
     } >logout
     </button>

    <div className='main-container'>



   

     <form className='link-form '>


      <input type='text'
      className='link-form-input'
      placeholder='Enter title'
      value={linkData.title}
      onChange={(e)=>{
        setlinkData({  
        ...linkData,
        title:e.target.value
      })
      }}
      />

<input type='text'
      className='link-form-input'
      placeholder='Enter target URL'
      value={linkData.target}
      onChange={(e)=>{
        setlinkData({
          ...linkData,
          target:e.target.value
        })
      }}
      />

<input type='text'
      className='link-form-input'
      placeholder='Enter slug'
      value={linkData.slug}
      onChange={(e)=>{
        setlinkData({
          ...linkData,
          slug:e.target.value
        })
      }}
      />

     <button type='button' className='btn' onClick={shortURL}> short the URL</button>
     </form>

     
     <div className='links-container'>
    
     <h1 className='allLinks'> All Links</h1>
      <div>
      {
      links.map((link,i)=>{
          const {title,target,slug,views,createdAt} = link

          return(
            <LinkCard 
            key={i}
             title={title}
             target={target}
             slug={slug}
             views={views}
             createdAt={createdAt}
            />
          )



      })
      
      
      
      
      }


      </div>


         
      </div> 
     


      




       



     <Toaster/>
    </div>
    </div>
  )
}

export default Home