// controllers/productController.js
const Product = require("../models/Product");

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { image, name, videoLink, description, cost } = req.body;
    const newProduct = new Product({ image, name, videoLink, description, cost });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error: error.message });
  }
};

// Remove a product by ID
exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove product", error: error.message });
  }
};

  exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
};
