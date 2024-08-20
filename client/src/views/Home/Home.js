import React from 'react'
import "./Home.css"
import axios from"axios"
import { useState } from 'react'
import toast, {Toaster} from "react-hot-toast"

import { useEffect } from 'react'
import LinkCard from '../../components/LinkCard/LinkCard.js'

import Footer from '../../components/Footer/Footer.js'
import Header from '../../components/Header/Header.js'



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

  <Header/>

      <div style={{textAlign:"center", margin:"20px"}} className='div'>
      <h2 style={{ margin:"20", display:"inline"}}>Hello {user.fullname}👋</h2>


     <h2 style={{ margin:"20", display:"inline"}}> Let's short the link Quickly ⌚</h2>
     
     
     </div>

     

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


     <div>
     <h2 className='allLinks'> All Links</h2>
     
     <div className='links-container'>
    
     
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
     
      </div>

      




       

     

     <Toaster/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home