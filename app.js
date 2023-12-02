require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4500;



// middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.get("/",(req,res)=>{
    res.status(200).json("Sab theek hai   bhai ? ");
})


app.listen(PORT,()=>{
    console.log(`Hii suraj Serever is Runing properly :${PORT}`)
})
