const express = require ("express");
const app = express();
const jwt = require("jsonwebtoken");

const mainRouter = require("./Routes/index");


const cors = require("cors");




app.use (cors());
app.use (express.json());


app.use ("/api/v1",mainRouter);


app.listen (3000,()=>{
    console.log("Server is running on Port",3000);
})