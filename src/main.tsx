import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index } from "@/pages/index/Index";
import "@/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
