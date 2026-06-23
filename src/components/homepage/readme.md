# src/components/homepage

This folder home page section components for the public landing surface.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_homepage["src/components/homepage"]
    n_src_components_homepage_src_components_homepage_HeroSection_tsx["HeroSection.tsx"]
    n_src_components_homepage_src_components_homepage_HomeFooter_tsx["HomeFooter.tsx"]
    n_src_components_homepage_src_components_homepage_QuickNavCards_tsx["QuickNavCards.tsx"]
    n_src_components_homepage_src_components_homepage_RecentLenses_tsx["RecentLenses.tsx"]
    n_src_components_homepage_src_components_homepage_TrustStrip_tsx["TrustStrip.tsx"]
  end
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_pkg_react_router["pkg:react-router"]
  n_external_src_types["src/types"]
  n_external_src_utils_content["src/utils/content"]
  n_external_src_utils_useMediaQuery_ts["src/utils/useMediaQuery.ts"]
  n_src_components_homepage_src_components_homepage_QuickNavCards_tsx --> |2| n_external_src_utils_catalog
  n_src_components_homepage_src_components_homepage_RecentLenses_tsx --> |2| n_external_src_utils_catalog
  n_src_components_homepage_src_components_homepage_HomeFooter_tsx --> n_external_pkg_react_router
  n_src_components_homepage_src_components_homepage_QuickNavCards_tsx --> n_external_pkg_react_router
  n_src_components_homepage_src_components_homepage_RecentLenses_tsx --> n_external_pkg_react_router
  n_src_components_homepage_src_components_homepage_TrustStrip_tsx --> n_external_pkg_react_router
  n_src_components_homepage_src_components_homepage_HeroSection_tsx --> n_external_src_types
  n_src_components_homepage_src_components_homepage_HomeFooter_tsx --> n_external_src_types
  n_src_components_homepage_src_components_homepage_QuickNavCards_tsx --> n_external_src_types
  n_src_components_homepage_src_components_homepage_RecentLenses_tsx --> n_external_src_types
  n_src_components_homepage_src_components_homepage_TrustStrip_tsx --> n_external_src_types
  n_src_components_homepage_src_components_homepage_TrustStrip_tsx --> n_external_src_utils_content
  n_src_components_homepage_src_components_homepage_HeroSection_tsx --> n_external_src_utils_useMediaQuery_ts
  n_src_components_homepage_src_components_homepage_QuickNavCards_tsx --> n_external_src_utils_useMediaQuery_ts
  n_src_components_homepage_src_components_homepage_TrustStrip_tsx --> n_external_src_utils_useMediaQuery_ts
```

## Directory Overview

- Direct source files: 5
- Direct subfolders: 0
- Main outbound areas: src/types (5), package:react-router (4), src/utils/catalog (4), src/utils/useMediaQuery.ts (3), src/utils/content
- External consumers: src/pages/HomePage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `HeroSection.tsx` | React component module | src/types, src/utils/useMediaQuery.ts | src/pages/HomePage.tsx | default, HeroSection |
| `HomeFooter.tsx` | React component module | package:react-router, src/types | src/pages/HomePage.tsx | default, HomeFooter |
| `QuickNavCards.tsx` | React component module | src/utils/catalog (2), package:react-router, src/types, src/utils/useMediaQuery.ts | src/pages/HomePage.tsx | default, QuickNavCards |
| `RecentLenses.tsx` | React component module | src/utils/catalog (2), package:react-router, src/types | src/pages/HomePage.tsx | default, RecentLenses |
| `TrustStrip.tsx` | React component module | package:react-router, src/types, src/utils/content, src/utils/useMediaQuery.ts | src/pages/HomePage.tsx | default, TrustStrip |

