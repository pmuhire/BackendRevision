const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("User",UserSchema);
