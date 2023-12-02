const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connect hoo gaya bhai !"))
.catch((error)=>{
    console.log("error",error);
})