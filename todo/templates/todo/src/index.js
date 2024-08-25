import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import your main App component
import './index.css';     // Import any global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches your index.html
);
