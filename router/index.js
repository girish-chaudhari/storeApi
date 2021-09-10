const express = require("express");

const v_router = express.Router();
const userRouter = require("./user");

v_router.get("/v1", userRouter);

module.exports = router;
