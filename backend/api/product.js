// backend/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../schema/productSchema.js");

// GET /api/products
router.get("/", async (req, res) => {
  const { search } = req.query;
  const filter = search ? { name: { $regex: search, $options: "i" } } : {};
  const products = await Product.find(filter);
  res.json(products);
});

// POST /api/products
router.post("/", async (req, res) => {
  const { name, price, imageUrl } = req.body;
  const newProduct = new Product({ name, price, imageUrl });
  await newProduct.save();
  res.status(201).json(newProduct);
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
