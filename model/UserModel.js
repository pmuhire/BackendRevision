const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName
})