import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <div className="Container">
      <Header />
      <Recipes />
      <Products />
    </div>
  );
}

export default App;
