import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email required'],
        unique:true
    },
    firstName:{
        type:String,
        required:[true,'First Name required'],
    },
    lastName:{
        type:String,
        required:[true,'last name required']
    },
    password:{
        type:String,
        reuired:[true,'Password required'],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models('Users',userSchema)

export default User;