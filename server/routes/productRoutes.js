// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { addProduct, removeProduct, getAllProducts } = require("../controllers/productController");

router.post("/addproduct", addProduct);
router.delete("/removeproduct/:id", removeProduct);
router.get("/allproducts", getAllProducts);  // New route to fetch all products

module.exports = router;
