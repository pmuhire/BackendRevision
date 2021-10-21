const express=require('express');
const jwt=require('jsonwebtoken');
const config=require('config');
const Joi=require('joi');
const bcrypt=require('bcrypt');
const {User}=require('../model/UserModel');

const router=express.Router();

router.post('/',async (req,res)=>{
    const {error} = validate(req.body)
    if(error) return res.send(error.details[0].message).status(400)

   const user=await User.findOne({email:req.body.email});
   if(!user) return res.send("Invalid email or password").status(400);

   const validPassword=await bcrypt.compare(req.body.password,user.password);
   if(!validPassword) return res.send("Invalid email or password").status(400);
   const token=jwt.sign(
    {
       _id:user._id,
       email:user.email,
       password:user.password
    },
    config.get('jwtPrivateKey')
    )
    return res.send(token)
   res.send(user);
});
function validate(req){
    const schema = Joi.object({
        email: Joi.string().max(255).min(3).required().email(),
        password:Joi.string().max(255).min(3).required()
    });
    return schema.validate(req);
}
module.exports=router;