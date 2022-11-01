const express = require("express");
const Product = require("../models/products");
const router = new express.Router();

router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send({ product });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(500).send;
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    });

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
