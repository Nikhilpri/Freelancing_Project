// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root for the app

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
