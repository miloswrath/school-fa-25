import React from 'react';
import ReactDOM from 'react-dom/client'; // For newer React versions
import App from './App'; // Assuming your main component is in App.jsx
import './index.css'; // Optional: for global styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
