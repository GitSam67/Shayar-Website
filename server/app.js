const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./user");
const User = require("./db/model/userSchema");
const app = express();
const port = 3000 || process.env.PORT;
const host = "localhost";

dotenv.config({path:"./config.env"});
require("./db/connect");

app.use(express.json());

app.use(router);

app.get('/', (req,res)=>{
    res.send("<h1>Hello NodeJs Runtime...!!</h1>");
});

app.listen(port, ()=>{
    console.log(`App listening on http://${host}:${port}`);
});