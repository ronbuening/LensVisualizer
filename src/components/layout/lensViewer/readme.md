# src/components/layout/lensViewer

This folder LensViewer chrome, content routing, and overlay composition.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_layout_lensViewer["src/components/layout/lensViewer"]
    n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx["ViewerChrome.tsx"]
    n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerContent_tsx["ViewerContent.tsx"]
    n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerOverlays_tsx["ViewerOverlays.tsx"]
  end
  n_external_src_components_layout["src/components/layout"]
  n_external_src_comparison["src/comparison"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_controls["src/components/controls"]
  n_external_src_components_display["src/components/display"]
  n_external_src_utils_featureFlags_ts["src/utils/featureFlags.ts"]
  n_external_src_utils_state["src/utils/state"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> |4| n_external_src_components_layout
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerContent_tsx --> |3| n_external_src_comparison
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerOverlays_tsx --> |3| n_external_src_components_layout
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> |2| n_external_src_types
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerContent_tsx --> |2| n_external_src_types
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> n_external_pkg_react
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerContent_tsx --> n_external_pkg_react
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> n_external_src_components_controls
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerOverlays_tsx --> n_external_src_components_display
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerContent_tsx --> n_external_src_components_layout
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerOverlays_tsx --> n_external_src_types
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> n_external_src_utils_featureFlags_ts
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> n_external_src_utils_state
  n_src_components_layout_lensViewer_src_components_layout_lensViewer_ViewerChrome_tsx --> n_external_src_utils_style
```

## Directory Overview

- Direct source files: 3
- Direct subfolders: 0
- Main outbound areas: src/components/layout (8), src/types (5), src/comparison (3), package:react (2), src/components/controls, src/components/display, src/utils/featureFlags.ts, src/utils/state, +1 more
- External consumers: src/components/layout

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ViewerChrome.tsx` | React component module | src/components/layout (4), src/types (2), package:react, src/components/controls, src/utils/featureFlags.ts, +2 more | src/components/layout | default, ViewerChrome |
| `ViewerContent.tsx` | React component module | src/comparison (3), src/types (2), package:react, src/components/layout | src/components/layout | default, ViewerContent |
| `ViewerOverlays.tsx` | React component module | src/components/layout (3), src/components/display, src/types | src/components/layout | default, ViewerOverlays |

