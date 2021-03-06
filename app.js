const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// database connection
const db = require("./db");
db();
const v_Router = require("./router");

const port = process.env.PORT || 4000;
app.use("/api", v_Router);
app.listen(port, () => {
  console.log(`hello from server http://127.0.0.1:${port}`);
});
