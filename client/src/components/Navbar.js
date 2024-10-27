import React, { useState } from 'react';
import '../App.css';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import logo_tca from '../assets/logo.jpeg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <img src={logo_tca} alt="Logo" className='logo' />
      
      {/* Search Field for Desktop and Tablet */}
      <span className='desktop-search-container'>
        <input 
          type="text" 
          className="desktop-search-input" 
          placeholder="Search for recipes, products..."
        />
      </span>
<nav className={isMenuOpen ? 'responsive_nav' : ''}>
        <a href='/#'>Home</a>
        <a href='/#'>Recipe</a>
        <a href='/#'>Products</a>
        <a href='/#'>Amazon</a>
        <a href='/#'>Work</a>
        <a href='/#'>About Us</a>
        <button className='shop'>Shop</button>

        <button className='nav-btn close' onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>

      {/* Mobile Search Field Toggle */}
      <button className='search-icon' onClick={toggleSearch}>
        <FaSearch />
      </button>

      {/* Search Field for Mobile */}
      {isSearchOpen && (
        <div className="mobile-search-container">
          <input 
            type="text" 
            className="mobile-search-input" 
            placeholder="Search for recipes, products, or anything..." 
          />
        </div>
      )}

      {/* Hamburger Icon */}
      <button className='nav-btn' onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
