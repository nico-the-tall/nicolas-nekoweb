import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Privacy } from "@/pages/privacy/Privacy";
import "@/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
);
