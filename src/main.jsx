import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Routes from "./Routes"; // Import your Routes component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StrictMode>
);
