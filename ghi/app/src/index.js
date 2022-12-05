import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadShoes() {
  const shoeResponse = await fetch("http://localhost:8080/api/shoes/");

  if (shoeResponse.ok) {
    const data = await shoeResponse.json();
    root.render(
      <React.StrictMode>
        <App shoes={data.shoes} />
      </React.StrictMode>
    );
  } else {
    console.error(shoeResponse);
  }
}
loadShoes();

async function loadHats() {
  const hatsResponse = await fetch("http://localhost:8090/api/hats/");
  // console.log(hatsResponse);

  if (hatsResponse.ok) {
    const data = await hatsResponse.json();
    root.render(
      <React.StrictMode>
        <App hats={data.hats} />
      </React.StrictMode>
    );
  } else {
    console.error(hatsResponse);
  }
}
loadHats();
