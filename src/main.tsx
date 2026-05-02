import "./lib/prism-setup";
import "katex/dist/katex.min.css";
import "./styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react";
import { App } from "./app/App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing required element: #root");
}

createRoot(root).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>,
);
