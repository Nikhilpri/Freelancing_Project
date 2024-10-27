// src/components/AddRecipeForm.js
import React, { useState } from "react";
import api from "../api/api";

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    image: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/recipes/addrecipe", recipeData);
      alert("Recipe added successfully!");
      setRecipeData({ image: "", name: "" });
    } catch (error) {
      console.error("Failed to add recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input type="text" name="image" placeholder="Image URL" value={recipeData.image} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Recipe Name" value={recipeData.name} onChange={handleChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
