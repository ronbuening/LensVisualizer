# src/components/display/overlays

This folder modal overlay content for aspheric comparison and lens group movement.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_display_overlays["src/components/display/overlays"]
    n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx["AsphericComparisonOverlay.tsx"]
    n_src_components_display_overlays_src_components_display_overlays_LensGroupMovementOverlay_tsx["LensGroupMovementOverlay.tsx"]
  end
  n_external_src_components_display["src/components/display"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_hooks["src/components/hooks"]
  n_external_src_optics_asphericComparison_ts["src/optics/asphericComparison.ts"]
  n_external_src_optics_groupMovement_ts["src/optics/groupMovement.ts"]
  n_external_src_optics_internal["src/optics/internal"]
  n_src_components_display_overlays_src_components_display_overlays_LensGroupMovementOverlay_tsx --> |3| n_external_src_components_display
  n_src_components_display_overlays_src_components_display_overlays_LensGroupMovementOverlay_tsx --> |3| n_external_src_types
  n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx --> |2| n_external_pkg_react
  n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx --> |2| n_external_src_types
  n_src_components_display_overlays_src_components_display_overlays_LensGroupMovementOverlay_tsx --> n_external_pkg_react
  n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx --> n_external_src_components_hooks
  n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx --> n_external_src_optics_asphericComparison_ts
  n_src_components_display_overlays_src_components_display_overlays_LensGroupMovementOverlay_tsx --> n_external_src_optics_groupMovement_ts
  n_src_components_display_overlays_src_components_display_overlays_AsphericComparisonOverlay_tsx --> n_external_src_optics_internal
```

## Directory Overview

- Direct source files: 2
- Direct subfolders: 0
- Main outbound areas: src/types (5), package:react (3), src/components/display (3), src/components/hooks, src/optics/asphericComparison.ts, src/optics/groupMovement.ts, src/optics/internal
- External consumers: src/components/layout

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `AsphericComparisonOverlay.tsx` | React component module | package:react (2), src/types (2), src/components/hooks, src/optics/asphericComparison.ts, src/optics/internal | src/components/layout | default, AsphericComparisonOverlay |
| `LensGroupMovementOverlay.tsx` | React component module | src/components/display (3), src/types (3), package:react, src/optics/groupMovement.ts | src/components/layout | default, LensGroupMovementOverlay |

