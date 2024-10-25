import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-section">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card" onClick={() => navigate('/product')}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
