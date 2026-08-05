# src/components/diagram

This folder inline SVG diagram layers and overlays for optical geometry, rays, pupils, MTF, chromatic widgets, and labels.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_diagram["src/components/diagram"]
    n_src_components_diagram_src_components_diagram_ApertureStop_tsx["ApertureStop.tsx"]
    n_src_components_diagram_src_components_diagram_CardinalElementsOverlay_tsx["CardinalElementsOverlay.tsx"]
    n_src_components_diagram_src_components_diagram_ChromaticFanSpreadWidget_tsx["ChromaticFanSpreadWidget.tsx"]
    n_src_components_diagram_src_components_diagram_ChromaticOverlayContent_tsx["ChromaticOverlayContent.tsx"]
    n_src_components_diagram_src_components_diagram_ChromaticQualityBadge_tsx["ChromaticQualityBadge.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramDefs_tsx["DiagramDefs.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramElementLayer_tsx["DiagramElementLayer.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramGridAxisLayer_tsx["DiagramGridAxisLayer.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramOverlayLayer_tsx["DiagramOverlayLayer.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramRayLayers_tsx["DiagramRayLayers.tsx"]
    n_src_components_diagram_src_components_diagram_DiagramSVG_tsx["DiagramSVG.tsx"]
    n_src_components_diagram_src_components_diagram_diagramSvgTypes_ts["diagramSvgTypes.ts"]
    n_src_components_diagram_src_components_diagram_ElementAnnotations_tsx["ElementAnnotations.tsx"]
    n_src_components_diagram_src_components_diagram_EntrancePupilDiagram_tsx["EntrancePupilDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_ExitPupilDiagram_tsx["ExitPupilDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_LocaDiagram_tsx["LocaDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_LocaInsetWidget_tsx["LocaInsetWidget.tsx"]
    n_src_components_diagram_src_components_diagram_MTFDiagram_tsx["MTFDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_PetzvalOverlayContent_tsx["PetzvalOverlayContent.tsx"]
    n_src_components_diagram_src_components_diagram_PetzvalSumBadge_tsx["PetzvalSumBadge.tsx"]
    n_src_components_diagram_src_components_diagram_PVDiagram_tsx["PVDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_RayPolylines_tsx["RayPolylines.tsx"]
    n_src_components_diagram_src_components_diagram_TelecentricityDiagram_tsx["TelecentricityDiagram.tsx"]
    n_src_components_diagram_src_components_diagram_WorkingFNumberDiagram_tsx["WorkingFNumberDiagram.tsx"]
  end
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_display["src/components/display"]
  n_src_components_diagram_src_components_diagram_DiagramRayLayers_tsx --> |3| n_external_src_types
  n_src_components_diagram_src_components_diagram_DiagramSVG_tsx --> |3| n_external_src_types
  n_src_components_diagram_src_components_diagram_ChromaticOverlayContent_tsx --> |2| n_external_pkg_react
  n_src_components_diagram_src_components_diagram_CardinalElementsOverlay_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_ChromaticFanSpreadWidget_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_ChromaticOverlayContent_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_DiagramElementLayer_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_DiagramGridAxisLayer_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_DiagramOverlayLayer_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_ElementAnnotations_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_LocaInsetWidget_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_PetzvalOverlayContent_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_PetzvalSumBadge_tsx --> |2| n_external_src_types
  n_src_components_diagram_src_components_diagram_ApertureStop_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_CardinalElementsOverlay_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_ChromaticFanSpreadWidget_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramDefs_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramElementLayer_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramGridAxisLayer_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramOverlayLayer_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramRayLayers_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_DiagramSVG_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_ElementAnnotations_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_EntrancePupilDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_ExitPupilDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_LocaDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_LocaInsetWidget_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_MTFDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_PetzvalOverlayContent_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_PetzvalSumBadge_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_PVDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_RayPolylines_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_TelecentricityDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_WorkingFNumberDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_src_components_diagram_ChromaticFanSpreadWidget_tsx --> n_external_src_components_display
  n_src_components_diagram_src_components_diagram_ChromaticOverlayContent_tsx --> n_external_src_components_display
  n_src_components_diagram_truncated["additional relationships omitted"]
```

## Directory Overview

- Direct source files: 24
- Direct subfolders: 0
- Main outbound areas: src/types (30), package:react (23), same folder (18), src/optics/dispersion.ts (6), src/optics/cardinalElements.ts (3), src/optics/optics.ts (3), src/components/display (2), src/optics/chromaticRayFanScaling.ts (2), +4 more
- External consumers: src/benchmarks, src/components/layout, src/components/markdown

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ApertureStop.tsx` | React component module | package:react, src/types | same folder | default |
| `CardinalElementsOverlay.tsx` | React component module | src/types (2), package:react, src/optics/cardinalElements.ts | same folder | default |
| `ChromaticFanSpreadWidget.tsx` | React component module | src/types (2), package:react, same folder, src/components/display, src/optics/chromaticRayFanScaling.ts, +1 more | same folder | default |
| `ChromaticOverlayContent.tsx` | React component module | package:react (2), same folder (2), src/types (2), src/components/display, src/optics/chromatic, +1 more | src/components/layout | default |
| `ChromaticQualityBadge.tsx` | React component module | src/optics/dispersion.ts, src/types | same folder (2) | CHROMATIC_QUALITY_BADGE_LABEL, chromaticQualityBadgeLabel, ChromaticQualityBadge |
| `DiagramDefs.tsx` | React component module | package:react, src/types, src/utils/featureFlags.ts | same folder | default |
| `DiagramElementLayer.tsx` | React component module | src/types (2), package:react, src/utils/featureFlags.ts | same folder | default |
| `DiagramGridAxisLayer.tsx` | React component module | src/types (2), package:react | same folder | default |
| `DiagramOverlayLayer.tsx` | React component module | same folder (5), src/types (2), package:react, src/optics/cardinalElements.ts, src/optics/dispersion.ts, +2 more | same folder | default |
| `DiagramRayLayers.tsx` | React component module | src/types (3), same folder (2), package:react | same folder | default |
| `DiagramSVG.tsx` | React component module | same folder (6), src/types (3), package:react, src/optics/cardinalElements.ts, src/optics/dispersion.ts, +2 more | src/benchmarks, src/components/layout | default |
| `diagramSvgTypes.ts` | Diagram Svg Types helper module | src/types | same folder (3) | RaySegment, ChromaticRaySegment |
| `ElementAnnotations.tsx` | React component module | src/types (2), package:react | same folder | default |
| `EntrancePupilDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `ExitPupilDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `LocaDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `LocaInsetWidget.tsx` | React component module | src/types (2), package:react, same folder, src/optics/chromaticRayFanScaling.ts, src/optics/dispersion.ts | same folder (2) | default |
| `MTFDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `PetzvalOverlayContent.tsx` | React component module | src/types (2), package:react, src/optics/optics.ts | src/components/layout | default |
| `PetzvalSumBadge.tsx` | React component module | src/types (2), package:react, src/optics/optics.ts | same folder | default |
| `PVDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `RayPolylines.tsx` | React component module | package:react, same folder | same folder | default |
| `TelecentricityDiagram.tsx` | React component module | package:react | src/components/markdown | default |
| `WorkingFNumberDiagram.tsx` | React component module | package:react | src/components/markdown | default |
