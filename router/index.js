const express = require("express");
const userRouter = require("./user");

const v_app = express();
v_app.use("/v1", userRouter);

module.exports = router;
