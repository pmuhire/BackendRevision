const {User,validate}=require('../model/UserModel');
const express=require('express');
const router=express.Router();
const hashPassword=require('../utils/hash');

router.get('/',async(req,res)=>{
    const users=await User.find().sort({name:1});
    return res.send(users);
});
// MUST HAVE AN AUTH TOKEN
router.get('/:id',async (req,res)=>{
    const users= await User.findOne({id:req.params.id});
    res.send(users);
});
router.post('/',async (req,res)=>{
    const {err}=validate(req.body);
    if(err){
        return res.send(err.details[0].message).status(400);
    } 
    const fullName=req.body.full_name;
    const email=req.body.email;
    const category=req.body.category;
    const password=req.body.password;
    const date=req.body.date;
   
    await User.findOne({email:email}).then(user=>{
        if(user===true) {
            return res.send('User already exist').status(400);
        };
    })
    hashPassword(password).then(async response => {
        user=new User({
            fullName:fullName,
            email:email,
            category:category,
            password: response,
            date:date
        });
        await user.save().then(response => {
            console.log(response);
            // return res.send(response).status(201);
        }).catch(err=>{
            console.log(err)
        });
    });
});
// MUST HAVE AN AUTH TOKEN
router.put('/:id',async (req,res)=>{
    try{
        const updatedUser= await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.send(updatedUser);
    }catch(err){
        res.send(err).status(404);
    }
})
// MUST HAVE AN AUTH TOKEN
router.delete('/:id',async (req,res)=>{
    try{
        const deletedUser= await User.findOneAndDelete({_id:req.params.id},req.body,{new:true})
        res.send(deletedUser);
    }catch(err){
        res.send(err).status(404);
    }
})

module.exports=router