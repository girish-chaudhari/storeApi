const user = require("../models/user");
const responseHandler = require("../config")

exports.register = async (req, res, next) => {
  const newUser = user(req.body);
  const savedUser = await newUser.save();
  responseHandler(res, 200, "this is ok ", savedUser)
//   res.send(savedUser);
};
