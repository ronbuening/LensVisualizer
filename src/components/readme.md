# src/components

This folder React UI component root for page chrome, controls, SVG diagrams, analysis display, markdown, hooks, mount diagrams, and error boundaries.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components["src/components"]
    n_src_components_src_components_content["content/"]
    n_src_components_src_components_controls["controls/"]
    n_src_components_src_components_diagram["diagram/"]
    n_src_components_src_components_display["display/"]
    n_src_components_src_components_errors["errors/"]
    n_src_components_src_components_homepage["homepage/"]
    n_src_components_src_components_hooks["hooks/"]
    n_src_components_src_components_layout["layout/"]
    n_src_components_src_components_markdown["markdown/"]
    n_src_components_src_components_mount["mount/"]
    n_src_components_src_components_relationshipMap["relationshipMap/"]
    n_src_components_src_components_search["search/"]
    n_src_components_src_components_ClientOnly_tsx["ClientOnly.tsx"]
    n_src_components_src_components_HolidayFavicon_tsx["HolidayFavicon.tsx"]
    n_src_components_src_components_SEOHead_tsx["SEOHead.tsx"]
  end
  n_external_src_utils_seo["src/utils/seo"]
  n_external_pkg_react["pkg:react"]
  n_external_pkg_react_helmet_async["pkg:react-helmet-async"]
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_src_utils_holidays_ts["src/utils/holidays.ts"]
  n_external_src_utils_state["src/utils/state"]
  n_external_src_utils_theme["src/utils/theme"]
  n_src_components_src_components_SEOHead_tsx --> |2| n_external_src_utils_seo
  n_src_components_src_components_ClientOnly_tsx --> n_external_pkg_react
  n_src_components_src_components_HolidayFavicon_tsx --> n_external_pkg_react
  n_src_components_src_components_SEOHead_tsx --> n_external_pkg_react_helmet_async
  n_src_components_src_components_SEOHead_tsx --> n_external_src_utils_catalog
  n_src_components_src_components_HolidayFavicon_tsx --> n_external_src_utils_holidays_ts
  n_src_components_src_components_HolidayFavicon_tsx --> n_external_src_utils_state
  n_src_components_src_components_HolidayFavicon_tsx --> n_external_src_utils_theme
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 12
- Main outbound areas: package:react (2), src/utils/seo (2), package:react-helmet-async, src/utils/catalog, src/utils/holidays.ts, src/utils/state, src/utils/theme
- External consumers: src/main.tsx, src/pages/ArticlePage.tsx, src/pages/ArticlesPage.tsx, src/pages/AuthorPage.tsx, src/pages/AuthorsIndexPage.tsx, src/pages/ComparePage.tsx, src/pages/FormatPage.tsx, src/pages/FormatsIndexPage.tsx, +14 more

## Subfolders

| Folder | Role |
| --- | --- |
| [content/](content/readme.md) | content-listing UI used by article, changelog, sidebar, and archive routes |
| [controls/](controls/readme.md) | shared viewer controls for sliders, toggles, diagram headers, selectors, and tooltips |
| [diagram/](diagram/readme.md) | inline SVG diagram layers and overlays for optical geometry, rays, pupils, MTF, chromatic widgets, and labels |
| [display/](display/readme.md) | display-domain UI for inspectors, legends, analysis panels, charts, and overlay helpers |
| [errors/](errors/readme.md) | page and panel error boundaries plus shared error display UI |
| [homepage/](homepage/readme.md) | home page section components for the public landing surface |
| [hooks/](hooks/readme.md) | viewer computation and interaction hooks for layout, ray tracing, overlays, zoom, and responsive state |
| [layout/](layout/readme.md) | viewer-level layout, page chrome, panels, drawers, top navigation, and overlay shells |
| [markdown/](markdown/readme.md) | shared markdown rendering and heading extraction for articles and lens notes |
| [mount/](mount/readme.md) | React mount-diagram rendering panels backed by the pure mount optics renderer |
| [relationshipMap/](relationshipMap/readme.md) | src/components/relationshipMap source folder |
| [search/](search/readme.md) | src/components/search source folder |

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ClientOnly.tsx` | React component module | package:react | src/pages/ComparePage.tsx, src/pages/LensPage.tsx, src/pages/UniversalRelationshipMapPage.tsx | default, ClientOnly |
| `HolidayFavicon.tsx` | React component module | package:react, src/utils/holidays.ts, src/utils/state, src/utils/theme | src/main.tsx | default, HolidayFavicon |
| `SEOHead.tsx` | React component module | src/utils/seo (2), package:react-helmet-async, src/utils/catalog | src/pages/ArticlePage.tsx, src/pages/ArticlesPage.tsx, src/pages/AuthorPage.tsx, src/pages/AuthorsIndexPage.tsx, src/pages/ComparePage.tsx, +16 more | JsonLdSchema, default, SEOHead |
