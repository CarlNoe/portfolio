import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./index.css";

const domNode: HTMLElement = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
