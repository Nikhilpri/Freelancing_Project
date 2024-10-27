// src/components/AddProductForm.js
import React, { useState } from "react";
import api from "../api/api";

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    videoLink: "",
    description: "",
    cost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products/addproduct", productData);
      alert("Product added successfully!");
      setProductData({ image: "", name: "", videoLink: "", description: "", cost: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" name="image" placeholder="Image URL" value={productData.image} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Product Name" value={productData.name} onChange={handleChange} required />
      <input type="text" name="videoLink" placeholder="Video Link" value={productData.videoLink} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={productData.description} onChange={handleChange} required />
      <input type="number" name="cost" placeholder="Cost" value={productData.cost} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
