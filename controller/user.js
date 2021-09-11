const user = require("../models/user");
const responseHandler = require("../config");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const newUser = user(req.body);
  const savedUser = await newUser.save();
  responseHandler(res, 200, "user registered successfully ", savedUser);
  //   res.send(savedUser);
};
exports.signin = async (req, res, next) => {
  try {
    const isUser = await user.findOne({ email: req.body.email });
    if (isUser) {
      if (req.body.password === isUser.password) {
        const token = jwt.sign(
          { userId: isUser._id },
          process.env.JWT_SECRETE,
          {
            expiresIn: "1d",
          }
        );
        responseHandler(res, 200, "user logged in success ", { token, isUser });
      } else {
        responseHandler(res, 401, "Sorry invalid Credential ", {});
      }
    } else {
      responseHandler(res, 404, "Sorry no user Found", {});
    }
  } catch (err) {
    responseHandler(res, 500, "something went wrong ", {});
  }
};
exports.contact = (req, res, next) => {
  try {
    responseHandler(res, 200, "success ", { message: "success" });
  } catch (err) {
    responseHandler(res, 500, "something went wrong ", {});
  }
};
