import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary.js";
import LensVisualization from "./components/LensViewer.js";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <LensVisualization />
  </ErrorBoundary>,
);
