const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb://localhost:27017/geer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch(console.error);
