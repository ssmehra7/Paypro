const mongoose = require ("mongoose");
const { Schema } = require("zod");

mongoose.connect("mongodb+srv://simarjeetsm7:ofaG5A6KMf6MBXgR@cluster0.l1w7zta.mongodb.net/paytm_db");


const userSchema = new mongoose.Schema(
    {   
        userName : String,
        firstName : String,
        lastName : String,
        password : String
    }
);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});


const User = mongoose.model("userTable",userSchema);
const Account = mongoose.model("accountTable",accountSchema);
module.exports={
    User,
    Account 
     
}