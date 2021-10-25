require('./model/db');
require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const registerUser=require('./controllers/registerUser');
const authController=require('./controllers/authController');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user/login',authController);
app.use('/user',registerUser);

const http=require('http').createServer(app);
http.listen(process.env.PORT,()=>{
    console.log('server up and running');
})