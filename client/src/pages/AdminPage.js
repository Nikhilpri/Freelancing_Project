// src/pages/AdminPage.js
import React from "react";
import AddProductForm from "../components/AddProductForm";
import AddRecipeForm from "../components/AddRecipeForm";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <AddProductForm />
        <AddRecipeForm />
      </div>
    </div>
  );
};

export default AdminPage;
