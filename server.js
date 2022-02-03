require('./model/db');
require('dotenv').config();
const cors=require('cors');
const express=require('express');
const bodyParser=require('body-parser');
const registerUser=require('./controllers/registerUser');
const authController=require('./controllers/authController');
const logger = require('./utils/logger');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

app.use('/user/login',authController);
app.use('/user/register',registerUser);


const http=require('http').createServer(app);
http.listen(process.env.PORT,()=>{
    logger.error('server up and running',process.env.PORT);
})