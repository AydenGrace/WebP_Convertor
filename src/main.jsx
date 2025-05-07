import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ConvertedProvider from "./components/providers/ConvertedProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ConvertedProvider>
    <App />
  </ConvertedProvider>
  // </StrictMode>
);
