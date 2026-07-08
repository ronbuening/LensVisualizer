/**
 * Client-side browser router.
 *
 * Route definitions live in `src/routes/routeManifest.tsx` — the shared
 * source of truth used by both the client router and SSR renderer.
 *
 * Pages load through React Router's `lazy` route option: the router awaits
 * the code-split page chunk before committing a navigation (the current page
 * stays visible meanwhile), so no Suspense fallback ever flashes. Chunk
 * fetches go through the reload-once guard to recover from stale prerendered
 * HTML referencing old hashed assets after a deploy.
 */

import { createBrowserRouter } from "react-router";
import routeManifest from "./routes/routeManifest.js";
import { loadChunkWithReload } from "./utils/chunkLoadRetry.js";

const router = createBrowserRouter(
  routeManifest.map(({ path, load }) => ({
    path,
    lazy: async () => ({ Component: (await loadChunkWithReload(load)).default }),
  })),
);

export default router;
