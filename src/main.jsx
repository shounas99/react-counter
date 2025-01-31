import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp value={20} />
  </StrictMode>
);
