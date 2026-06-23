# src/components/display

This folder display-domain UI for inspectors, legends, analysis panels, charts, and overlay helpers.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_display["src/components/display"]
    n_src_components_display_src_components_display_analysis["analysis/"]
    n_src_components_display_src_components_display_overlays["overlays/"]
    n_src_components_display_src_components_display_AbbeDiagram_tsx["AbbeDiagram.tsx"]
    n_src_components_display_src_components_display_AboutButtonRow_tsx["AboutButtonRow.tsx"]
    n_src_components_display_src_components_display_AboutFooter_tsx["AboutFooter.tsx"]
    n_src_components_display_src_components_display_asphericElementUtils_ts["asphericElementUtils.ts"]
    n_src_components_display_src_components_display_DiagramLegend_tsx["DiagramLegend.tsx"]
    n_src_components_display_src_components_display_ElementInspector_tsx["ElementInspector.tsx"]
  end
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_controls["src/components/controls"]
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_external_src_optics_dispersion_ts["src/optics/dispersion.ts"]
  n_external_src_optics_optics_ts["src/optics/optics.ts"]
  n_external_src_utils_featureFlags_ts["src/utils/featureFlags.ts"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_display_src_components_display_DiagramLegend_tsx --> |3| n_external_src_types
  n_src_components_display_src_components_display_AbbeDiagram_tsx --> |2| n_external_src_types
  n_src_components_display_src_components_display_ElementInspector_tsx --> |2| n_external_src_types
  n_src_components_display_src_components_display_DiagramLegend_tsx --> n_external_pkg_react
  n_src_components_display_src_components_display_ElementInspector_tsx --> n_external_pkg_react
  n_src_components_display_src_components_display_DiagramLegend_tsx --> n_external_src_components_controls
  n_src_components_display_src_components_display_ElementInspector_tsx --> n_external_src_optics_chromatic
  n_src_components_display_src_components_display_ElementInspector_tsx --> n_external_src_optics_dispersion_ts
  n_src_components_display_src_components_display_DiagramLegend_tsx --> n_external_src_optics_optics_ts
  n_src_components_display_src_components_display_AboutButtonRow_tsx --> n_external_src_types
  n_src_components_display_src_components_display_AboutFooter_tsx --> n_external_src_types
  n_src_components_display_src_components_display_asphericElementUtils_ts --> n_external_src_types
  n_src_components_display_src_components_display_DiagramLegend_tsx --> n_external_src_utils_featureFlags_ts
  n_src_components_display_src_components_display_AbbeDiagram_tsx --> n_external_src_utils_style
  n_src_components_display_src_components_display_AboutButtonRow_tsx --> n_external_src_utils_style
  n_src_components_display_src_components_display_AboutFooter_tsx --> n_external_src_utils_style
  n_src_components_display_src_components_display_DiagramLegend_tsx --> n_external_src_utils_style
  n_src_components_display_src_components_display_AboutFooter_tsx --> n_src_components_display_src_components_display_AboutButtonRow_tsx
  n_src_components_display_src_components_display_ElementInspector_tsx --> n_src_components_display_src_components_display_asphericElementUtils_ts
```

## Directory Overview

- Direct source files: 6
- Direct subfolders: 2
- Main outbound areas: src/types (10), src/utils/style (4), package:react (2), same folder (2), src/components/controls, src/optics/chromatic, src/optics/dispersion.ts, src/optics/optics.ts, +1 more
- External consumers: src/components/layout

## Subfolders

| Folder | Role |
| --- | --- |
| [analysis/](analysis/readme.md) | analysis drawer tabs, plots, chart utilities, and prepared-state hooks |
| [overlays/](overlays/readme.md) | modal overlay content for aspheric comparison and lens group movement |

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `AbbeDiagram.tsx` | React component module | src/types (2), src/utils/style | src/components/layout | default, AbbeDiagram |
| `AboutButtonRow.tsx` | React component module | src/types, src/utils/style | same folder, src/components/layout | default, AboutButtonRow |
| `AboutFooter.tsx` | React component module | same folder, src/types, src/utils/style | src/components/layout | default, AboutFooter |
| `asphericElementUtils.ts` | Aspheric Element Utils helper module | src/types | same folder, src/components/layout | ElementAsphereEntry, getAsphericEntriesForElement, elementHasAsphericSurface |
| `DiagramLegend.tsx` | React component module | src/types (3), package:react, src/components/controls, src/optics/optics.ts, src/utils/featureFlags.ts, +1 more | src/components/layout | default, DiagramLegend |
| `ElementInspector.tsx` | React component module | src/types (2), package:react, same folder, src/optics/chromatic, src/optics/dispersion.ts | src/components/layout | default, ElementInspector |

