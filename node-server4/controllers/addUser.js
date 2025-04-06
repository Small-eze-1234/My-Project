import User from "../model/user.js";
import bcrypt from "bcryptjs";
export const addUser=async(req,res)=>{
    try{
    const user=new User(req.body);
    await user.save()
    res.json({"message":"Another user has been added"})

}

    catch(error){
        res.json({
            error:error || "Something went wrong"
        })
    }
}
export const getUser=async(req,res)=>{
    try{
        const user=await User.find()
            // name:req.body.name
       
       
    
        if(!user){
            throw new Error("User cannot be found")
        } 
 
        res.json({
            message:user
        })

}

    catch(error){
        res.json({
            error:error.message || "Something went wrong"
        })
    }
}
export const updateUser=async(req,res)=>{
    try{
        const user = await User.findOneAndUpdate(
           { email:req.body.email},{password:req.body.newPassword}
        )
    
        if(!user){
            throw new Error("User cannot be found")
        } 
 
        res.json({
            message:"user name changed"
        })

}

    catch(error){
        res.json({
            error:error.message || "Something went wrong"
        })
    }
}
export const loginUser = async (req,res)=>{

    try {
        const user = await User.findOne({
            email:req.body.email
        })
    
        if(!user){
            throw new Error("Account, does not exist create one")
        }

        const passwordCorrect = await bcrypt.compare(req.body.password, user.password)
        console.log(passwordCorrect)

        if(!passwordCorrect){
            throw new Error("Invalid password")
        }    

        res.json({
            message:"login successful"
        })
    } 
    
    catch (error) {
        res.json({
            error:error.message || "Something went wrong"
        })   
    }
}



