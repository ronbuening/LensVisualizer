import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary.jsx";
import LensVisualization from "./LensViewer-v5.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <LensVisualization />
  </ErrorBoundary>
);
