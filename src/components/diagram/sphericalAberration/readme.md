# src/components/diagram/sphericalAberration

This folder src/components/diagram/sphericalAberration source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_diagram_sphericalAberration["src/components/diagram/sphericalAberration"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ApertureSweepDiagram_tsx["ApertureSweepDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CausticDiagram_tsx["CausticDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CoreHaloDiagram_tsx["CoreHaloDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_DesignGoalsDiagram_tsx["DesignGoalsDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_FrontRearDefocusDiagram_tsx["FrontRearDefocusDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_LensBendingDiagram_tsx["LensBendingDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts["saDiagramShared.ts"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_SpherochromatismDiagram_tsx["SpherochromatismDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ThreeDescriptionsDiagram_tsx["ThreeDescriptionsDiagram.tsx"]
    n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ZonalCurvesDiagram_tsx["ZonalCurvesDiagram.tsx"]
  end
  n_external_pkg_react["pkg:react"]
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ApertureSweepDiagram_tsx --> |2| n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ApertureSweepDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CausticDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CoreHaloDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_DesignGoalsDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_FrontRearDefocusDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_LensBendingDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_SpherochromatismDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ThreeDescriptionsDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ZonalCurvesDiagram_tsx --> n_external_pkg_react
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CausticDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_CoreHaloDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_DesignGoalsDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_FrontRearDefocusDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_LensBendingDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_SpherochromatismDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ThreeDescriptionsDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
  n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_ZonalCurvesDiagram_tsx --> n_src_components_diagram_sphericalAberration_src_components_diagram_sphericalAberration_saDiagramShared_ts
```

## Directory Overview

- Direct source files: 10
- Direct subfolders: 0
- Main outbound areas: src/components/diagram (10), package:react (9)
- External consumers: src/components/markdown

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `ApertureSweepDiagram.tsx` | React component module | src/components/diagram (2), package:react | src/components/markdown | default |
| `CausticDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `CoreHaloDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `DesignGoalsDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `FrontRearDefocusDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `LensBendingDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `saDiagramShared.ts` | Sa Diagram Shared helper module | none | src/components/diagram (9) | SaColors, SA_DARK, SA_LIGHT, SA_FONT, saColors, saCurvePath |
| `SpherochromatismDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `ThreeDescriptionsDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
| `ZonalCurvesDiagram.tsx` | React component module | package:react, src/components/diagram | src/components/markdown | default |
