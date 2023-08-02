// All the routes has been defined in this file

const express = require('express');
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken")

// Creat connection with database
require('../DB/connection')
// Database instance
const User = require("../model/userSchema")

// Middleware defined
const middleware = (req, res, next) => {
    console.log("authenticated");
    next();
};

Router.get('/', middleware ,(req,res)=>{
    res.send("Hi new world from router");
});

// with async and await
// 1. User registration-

Router.post("/register", middleware, async (req, res) => {

    const { Name, Email, Phone, Age, Gender, UserID , Password , CPassword } = req.body;

    console.log(req.body);

    if (!Name || !Email || !Phone || !Age || !Gender || !UserID || !Password || !CPassword) {
        return res.status(422).json({ error: "Please Fill the form" });
    }

    try {
        const userEmail = await User.findOne({ Email: Email });
        const userID = await User.findOne({ UserID: UserID });
        if (userEmail || userID) {
            return res.status(422).json({ error: "User Exists" });
        }
        else if (Password != CPassword)
        {
            return res.status(422).json({ error: "Password not matching" });
        }
        else{
            const user = new User({ Name:Name.toUpperCase(), Email, Phone, Age, Gender:Gender.toUpperCase(), UserID , Password , CPassword });
            await user.save();
            res.status(201).json({ message: "User registered" });
        }

    } catch (err) {
        console.log(err);
    };
});

// 2. User login

Router.post("/login", async (req, res) => {

    try {
        const { ID, Password } = req.body;

        console.log(req.body);
        
        if (!ID || !Password)
            return res.status(422).json({ error: "Please Fill the form" });

        const UserLogin = await User.findOne({ UserID: ID }) || await User.findOne({ Email: ID });

        if (UserLogin) {
            
            const UserPassword = await bcrypt.compare(Password, UserLogin.Password);
            const token = await UserLogin.generateAuthToken();
            // console.log(token)
            res.cookie("jwt", token ,{
                expires : new Date(Date.now() + 200000),
                httpOnly : true
            });
            
            if (!UserPassword)
                res.status(400).json({ error: "No such user" });
            else
                res.json({ message: "User logged in" });
        }
        else
            res.status(400).json({ error: "No such user" });

    } catch (err) {
        console.log(err);
    }
});

module.exports = Router;





// // with promises
// // router.post("/register", function (req, res) {
// //     const { First_name, Mid_name, Last_name, email, userID, Password, Gender, Age, Phone } = req.body;

// //     if (!First_name || !Last_name || !email || !userID || !Password || !Gender || !Age || !Phone) {
// //         return res.status(422).json({ error: "Please Fill the form" });
// //     }

// //     User.findOne({ email: email }).then((userExist) => {
// //         if (userExist) {
// //             return res.status(422).json({ error: "User Exists" });
// //         }

// //         const user = new User({ First_name, Mid_name, Last_name, email, userID, Password, Gender, Age, Phone });

// //         user.save().then(() => {
// //             res.status(201).json({ message: "User registered" });
// //         }).catch((err) => res.status(500).json({ message: "User failed to registered" }));

// //     }).catch(err => {
// //         console.log(err);
// //     });
// // });






