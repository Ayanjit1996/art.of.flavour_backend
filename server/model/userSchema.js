// Mongooose instance required
const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs')
const jwt =require("jsonwebtoken")

// Defining the user data schema 
const UserSchema = new mongoose.Schema({
    Name:{
        type : String,
        require :true
    },
    Email:{
        type : String,
        require :true
    },
    Phone:{
        type : String,
        require :false
    },
    Age:{
        type : String,
        require :true
    },
    Gender:{
        type : String,
        require :true
    },
    UserID:{
        type : String,
        require :true
    },
    Password:{
        type : String,
        require :true
    },
    CPassword:{
        type : String,
        require :true
    },
    Tokens:[
        {
            token:{
                type : String,
                require :true
            }
        }
    ]
})

// This middle ware function will run before saving the data in database, this function will hash the password and store it
UserSchema.pre('save', async function(next){
    if (this.isModified('Password')){
        this.Password = await bcrypt.hash(this.Password,12);
        this.CPassword = await bcrypt.hash(this.CPassword,12);
    }
    next();
});

UserSchema.methods.generateAuthToken = async function(){
    try{
        let new_token = jwt.sign({_id : this._id}, process.env.SECRETE_KEY);
        this.Tokens = this.Tokens.concat({token:new_token});
        await this.save();
        return new_token;

    }catch(err){
        console.log(err);
    }
}
// Here 'primary_user_data' is the name of the database we are using in MongoDB which has a schema defined above
const User = mongoose.model('primary_user_data',UserSchema);

// Now export the model
module.exports = User;