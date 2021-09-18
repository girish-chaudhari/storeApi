const user = require("../models/user");
const responseHandler = require("../config");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
 try{
  const newUser = user(req.body);
  const savedUser = await newUser.save();
  responseHandler(res, 200, "user registered successfully ", savedUser);
 }catch(error){
  responseHandler(res, 500, "something went wrong", {}) 
 }
};

exports.signin = async (req, res, next) => {
  try{
    const authUser = await user.findOne({email: req.body.email})  
    if(authUser){
      if(req.body.password === authUser.password){
        const token = jwt.sign(
          {userId :authUser._id},
          process.env.JWT_SECRET,
          {expiresIn : '1d'}
        )
        return  responseHandler(res, 200, "logged in successfully", {token})
      }else{
        responseHandler(res, 401, "invalid credential", {})
      }

    }else{
      return responseHandler(res, 404, "user not found", {})
      
    }
  }
  catch(err){
    return responseHandler(res, 500, "something went wrong", {})
  }
  
};

exports.contact = (req, res, next) => {
  try {
    responseHandler(res, 200, "success ", { message: "success" });
  } catch (err) {
    responseHandler(res, 500, "something went wrong ", {});
  }
};
