import Link from "../models/Link.js"

const postLink =  async (req,res)=> {

    const {title,slug,target} = req.body




    const   linkUrl = new Link( {
        title,
        slug,
        target,

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


export {postLink,getSlug};

