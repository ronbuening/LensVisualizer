/**
 * Application route definitions.
 *
 * Path-based routing for SEO-friendly URLs. The home page at / renders the
 * full interactive visualizer; /lens/:slug pre-selects a specific lens.
 */

import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.js";
import LensPage from "./pages/LensPage.js";
import LensIndexPage from "./pages/LensIndexPage.js";
import MakersIndexPage from "./pages/MakersIndexPage.js";
import MakerPage from "./pages/MakerPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/lenses", element: <LensIndexPage /> },
  { path: "/lens/:slug", element: <LensPage /> },
  { path: "/makers", element: <MakersIndexPage /> },
  { path: "/makers/:maker", element: <MakerPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
