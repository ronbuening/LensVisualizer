# src/components/search

This folder src/components/search source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_search["src/components/search"]
    n_src_components_search_src_components_search_CatalogSearchBox_tsx["CatalogSearchBox.tsx"]
    n_src_components_search_src_components_search_CatalogSearchResults_tsx["CatalogSearchResults.tsx"]
  end
  n_external_pkg_react["pkg:react"]
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_src_types["src/types"]
  n_external_src_utils_seo["src/utils/seo"]
  n_src_components_search_src_components_search_CatalogSearchBox_tsx --> |2| n_external_pkg_react
  n_src_components_search_src_components_search_CatalogSearchBox_tsx --> |2| n_external_src_utils_catalog
  n_src_components_search_src_components_search_CatalogSearchResults_tsx --> n_external_pkg_react
  n_src_components_search_src_components_search_CatalogSearchBox_tsx --> n_external_pkg_react_router
  n_src_components_search_src_components_search_CatalogSearchResults_tsx --> n_external_pkg_react_router
  n_src_components_search_src_components_search_CatalogSearchBox_tsx --> n_external_src_types
  n_src_components_search_src_components_search_CatalogSearchResults_tsx --> n_external_src_types
  n_src_components_search_src_components_search_CatalogSearchResults_tsx --> n_external_src_utils_catalog
  n_src_components_search_src_components_search_CatalogSearchBox_tsx --> n_external_src_utils_seo
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: package:react (3), src/utils/catalog (3), package:react-router (2), src/types (2), src/utils/seo
- External consumers: src/pages/HomePage.tsx, src/pages/SearchPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `CatalogSearchBox.tsx` | React component module | package:react (2), src/utils/catalog (2), package:react-router, src/types, src/utils/seo | src/pages/HomePage.tsx, src/pages/SearchPage.tsx | default, CatalogSearchBox |
| `CatalogSearchResults.tsx` | React component module | package:react, package:react-router, src/types, src/utils/catalog | src/pages/SearchPage.tsx | default, CatalogSearchResults |

