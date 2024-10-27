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
    <div className="recipes-section">
      <h2>Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card" onClick={() => navigate(`/recipe-details`)}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
