import { Schema,model } from "mongoose";

const userSchema = new Schema({
    fullname:{
       type:String,
       required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    dob:{
        type:String,
        requred:true
    }
},
{
    timestamps:true
})

const User = new model ("user",userSchema)

export default User
