require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
