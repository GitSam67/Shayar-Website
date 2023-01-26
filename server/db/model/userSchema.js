const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    shayari:{
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;