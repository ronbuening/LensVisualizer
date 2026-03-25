/**
 * Client-side browser router.
 *
 * Route definitions live in `src/routes/routeManifest.tsx` — the shared
 * source of truth used by both the client router and SSR renderer.
 */

import { createBrowserRouter } from "react-router";
import routeManifest from "./routes/routeManifest.js";

const router = createBrowserRouter(routeManifest);

export default router;
