# src/components/lensBuilder

This folder src/components/lensBuilder source folder.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_components_lensBuilder["src/components/lensBuilder"]
    n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx["BuilderEditor.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_BuilderErrorBoundary_tsx["BuilderErrorBoundary.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx["CommitInput.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_GlassMap_tsx["GlassMap.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_GroupCard_tsx["GroupCard.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx["MaterialPicker.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_OpticalTrain_tsx["OpticalTrain.tsx"]
    n_src_components_lensBuilder_src_components_lensBuilder_trainShared_ts["trainShared.ts"]
  end
  n_external_src_lensBuilder["src/lensBuilder"]
  n_external_src_types["src/types"]
  n_external_pkg_react["pkg:react"]
  n_external_src_components_layout["src/components/layout"]
  n_external_src_optics_glassCatalog_ts["src/optics/glassCatalog.ts"]
  n_external_src_optics_validation_ts["src/optics/validation.ts"]
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_src_utils_style["src/utils/style"]
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> |3| n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> |3| n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> |2| n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_OpticalTrain_tsx --> |2| n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderErrorBoundary_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_GlassMap_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_GroupCard_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_OpticalTrain_tsx --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_trainShared_ts --> n_external_pkg_react
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_external_src_components_layout
  n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx --> n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_GroupCard_tsx --> n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_OpticalTrain_tsx --> n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_trainShared_ts --> n_external_src_lensBuilder
  n_src_components_lensBuilder_src_components_lensBuilder_GlassMap_tsx --> n_external_src_optics_glassCatalog_ts
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_external_src_optics_glassCatalog_ts
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> n_external_src_optics_validation_ts
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderErrorBoundary_tsx --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_GlassMap_tsx --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_GroupCard_tsx --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_trainShared_ts --> n_external_src_types
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> n_external_src_utils_catalog
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> n_external_src_utils_style
  n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx --> n_external_src_utils_style
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_external_src_utils_style
  n_src_components_lensBuilder_src_components_lensBuilder_trainShared_ts --> n_external_src_utils_style
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderEditor_tsx --> n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx
  n_src_components_lensBuilder_src_components_lensBuilder_BuilderErrorBoundary_tsx --> n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx
  n_src_components_lensBuilder_src_components_lensBuilder_GlassMap_tsx --> n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx
  n_src_components_lensBuilder_src_components_lensBuilder_GroupCard_tsx --> n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx
  n_src_components_lensBuilder_src_components_lensBuilder_MaterialPicker_tsx --> n_src_components_lensBuilder_src_components_lensBuilder_CommitInput_tsx
  n_src_components_lensBuilder_truncated["additional relationships omitted"]
```

## Directory Overview

- Direct source files: 8
- Direct subfolders: 0
- Main outbound areas: same folder (13), src/lensBuilder (10), src/types (10), package:react (8), src/utils/style (4), src/optics/glassCatalog.ts (2), src/components/layout, src/optics/validation.ts, +1 more
- External consumers: src/pages/LensBuilderPage.tsx

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `BuilderEditor.tsx` | React component module | src/lensBuilder (3), same folder (2), src/types (2), package:react, src/optics/validation.ts, +2 more | src/pages/LensBuilderPage.tsx | default, BuilderEditor |
| `BuilderErrorBoundary.tsx` | React component module | package:react, same folder, src/types | src/pages/LensBuilderPage.tsx | default, BuilderErrorBoundary |
| `CommitInput.tsx` | React component module | package:react, src/lensBuilder, src/types, src/utils/style | same folder (6), src/pages/LensBuilderPage.tsx | BuilderTouchContext, builderButtonStyle, builderInputStyle, builderCaptionStyle, sectionTitle, default, CommitInput |
| `GlassMap.tsx` | React component module | package:react, same folder, src/optics/glassCatalog.ts, src/types | same folder | default, GlassMap |
| `GroupCard.tsx` | React component module | same folder (3), package:react, src/lensBuilder, src/types | same folder | default, GroupCard |
| `MaterialPicker.tsx` | React component module | same folder (3), src/lensBuilder (3), package:react, src/components/layout, src/optics/glassCatalog.ts, +2 more | same folder | glassLine, default, MaterialPicker |
| `OpticalTrain.tsx` | React component module | same folder (3), src/types (2), package:react, src/lensBuilder | same folder | deriveElementModel, default, OpticalTrain |
| `trainShared.ts` | Train Shared helper module | package:react, src/lensBuilder, src/types, src/utils/style | same folder (3) | SurfaceField, TrainCtx, formatMm, formatCoefficient, formatFocal, sentenceCase, shapeOf, outlinedButton, +3 more |
