import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Products from './components/Products';
import './App.css';
import Carousel from './components/Carousel';

function Container() {
  return (
    <div className="Container">
      <Header />
      <Recipes />
      <Products />
      <Carousel/>
    </div>
  );
}

export default Container;
