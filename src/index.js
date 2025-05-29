import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create a root element for React 18's concurrent rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component to the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);