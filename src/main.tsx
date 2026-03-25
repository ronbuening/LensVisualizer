import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import router from "./router.js";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ErrorBoundary>,
);
