const express = require("express");
const userController = require("../controller/user");
const { auth } = require("../middleware");

const router = express.Router();

router.post("/register", userController.register);
router.post("/signin", userController.signin);
router.get("/contact_us", auth, userController.contact);

module.exports = router;
