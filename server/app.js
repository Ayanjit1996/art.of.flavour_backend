// Main file

// dotenv for the sensitive credentials 
const dotenv  = require('dotenv');
const mongoose= require('mongoose');
const express = require('express');
const app = express();


// sensitive data
dotenv.config({path:'./config.env'})

// PORT value imported from dotenv.env File
const PORT = process.env.PORT;
// database connection file called
require('./DB/connection');

// Database User schema require
const User = require('./model/userSchema');

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(require('./router/auth'));

app.get('/contact',(req,res)=> {
    res.cookie("token" , 'high');
    res.send("This is contact");
});

app.listen(PORT,()=>{
    console.log(`Server is runing at port ${PORT}`)
});