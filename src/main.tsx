import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import LensVisualization from "./components/layout/LensViewer.js";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <LensVisualization />
  </ErrorBoundary>,
);
