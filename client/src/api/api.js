// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update if your backend runs on a different port or base URL
});

export default api;
