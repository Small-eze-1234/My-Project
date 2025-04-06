import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.js"
import bookRoute from "./routes/books.js"
import reviewRoute from "./routes/review.js"
import connectDB from "./db/connect.js"
import cors from "cors"
import { configDotenv } from "dotenv";
// import userRoute from "./routes/user.js";


configDotenv();
const app=express(); 
const connectionString =process.env.MONGO_URI
console.log()
app.use(cors(''))
app.use(express.json())
 app.use("/api",userRoute)
 app.use("/api",bookRoute)
 app.use("/api",reviewRoute)
app.listen(3000,async()=>{
  await connectDB(connectionString)
console.log("step two:server is running on port 3000")
});