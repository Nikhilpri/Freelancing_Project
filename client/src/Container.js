import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';

function Container() {
  return (
    <div className="Container">
      <Navbar />
      <Header />
      <Recipes />
      <Products />
    </div>
  );
}

export default Container;
