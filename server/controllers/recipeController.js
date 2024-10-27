// controllers/recipeController.js
const Recipe = require("../models/Recipe");

// Add a new recipe
exports.addRecipe = async (req, res) => {
  try {
    const { image, name } = req.body;
    const newRecipe = new Recipe({ image, name });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to add recipe", error: error.message });
  }
};

// Remove a recipe by ID
exports.removeRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: "Recipe removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove recipe", error: error.message });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const { id } = req.params; // Get ID from request parameters
    const recipe = await Recipe.findById(id); // Find recipe by ID

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" }); // Handle not found case
    }

    res.status(200).json(recipe); // Return the found recipe
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve recipe", error: error.message }); // Handle server error
  }
};

  exports.getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recipes", error: error.message });
    }
};
