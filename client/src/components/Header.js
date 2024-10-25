import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const Header = () => {
  const navigate = useNavigate(); 
  const handleRedirect = (path) => {
    navigate(path); 
  };

  return (
    <div className="header">
      <div className="header-item" onClick={() => handleRedirect('/recipes')}>
        <img src="https://picsum.photos/100" alt="Recipes" />
        <h3>Recipes</h3>
      </div>
      <div className="header-item" onClick={() => handleRedirect('/products')}>
        <img src="https://picsum.photos/100" alt="Products" />
        <h3>Products</h3>
      </div>
      <div className="header-item" onClick={() => handleRedirect('/works')}>
        <img src="https://picsum.photos/100" alt="Works" />
        <h3>Works</h3>
      </div>
    </div>
  );
};

export default Header;
