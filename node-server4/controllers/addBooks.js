import Books from "../model/books.js";
export const addBook=async(req,res)=>{
    try{
    const books=new Books(req.body);
    await books.save()
    res.json({"message":"Another book has been added"})

}

    catch(error){
        res.json({
            error:error.message || "Something went wrong"
        })
    }
}
export const getBooks=async(req,res)=>{
    try{
        const books = await Books.find({
             
        })
    
        if(!books){
            throw new Error("book, cannot be found")
        } 
 
        res.json({
            message:books
        })

}

    catch(error){
        res.json({
            error:error.message || "Something went wrong"
        })
    }
}
    


