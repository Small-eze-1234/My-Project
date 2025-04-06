import mongoose from "mongoose"
const BookSchema=new mongoose.Schema({
    author:{
       type:String ,
       required:true
    },
    tittle:{
        type:String,
        required:true
        
    },
    story:{
        type:String,
        required:true
   
        
    }

})
const Books =mongoose.model("MyBooks2",BookSchema)
export default Books