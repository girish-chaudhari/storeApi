const responseHandler = require("../config");
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  //   const authToken = req.headers["authorization"];
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = user;
    next();
  } else {
    responseHandler(res, 500, "something went wrong", {});
  }
};

exports.adminAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.header.authorization.split(" ")[1];
    const admin = jwt.verify(token, process.env.JWT_SECRETE);
    req.admin = admin;
    next();
  } else {
    responseHandler(res, 500, "something went wrong", {});
  }
};
