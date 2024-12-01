import ReactDOM from "react-dom/client";
import App from './App.tsx'
import "./css/index.css";
import { StrictMode } from "react";

const rootEl = document.getElementById("root");
if(!rootEl) throw new Error("Root not found")

const root = ReactDOM.createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);