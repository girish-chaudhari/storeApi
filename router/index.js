const express = require("express");
const userRouter = require("./user");
const adminRouter = require("./admin");
// const sellerRouter = require("./seller");

const v_app = express();
// v_app.use("/user", userRouter);
v_app.use("/admin", adminRouter);
// v_app.use("/seller", sellerRouter);

module.exports = v_app;
