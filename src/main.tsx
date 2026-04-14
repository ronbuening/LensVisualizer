import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import router from "./router.js";
import "katex/dist/katex.min.css";

// Track SPA navigations in GoatCounter. The script tag in index.html handles the
// initial page view automatically; this subscription fires only on subsequent
// client-side route changes.
let _gcInitialSkipped = false;
router.subscribe((state) => {
  if (!_gcInitialSkipped) {
    _gcInitialSkipped = true;
    return;
  }
  if (!import.meta.env.PROD || !window.goatcounter?.count) return;
  window.goatcounter.count({ path: state.location.pathname + state.location.search });
});

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ErrorBoundary>,
);
