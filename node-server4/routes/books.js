import express from "express"
const router = express.Router();
import{addBook} from "../controllers/addBooks.js"
import{getBooks} from "../controllers/addBooks.js";

router.get("/getbooks",getBooks)

router.post("/books",addBook)
export default router