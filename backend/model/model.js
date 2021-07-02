const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const userDB = mongoose.model('user',user);

module.exports = userDB;