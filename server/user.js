const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post('/submit', (req,res)=>{
    console.log(req.body);
    res.json({status: "form submission successfull"});
});

module.exports = router;