import Reviews from "../model/reveiw";

export const addReveiw=async(req,res)=>{
    try{
    const reveiw=new Reviews(req.body);
    await reveiw.save()
    res.json({"message":"Another review has been added"})

}

    catch(error){
        res.json({
            error:error || "Something went wrong"
        })
    }
}