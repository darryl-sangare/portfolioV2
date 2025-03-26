import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Assure-toi que tu as aussi un fichier App.tsx
import './index.css'; // Si tu utilises Tailwind CSS ou du CSS normal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Il faut un div avec id="root" dans public/index.html
);
