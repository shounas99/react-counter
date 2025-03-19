import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <FirstApp title="Hi! I'm Cris"/> */}
    <CounterApp value={20} />
  </StrictMode>
);
