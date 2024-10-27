// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
const cors = require('cors');

// Middleware
app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
