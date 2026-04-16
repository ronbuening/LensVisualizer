/**
 * Shared route manifest — single source of truth for all app routes.
 *
 * Consumed by both the client-side browser router (`src/router.tsx`) and the
 * SSR static renderer (`src/entry-server.tsx`) so route definitions stay in sync.
 */

import type { ReactNode } from "react";
import HomePage from "../pages/HomePage.js";
import LensPage from "../pages/LensPage.js";
import LensIndexPage from "../pages/LensIndexPage.js";
import MakersIndexPage from "../pages/MakersIndexPage.js";
import MakerPage from "../pages/MakerPage.js";
import ComparePage from "../pages/ComparePage.js";
import ArticlesPage from "../pages/ArticlesPage.js";
import ArticlePage from "../pages/ArticlePage.js";
import UpdatesPage from "../pages/UpdatesPage.js";
import NotFoundPage from "../pages/NotFoundPage.js";

export interface RouteManifestEntry {
  path: string;
  element: ReactNode;
}

const routeManifest: RouteManifestEntry[] = [
  { path: "/", element: <HomePage /> },
  { path: "/lenses", element: <LensIndexPage /> },
  { path: "/lens/:slug", element: <LensPage /> },
  { path: "/compare/:slugA/:slugB", element: <ComparePage /> },
  { path: "/makers", element: <MakersIndexPage /> },
  { path: "/makers/:maker", element: <MakerPage /> },
  { path: "/articles", element: <ArticlesPage /> },
  { path: "/articles/:slug", element: <ArticlePage /> },
  { path: "/updates", element: <UpdatesPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routeManifest;
