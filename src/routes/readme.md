# src/routes

This folder shared route manifest used by browser routing, SSR, prerender, and sitemap coverage.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_routes["src/routes"]
    n_src_routes_src_routes_routeManifest_tsx["routeManifest.tsx"]
  end
  n_external_pkg_react["pkg:react"]
  n_external_src_pages_ArticlePage_tsx["src/pages/ArticlePage.tsx"]
  n_external_src_pages_ArticlesPage_tsx["src/pages/ArticlesPage.tsx"]
  n_external_src_pages_ComparePage_tsx["src/pages/ComparePage.tsx"]
  n_external_src_pages_FormatPage_tsx["src/pages/FormatPage.tsx"]
  n_external_src_pages_FormatsIndexPage_tsx["src/pages/FormatsIndexPage.tsx"]
  n_external_src_pages_HomePage_tsx["src/pages/HomePage.tsx"]
  n_external_src_pages_LensIndexPage_tsx["src/pages/LensIndexPage.tsx"]
  n_external_src_pages_LensPage_tsx["src/pages/LensPage.tsx"]
  n_external_src_pages_MakerPage_tsx["src/pages/MakerPage.tsx"]
  n_external_src_pages_MakersIndexPage_tsx["src/pages/MakersIndexPage.tsx"]
  n_external_src_pages_MountPage_tsx["src/pages/MountPage.tsx"]
  n_external_src_pages_MountsIndexPage_tsx["src/pages/MountsIndexPage.tsx"]
  n_external_src_pages_NotFoundPage_tsx["src/pages/NotFoundPage.tsx"]
  n_external_src_pages_UpdatesPage_tsx["src/pages/UpdatesPage.tsx"]
  n_src_routes_src_routes_routeManifest_tsx --> n_external_pkg_react
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_ArticlePage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_ArticlesPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_ComparePage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_FormatPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_FormatsIndexPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_HomePage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_LensIndexPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_LensPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_MakerPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_MakersIndexPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_MountPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_MountsIndexPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_NotFoundPage_tsx
  n_src_routes_src_routes_routeManifest_tsx --> n_external_src_pages_UpdatesPage_tsx
```

## Directory Overview

- Direct source files: 1
- Direct subfolders: 0
- Main outbound areas: package:react, src/pages/ArticlePage.tsx, src/pages/ArticlesPage.tsx, src/pages/ComparePage.tsx, src/pages/FormatPage.tsx, src/pages/FormatsIndexPage.tsx, src/pages/HomePage.tsx, src/pages/LensIndexPage.tsx, +7 more
- External consumers: src/entry-server.tsx, src/router.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `routeManifest.tsx` | React component module | package:react, src/pages/ArticlePage.tsx, src/pages/ArticlesPage.tsx, src/pages/ComparePage.tsx, src/pages/FormatPage.tsx, +10 more | src/entry-server.tsx, src/router.tsx | RouteManifestEntry, default |

