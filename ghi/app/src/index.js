import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadShoes() {
  const shoeResponse = await fetch('http://localhost:8080/api/shoes/');

  if(shoeResponse.ok) {
    const shoeData = await shoeResponse.json();
    root.render(
      <App shoes={shoeData.shoes} />
    );
  }
  else {
    console.log("Error!")
  }
}
loadShoes();
