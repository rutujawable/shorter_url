import "./Footer.css"
import { Link } from "react-router-dom"
import facebook from "./icons/facebook.png"
import instagram from "./icons/instagram.png"
import youtube from "./icons/youtube.png"

import location from "./icons/google-maps.png"
import call from "./icons/phone.png"
import message from "./icons/comments.png"




  const Footer = ()=>{
    const instagram_link = "https://www.instagram.com/accounts/onetap/?next=%2F&hl=en";
    const call_link = "tel:+8552012745";
    const message_link = "mailto:rutujawable0@gmail.com"
    const facebook_link = "https://www.facebook.com/help/192946630752330";
    const youtube_link = "https://www.youtube.com/"

   
    
   


    return(
        <div className=" footer-container_a " >
            <div className="color">
       


    
    
    <div className="b">
        <h3> links</h3>
      
    <Link to="/" className="links-components"><div className="img-contain"> home</div></Link> 
    <Link to="/login" className="links-components"> <div className="img-contain"> login</div></Link>
    <Link to="/signup" className="links-components"><div className="img-contain"> signup </div></Link>
   
    
</div>

     
   
 
    <div className="b">  
    <h3>Contact Us</h3>
    <div className="links-components contact-components">
   <img src={location}  className="contact-images"></img>
   <span>village Kanoli, Taluka Sangamner, Dist Ahmadnagar</span>
   </div>

   <div className="links-components contact-components">
  <Link to={call_link} className="contact-link"> <img src={call}  className="contact-images"></img>
   <span className="contact_names">+8552012745</span> </Link>
   </div>

   <div className=" contact-components">
   <Link to={message_link} className="contact-link"> <img src={message}  className="contact-images"></img> 
   <span className="contact_names">rutujawable0@gmail.com</span></Link>
   </div>


    </div>

    


    <div className="icons">
    
        <Link to={facebook_link}> <img src={facebook} className="icons-img"></img></Link>
         <Link to={instagram_link}>  <img src={instagram}  className="icons-img"></img></Link>
     <Link to={youtube_link}><img src={youtube}  className="icons-img"></img></Link>
   
          </div>

    </div>
    
    
    

   
          
       </div>
          

    )
}

export default Footer;