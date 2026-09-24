import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = <App router={(children) => <BrowserRouter>{children}</BrowserRouter>} />;

// Hydrate only when the pre-rendered HTML was built for this exact path.
const prerendered = container.dataset.prerendered;
const path = window.location.pathname.replace(/\/+$/, "") || "/";
if (container.hasChildNodes() && prerendered === path) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  createRoot(container).render(app);
}
