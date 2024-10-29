import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import img1 from '../assets/image 1.png';
import amma from '../assets/amma.png'
import cooker from '../assets/cooker.png'

const Header = () => {
  const navigate = useNavigate(); 
  const handleRedirect = (path) => {
    navigate(path); 
  };

  return (
    <div className="header">
      <div className="header-item" onClick={() => handleRedirect('/recipes')}>
        <img src={img1} alt="Recipes" />
        <h3>Recipes</h3>
      </div>
      <div className="header-item" onClick={() => handleRedirect('/products')}>
        <img src={cooker} alt="Products" />
        <h3>Products</h3>
      </div>
      <div className="header-item" onClick={() => handleRedirect('/works')}>
        <img src={amma} alt="Works" />
        <h3>Works</h3>
      </div>
    </div>
  );
};

export default Header;
