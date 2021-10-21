require('./model/db');
const express=require('express');
// const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const registerUser=require('./controllers/registerUser');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user',registerUser);

const http=require('http').createServer(app);
http.listen(3000,()=>{
    console.log('server up and running');
})