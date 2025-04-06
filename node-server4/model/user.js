import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const UserSchema=new mongoose.Schema({
    name:{
       type:String ,
       required:true
       
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
        
    },
    password:{
        type:String,
        required:true

        
    }

})

UserSchema.pre("save",async function (next) {

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    
    next()
})

const User=mongoose.model("User2" ,UserSchema)
export default User