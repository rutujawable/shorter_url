import React from 'react'
import "./LinkCard.css"
import link from "./link.png"
import targetlink from "./targetlink.png"

function LinkCard( {title,target,slug,views,createdAt}) {
   const slugURL = `${process.env.REACT_APP_MONGO_URL}/${slug}`

  return (
    <div>
      <div class="card">
    <h3 class="card-title">{title}</h3>

    <div className='slug-url'>
       <img className='img' src={link}></img> 
        <p class="card-url">
          <a href={slugURL} 
           target="_blank" > {slugURL}</a>
           </p>
           </div>

     <div className='url'>
       <img className='img-t'src={targetlink}></img> 
         <p class="card-target">
          <a href={target} target="_blank">
          {target.substring(0,40)}
          {target.length > 40 ? "...." : null}
          </a></p> 
     </div>

    <p class="card-date"> { new Date(createdAt).toLocaleString()}</p>

    <p class="card-views"><span style={{fontWeight:'bold'}}>Views:</span> {views}</p>
</div>
    
    
    
    
    
    </div>

  )
}

export default LinkCard

