import {Schema,model} from "mongoose"

const linkSchema = new Schema({

    title:{
        type:String,
        required:true

    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    target:{
        type:String,
        required:true,

    },
    views:{
 type: Number,
 default:0

    }

},
{
    timestamps:true
})

const Link = model("link", linkSchema )

export default Link;
 