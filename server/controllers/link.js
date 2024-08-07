import Link from "../models/Link.js"
import User from "../models/User.js"

const postLink =  async (req,res)=> {

    const {title,slug,target,user} = req.body

    console.log('target', target)
    console.log('slug', slug)
    console.log('title', title)
    console.log('user', user)




    const   linkUrl = new Link( {
        title,
        slug,
        target,
        user

    })

    const savedlink = await linkUrl.save();

    res.json({
        success:true,
        data: savedlink,
        message:"link added successfully"
    })



}



const getSlug = async (req,res)=>{
    const {slug} = req.params
   const link = await Link.findOne({slug})
   if(!link){
   
    return  res.json({
        success:false,
        message:"link does not found"
    })
   }

link.views= link.views+1;
 await link.save();

 return res.redirect(link.target)

}

 const getLinks = async  (req,res)=>{
    const alllinks = await Link.find()
  
       res.json({
        success:true,
        data:alllinks,
        message:"all links fetched successfully"
       })
}

 const getUserLinks = async (req,res)=>{
    
    const {userID} =  req.query
    console.log(userID)
    try{
    const user = await User.findById(userID)

    if(!user){
        res.json({
        success:false,
        data:null,
        message:"user not found"
        })
    }
    

   

    const links = await Link.find({user:userID})

    res.json({
        success:true,
        message:"all records fetched successfully",
        data:links
    })
}

    catch(e){
        res.json({
            data:e.message
        })
    }





}





export {postLink,getSlug,getLinks, getUserLinks};

