import mongoose from "mongoose"
const ReviewSchema=new mongoose.Schema({
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
     message:{
         type:String,
         required:true
 
         
     }

})
const Reviews =mongoose.model("MyReviews2",ReviewSchema)
export default Reviews