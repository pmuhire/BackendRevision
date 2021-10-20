const User=require('../model/UserModel');
const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{
    const users=await User.find().sort({name:1});
    return res.send(users);
});
router.get('/:email',async (req,res)=>{
    const users= await User.find({email:req.params.email});
    res.send(users);
});
router.post('/',async (req,res)=>{
    const fullName=req.body.fullName;
    const email=req.body.email;
    const category=req.body.category;
    const password=req.body.password;
    const date=req.body.date;
   
    let user=await User.find({email:email})
    // if(user) return res.send('User already exist').status(400);
    user=new User({
        fullName:fullName,
        email:email,
        category:category,
        password:password,
        date:date
    });
    await user.save();
    return res.send(user).status(201);
});
module.exports=router