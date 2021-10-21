const mongoose=require('mongoose');
const Joi=require('joi');

const UserSchema=new mongoose.Schema({
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
 function validateUser(user){
    const schema=Joi.object({
        fullName:Joi.string().alphanum().min(5).max().required(),
        email:Joi.string().email({minDomainSegments:2,tlds:{allow:['net','com']}}).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        category:Joi.string().min(3).required(),
        date:Joi.number().integer().min(1900).max(2018).required()
    });
    return schema.validate(user);
}
module.exports.validate=validateUser;
module.exports.User =mongoose.model("User",UserSchema);
