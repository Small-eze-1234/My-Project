import express from "express"
const router = express.Router();
import{addUser} from "../controllers/addUser.js"
import { loginUser } from "../controllers/addUser.js";
import{updateUser} from "../controllers/addUser.js"

router.put("/update",updateUser)
router.post("/user",addUser)
router.get("/login",loginUser)
export default router