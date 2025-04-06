import express from "express"
const router = express.Router();
import { addReveiw } from "../controllers/addReviews";


router.put("/review",addReveiw)

export default router