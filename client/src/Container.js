import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import AboutUs from './components/About';

function Container() {
  return (
    <div className="Container">
      <Navbar />
      <Header />
      <Recipes />
      <Products />
      <Carousel/>
      <AboutUs/>
    </div>
  );
}

export default Container;
