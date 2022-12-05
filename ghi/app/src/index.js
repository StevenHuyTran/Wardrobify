import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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

  //     const hatsData = await hatsResponse.json();
  //     console.log(hatsData);

  //     root.render(
  //       <React.StrictMode>
  //         <App hats={hatsData.hats} />
  //       </React.StrictMode>
  //     );
  //   } else {
  //     console.log(hatsResponse);
  //   }
}
loadHats();
