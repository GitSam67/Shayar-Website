const mongoose = require("mongoose");

const db = process.env.DB;

mongoose.set('strictQuery', false);

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true    
}).then(()=>{
    console.log("Connection established successfully..!!");
}).catch((err)=>console.log("Connection unsuccessfull..!!"));

