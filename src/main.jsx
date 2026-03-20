import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LensVisualization from "./components/LensViewer.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <LensVisualization />
  </ErrorBoundary>
);
