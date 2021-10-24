const admin = require("../models/admin");
const responseHandler = require("../config");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const newAdmin = admin(req.body);
    const savedAdmin = await newAdmin.save();
    return responseHandler(res, 200, "login successfully", {});
  } catch (err) {
    return responseHandler(res, 500, "something went wrong", {});
  }
};

exports.signin = async (req, res, next) => {
  try {
    const authUser = await admin.findOne({ email: req.body.email });
    if (authUser) {
      if (req.body.password === authUser.password) {
        const token = jwt.sign(
          { userId: authUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        return responseHandler(res, 200, "logged in successfully", { token });
      } else {
        responseHandler(res, 401, "invalid credential", {});
      }
    } else {
      return responseHandler(res, 404, "user not found", {});
    }
  } catch (err) {
    return responseHandler(res, 500, "something went wrong", {});
  }
};
