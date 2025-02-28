import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const user= new mongoose.model('user',userschema);
export default user;