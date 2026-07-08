import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/errors/ErrorBoundary.js";
import HolidayFavicon from "./components/HolidayFavicon.js";
import router from "./router.js";
import { installGlobalErrorBeacons } from "./utils/errorBeacon.js";

// Track SPA navigations in GoatCounter. The script tag in index.html handles the
// initial page view automatically; count only when the pathname actually changes
// between router emissions, since lazy-route initialization and mount both emit
// state updates for the initial path. Only the pathname is sent — the query
// string holds shareable slider/comparison state that does not belong in analytics.
let _gcLastPath: string | null = null;
router.subscribe((state) => {
  const path = state.location.pathname;
  if (_gcLastPath === null) {
    _gcLastPath = path;
    return;
  }
  if (path === _gcLastPath) return;
  _gcLastPath = path;
  if (!import.meta.env.PROD || !window.goatcounter?.count) return;
  window.goatcounter.count({ path });
});

// Beacon uncaught errors and unhandled rejections to GoatCounter (production only).
installGlobalErrorBeacons();

/* Pages are route-level code-split chunks, so the router initializes
 * asynchronously while it fetches the chunk for the current URL. Delay the
 * first React commit until then: the prerendered HTML in #root stays visible
 * instead of being replaced by an empty router shell. */
function mountApp() {
  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <HelmetProvider>
        <HolidayFavicon />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ErrorBoundary>,
  );
}

if (router.state.initialized) {
  mountApp();
} else {
  const unsubscribe = router.subscribe((state) => {
    if (state.initialized) {
      unsubscribe();
      mountApp();
    }
  });
}
