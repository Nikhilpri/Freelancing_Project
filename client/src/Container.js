import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';
import Carousel from './components/Carousel';

function Container() {
  return (
    <div className="Container">
      <Navbar />
      <Header />
      <Recipes />
      <Products />
      <Carousel/>
    </div>
  );
}

export default Container;
