const express = require("express");

const router = express.Router();
const accountsRouter = require("./accounts");
const userRouter = require("./user");

router.use("/user",userRouter);
router.use("/accounts",accountsRouter);


module.exports = router;

