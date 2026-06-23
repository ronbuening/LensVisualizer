# src/pages/lensIndex

This folder lens library catalog filtering, URL state, grouping, results, and filter-panel UI.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_pages_lensIndex["src/pages/lensIndex"]
    n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts["catalog.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_clusterLinks_ts["clusterLinks.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_groupAnchors_ts["groupAnchors.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx["LensIndexFilterPanel.tsx"]
    n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx["LensIndexResults.tsx"]
    n_src_pages_lensIndex_src_pages_lensIndex_styles_ts["styles.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_types_ts["types.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts["urlState.ts"]
    n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts["useLensIndexFilters.ts"]
  end
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_pkg_react["pkg:react"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_src_generated["src/generated"]
  n_external_src_types["src/types"]
  n_external_src_utils_style["src/utils/style"]
  n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts --> |4| n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> |2| n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx --> n_external_pkg_react
  n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts --> n_external_pkg_react
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_external_pkg_react_router
  n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts --> n_external_src_generated
  n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts --> n_external_src_types
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx --> n_external_src_types
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_external_src_types
  n_src_pages_lensIndex_src_pages_lensIndex_types_ts --> n_external_src_types
  n_src_pages_lensIndex_src_pages_lensIndex_clusterLinks_ts --> n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx --> n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_types_ts --> n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts --> n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts --> n_external_src_utils_catalog
  n_src_pages_lensIndex_src_pages_lensIndex_styles_ts --> n_external_src_utils_style
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts
  n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts --> n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts
  n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts --> n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_clusterLinks_ts
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_groupAnchors_ts
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_styles_ts
  n_src_pages_lensIndex_src_pages_lensIndex_catalog_ts --> n_src_pages_lensIndex_src_pages_lensIndex_types_ts
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexFilterPanel_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_types_ts
  n_src_pages_lensIndex_src_pages_lensIndex_LensIndexResults_tsx --> n_src_pages_lensIndex_src_pages_lensIndex_types_ts
  n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts --> n_src_pages_lensIndex_src_pages_lensIndex_types_ts
  n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts --> n_src_pages_lensIndex_src_pages_lensIndex_types_ts
  n_src_pages_lensIndex_src_pages_lensIndex_useLensIndexFilters_ts --> n_src_pages_lensIndex_src_pages_lensIndex_urlState_ts
```

## Directory Overview

- Direct source files: 9
- Direct subfolders: 0
- Main outbound areas: same folder (12), src/utils/catalog (11), src/types (4), package:react (2), package:react-router, src/generated, src/utils/style
- External consumers: src/components/layout, src/pages/FormatPage.tsx, src/pages/FormatsIndexPage.tsx, src/pages/LensIndexPage.tsx, src/pages/MountPage.tsx, src/pages/MountsIndexPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `catalog.ts` | Catalog helper module | src/utils/catalog (4), same folder, src/types | same folder (3), src/components/layout, src/pages/FormatPage.tsx, src/pages/FormatsIndexPage.tsx, src/pages/LensIndexPage.tsx, +2 more | buildFilterBounds, defaultCustomFilter, buildMakerOptions, buildMountOptions, buildImageFormatOptions, matchesCustomFilter, hasActiveCustomFilters, groupByMaker, +17 more |
| `clusterLinks.ts` | Cluster Links helper module | src/utils/catalog | same folder, src/pages/FormatPage.tsx, src/pages/LensIndexPage.tsx, src/pages/MountPage.tsx | LensLibraryBreadcrumbContext, lensLinkFromLibrary, lensLinkFromMount, lensLinkFromFormat |
| `groupAnchors.ts` | Group Anchors helper module | none | same folder, src/pages/LensIndexPage.tsx | slugifyGroupKey, makerGroupAnchorId, mountGroupAnchorId, formatGroupAnchorId, yearGroupAnchorId, focalSectionAnchorId, focalSubGroupAnchorId |
| `LensIndexFilterPanel.tsx` | Route-level React page | same folder (2), package:react, src/types, src/utils/catalog | src/pages/LensIndexPage.tsx | default, LensIndexFilterPanel |
| `LensIndexResults.tsx` | Route-level React page | same folder (4), src/utils/catalog (2), package:react-router, src/types | src/pages/LensIndexPage.tsx | default, LensIndexResults |
| `styles.ts` | Styles helper module | src/utils/style | same folder, src/pages/LensIndexPage.tsx | H1_STYLE, LENS_LINK_BASE_STYLE, PAGE_BASE_STYLE, SECTION_HEADING_BASE_STYLE |
| `types.ts` | Shared TypeScript types | src/types, src/utils/catalog | same folder (5), src/pages/LensIndexPage.tsx | GroupMode, LensIndexViewMode, CatalogLensEntry, MakerOption, MountOption, ImageFormatOption, MakerGroup, MountGroup, +7 more |
| `urlState.ts` | Url State helper module | same folder (2), src/generated, src/utils/catalog | same folder, src/components/layout, src/pages/LensIndexPage.tsx | LensIndexUrlState, parseLensIndexViewMode, parseLensIndexUrlState, serializeLensIndexUrlState, isSameCustomFilter, isValidLensLibraryReturnPath |
| `useLensIndexFilters.ts` | React hook module | same folder (3), package:react, src/utils/catalog | src/pages/LensIndexPage.tsx | NumericFilterConfig, default, useLensIndexFilters |

