const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
const http=require('http').createServer(app);

let mongodb="mongodb://127.0.0.1/users";
mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true});

let db=mongoose.connection;

http.listen(3000,()=>{
    console.log('server up and running');
})