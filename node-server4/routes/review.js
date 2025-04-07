import express from "express"
const router = express.Router();
import { addReveiw } from "../controllers/addReviews.js";


router.put("/review",addReveiw)

export default router