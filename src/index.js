import React from "react";
import ReactDOM from "react-dom/client";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting="Este mensaje de greeting viene de ItemListContainer" />
  </React.StrictMode>
);
