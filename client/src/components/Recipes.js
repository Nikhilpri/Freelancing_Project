// src/components/Recipes.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes/allrecipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipes-page">
      <h2 className="recipes-title">Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <div 
            key={index} 
            className="recipe-card" 
            onClick={() => navigate(`/recipe-details/${recipe.id}`)} // Pass recipe ID in URL
          >
            <img 
              src={recipe.image || "https://via.placeholder.com/150"} 
              alt={recipe.name} 
              className="recipe-image"
            />
            <div className="recipe-info">
              <p className="recipe-name">{recipe.name}</p>
              <p className="recipe-description">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
