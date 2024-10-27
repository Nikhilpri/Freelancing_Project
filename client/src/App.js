// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Router components
import Container from './Container'; // Import the Container component
import RecipeDetails from './RecipeDetails'; // Import the RecipeDetails component
import ProductDetails from './ProductDetails'; // Import the ProductDetails component
import AdminPage from './pages/AdminPage'; // Import the AdminPage component
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} /> {/* Main container route */}
      <Route path="/admin" element={<AdminPage />} /> {/* Admin route */}
      <Route path="/recipe-details/:id" element={<RecipeDetails />} /> {/* Recipe details route */}
      <Route path="/product-details/:id" element={<ProductDetails />} /> {/* Product details route */}
    </Routes>
  );
}

export default App;
