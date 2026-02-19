//dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

//Scripts
import addBooks from "./Q4_CreateBook.js";
import updateBook from "./Q4_updateBook.js";
import deleteBook from "./Q4_deleteBook.js";
import readBook from "./Q4_readBook.js";
import authorBook from "./Q1_authorFiltering.js";
import yearBook from "./Q1_yearFiltering.js";

//running all dependencies
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// testing
let port = process.env.PORT || 8001
app.get("/", (req,res)=>{
    res.send("<h1>Hii</h1>");
});

//running scripts
app.post("/add",addBooks);
app.post("/update/:id",updateBook);
app.post("/delete/:id",deleteBook);
app.post("/read",readBook);
app.post("/author",authorBook);
app.post("/year",yearBook);
//connection
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})