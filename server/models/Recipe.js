// models/Recipe.js
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
