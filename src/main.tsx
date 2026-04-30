import "katex/dist/katex.min.css";
import "./styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { App } from "./app/App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing required element: #root");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <NuqsAdapter>
        <App />
      </NuqsAdapter>
    </BrowserRouter>
  </StrictMode>,
);
