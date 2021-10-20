const express=require('express');
// const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const registerUser=require('./controllers/registerUser');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/register/user',registerUser);

const http=require('http').createServer(app);
let mongodb="mongodb://127.0.0.1/users";
mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true});
let db=mongoose.connection;
http.listen(3000,()=>{
    console.log('server up and running');
})