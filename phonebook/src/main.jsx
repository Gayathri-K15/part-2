import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component

// Assuming you have an element with id 'root' in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
