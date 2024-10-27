// routes/recipeRoutes.js
const express = require("express");
const router = express.Router();
const { addRecipe, getRecipe,removeRecipe, getAllRecipes } = require("../controllers/recipeController");

router.post("/addrecipe", addRecipe);
router.delete("/removerecipe/:id", removeRecipe);
router.get("api/recipes/:id", getRecipe);
router.get("/allrecipes", getAllRecipes);  // New route to fetch all recipes

module.exports = router;
