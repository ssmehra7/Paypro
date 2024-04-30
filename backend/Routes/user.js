const express = require('express');
const mongoose = require ("mongoose");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET  = require("../config");
const   authMiddleware  = require("../middleware");

const signupBodySchema = zod.object({
    userName: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinBodySchema = zod.object({
    userName: zod.string().email(),
    password: zod.string()
})


//-->SIGNUP ROUTE
router.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success}= signupBodySchema.safeParse(body);
    if (!success){
        return res.json({
            message:"Incorrect Input"
        })
    }

    const user = await User.findOne({
        userName:body.userName,
    })

    
    if (user){
        return res.json ({
            message:"Email is already taken",
        })
    }

    

    const dbUser = await User.create(body);

    const token = jwt.sign ({
        userId:dbUser._id
    },JWT_SECRET);

    const userId = dbUser._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    res.json({
        message:"User created successfully",
        token:token 
    })

})

//-->SIGNIN ROUTE
router.post("/signin",async (req,res)=>{
    const body = req.body;

    const {success} = signinBodySchema.safeParse(body);
    if (!success){
        return res.json ({
            message:"Incorrect Input or password",
        })
    }

    const user = await User.findOne({
        userName: body.userName,
        password: body.password
    });

    if (user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET);

        res.json({
            token :token
        })


        return ;
    }

res.status(411).json ({
    message: "Error while logging in"
})

})   

// const  { authMiddleware } = require("../middleware");


// other auth routes

const updateBody = zod.object({
    userId:zod.string().optional(),
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/",authMiddleware,async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

//code to bring all user when we type something which matches in the db 

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;