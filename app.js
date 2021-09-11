const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// here is the cors we can communicate to other port
app.use(cors());

// database connection
const db = require("./db");
db();
// router used
// const userRouter = require("./router/user");
const userRouter = require("./router/user");

const port = process.env.PORT || 4000;
app.use("/api", userRouter);
app.listen(port, () => {
  console.log(`hello from server http://127.0.0.1:${port}`);
});
