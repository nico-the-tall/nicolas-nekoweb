import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotFound } from "@/pages/not-found/NotFound";
import "@/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotFound />
  </StrictMode>,
);
