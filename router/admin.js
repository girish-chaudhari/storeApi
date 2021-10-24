const express = require("express");
const adminController = require("../controller/admin");
// const { auth } = require("../middleware");

const router = express.Router();

router.post("/register", adminController.register);
router.post("/signin", adminController.signin);
// router.post("/signin", (req, res, next) => {
//   res.send({ message: "hello" });
// });

// router.get("/contact_us", auth, userController.contact);

module.exports = router;
