const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to mongodb successfully....'))
.catch(err =>console.log('failed to connect to mongodb',err));
 
//Connecting Node and MongoDB