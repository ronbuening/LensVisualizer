/**
 * Shared route manifest — single source of truth for all app routes.
 *
 * Consumed by both the client-side browser router (`src/router.tsx`) and the
 * SSR static renderer (`src/entry-server.tsx`) so route definitions stay in sync.
 *
 * Each entry pairs a path with a dynamic-import loader instead of an element,
 * so page components become route-level code-split chunks in the client build.
 * The client router resolves loaders lazily per navigation; the SSR entry
 * awaits every loader up front and then renders synchronously.
 */

import type { ComponentType } from "react";

export interface RouteManifestEntry {
  path: string;
  load: () => Promise<{ default: ComponentType }>;
}

const routeManifest: RouteManifestEntry[] = [
  { path: "/", load: () => import("../pages/HomePage.js") },
  { path: "/search", load: () => import("../pages/SearchPage.js") },
  { path: "/lenses", load: () => import("../pages/LensIndexPage.js") },
  { path: "/lens/:slug", load: () => import("../pages/LensPage.js") },
  { path: "/compare/:slugA/:slugB", load: () => import("../pages/ComparePage.js") },
  { path: "/makers", load: () => import("../pages/MakersIndexPage.js") },
  { path: "/makers/:maker", load: () => import("../pages/MakerPage.js") },
  { path: "/authors", load: () => import("../pages/AuthorsIndexPage.js") },
  { path: "/authors/:author", load: () => import("../pages/AuthorPage.js") },
  { path: "/mounts", load: () => import("../pages/MountsIndexPage.js") },
  { path: "/mounts/:mountId", load: () => import("../pages/MountPage.js") },
  { path: "/formats", load: () => import("../pages/FormatsIndexPage.js") },
  { path: "/formats/:formatId", load: () => import("../pages/FormatPage.js") },
  { path: "/articles", load: () => import("../pages/ArticlesPage.js") },
  { path: "/articles/:slug", load: () => import("../pages/ArticlePage.js") },
  { path: "/updates", load: () => import("../pages/UpdatesPage.js") },
  { path: "*", load: () => import("../pages/NotFoundPage.js") },
];

export default routeManifest;
