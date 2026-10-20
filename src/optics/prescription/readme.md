# src/optics/prescription

This folder canonical prescription ingest, compilation, composition, identity ownership, and control helpers.

Generated `readme.md` and `improvementsuggestions.md` files are intentionally omitted from the per-file inventory so this document stays focused on source relationships.

## Relationship Diagram

```mermaid
flowchart LR
  subgraph n_src_optics_prescription["src/optics/prescription"]
    n_src_optics_prescription_src_optics_prescription_v1["v1/"]
    n_src_optics_prescription_src_optics_prescription_validate["validate/"]
    n_src_optics_prescription_TypeScript_modules["TypeScript modules (24)"]
  end
  n_external_src_types["src/types"]
  n_external_src_optics_types_ts["src/optics/types.ts"]
  n_external_src_optics_geometry["src/optics/geometry"]
  n_external_src_optics_math["src/optics/math"]
  n_external_src_utils_catalog["src/utils/catalog"]
  n_external_src_optics_state["src/optics/state"]
  n_external_src_optics_chromatic["src/optics/chromatic"]
  n_external_src_optics_field["src/optics/field"]
  n_external_src_optics_first_order["src/optics/first-order"]
  n_src_optics_prescription_TypeScript_modules --> |34| n_external_src_types
  n_src_optics_prescription_TypeScript_modules --> |9| n_external_src_optics_types_ts
  n_src_optics_prescription_TypeScript_modules --> |3| n_external_src_optics_geometry
  n_src_optics_prescription_TypeScript_modules --> |3| n_external_src_optics_math
  n_src_optics_prescription_TypeScript_modules --> |3| n_external_src_utils_catalog
  n_src_optics_prescription_TypeScript_modules --> |2| n_external_src_optics_state
  n_src_optics_prescription_TypeScript_modules --> n_external_src_optics_chromatic
  n_src_optics_prescription_TypeScript_modules --> n_external_src_optics_field
  n_src_optics_prescription_TypeScript_modules --> n_external_src_optics_first_order
  n_src_optics_prescription_TypeScript_modules --> n_src_optics_prescription_src_optics_prescription_validate
```

## Directory Overview

- Direct source files: 24
- Direct subfolders: 2
- Main outbound areas: same folder (65), src/types (34), src/optics/types.ts (9), src/optics/geometry (3), src/optics/math (3), src/utils/catalog (3), src/optics/state (2), src/optics/chromatic, +2 more
- External consumers: src/optics/analysis, src/optics/buildLens.ts, src/optics/chromatic, src/optics/diagram, src/optics/first-order, src/optics/lensDataConversion.ts, src/optics/perspective, src/optics/prescription, +4 more

## Subfolders

| Folder | Role |
| --- | --- |
| [v1/](v1/readme.md) | converter-only V1 ingest, printers, and source-path mapping |
| [validate/](validate/readme.md) | authored shape, canonical facts, diagnostic paths, and compiled geometry validation |

## Files

| File | Role | Imports from | Imported by | Exports |
| --- | --- | --- | --- | --- |
| `buildRuntimeLens.ts` | Build Runtime Lens helper module | same folder (3), src/types (2) | src/optics/buildLens.ts | buildLens, buildCanonicalLens |
| `canonical.ts` | Canonical helper module | src/types (2), same folder, src/utils/catalog | same folder (20), src/optics/buildLens.ts, src/optics/first-order, src/optics/lensDataConversion.ts, src/optics/state, +1 more | FLAT_RADIUS, CanonicalRadius, CanonicalAsphere, CanonicalMediumRef, CanonicalMedium, CanonicalSurface, CanonicalElement, CanonicalRearPlate, +30 more |
| `canonicalInput.ts` | Canonical Input helper module | same folder (3), src/types (2) | same folder (2), src/optics/buildLens.ts | assertValidLensData, canonicalInput |
| `compile.ts` | Compile helper module | same folder (6), src/optics/types.ts, src/types | same folder, src/optics/buildLens.ts, src/optics/state | compiledLensFromRuntime, compileLens, compileLensData |
| `compileAspheres.ts` | Compile Aspheres helper module | same folder, src/types | same folder (3) | compileAspheres, buildAsphereIndex |
| `compileCanonical.ts` | Compile Canonical helper module | same folder (5), src/optics/first-order, src/optics/types.ts, src/types | same folder | compileCanonicalUncached, compilePrescription, completeCompilation |
| `compileConstruction.ts` | Compile Construction helper module | same folder (6), src/types (2), src/optics/chromatic, src/optics/types.ts | same folder | compileConstruction, LensConstruction |
| `compileControls.ts` | Compile Controls helper module | same folder, src/types | same folder (3) | compileVariableGaps, compileVariableLabels, buildVarIndex, firstInfinityThickness |
| `compileGroups.ts` | Compile Groups helper module | same folder, src/optics/types.ts, src/types | same folder | compileElements, compileAnnotations |
| `compileLabels.ts` | Compile Labels helper module | src/types | same folder (6) | LensNormalizationError, buildSurfaceLabelMap, resolveLabel, buildLabelIndex |
| `composeTeleconverter.ts` | Compose Teleconverter helper module | same folder (2), src/types (2) | same folder | composeTeleconverter |
| `constructionData.ts` | Construction Data helper module | src/types (2), same folder, src/optics/types.ts | same folder (4) | elementDisplayData, canonicalConstructionData |
| `defaults.ts` | Defaults helper module | src/optics/geometry, src/types | same folder (5) | SchemaDefault, LENS_SCHEMA_DEFAULTS, ELEMENT_SCHEMA_DEFAULTS, REAR_PLATE_SCHEMA_DEFAULTS, takesDefault, defaultValue, v1CatalogDefaults |
| `identity.ts` | Identity helper module | same folder, src/optics/types.ts, src/types | same folder (7), src/optics/analysis (3), src/optics/chromatic (2), src/optics/state (2), src/optics/buildLens.ts, +3 more | associateCanonical, canonicalForView, associateRuntime, compiledLensFromRuntime, canonicalLensFromRuntime |
| `ingestCommon.ts` | Ingest Common helper module | same folder (5), src/types (2) | same folder (2) | Untyped, IngestContext, sourcePathsFor, recordReads, copy, has, put, isNumberList, +8 more |
| `ingestV2.ts` | Ingest V2 helper module | same folder (8), src/optics/geometry, src/types | same folder (4), src/optics/buildLens.ts, src/optics/lensDataConversion.ts | LENS_DATA_V2_SCHEMA, ingestLensV2, ingestTeleconverterV2, isV1File, lensDataVersion, ingestLens, ingestTeleconverter |
| `interactions.ts` | Interactions helper module | src/optics/math, src/optics/types.ts, src/types | same folder (3), src/optics/first-order | yzNormalToVec3, compileSurfaceInteraction, resolvedImagePlaneToPlane3, imagePlaneDataToPlane3 |
| `rearPlates.ts` | Rear Plates helper module | same folder (4), src/types, src/utils/catalog | same folder (4) | REAR_PLATE_LABEL_PATTERN, rearPlateSurfaceLabels, rearPlateAirEquivalentMm, ExpandedCanonicalLens, expandCanonicalRearPlates, expandedConstruction, lastLensSurfaceIndex |
| `runtimeView.ts` | Runtime View helper module | same folder, src/optics/types.ts, src/types | src/optics/analysis (20), same folder, src/optics/first-order, src/optics/perspective | associateRuntimeView, runtimeView |
| `sourcePaths.ts` | Source Paths helper module | none | same folder (6), src/optics/lensDataConversion.ts | memberPath, itemPath, labelPath, childPath, parentPath, pathBelow, extendPath, inverse, +1 more |
| `surfaces.ts` | Surfaces helper module | same folder, src/optics/geometry, src/optics/math, src/optics/types.ts, src/types | same folder (2), src/optics/first-order | compileSurfaces |
| `teleconverter.ts` | Teleconverter helper module | same folder (11), src/types (3), src/optics/state (2), src/optics/field, src/optics/math, +1 more | same folder, src/optics/teleconverter.ts | teleconverterCompatibility, TeleconverterAttachError, teleconverterSurfaceLabel, teleconverterGroupLabel, mergeTeleconverterPrescription, attachTeleconverter |
| `teleconverterCompatibility.ts` | Teleconverter Compatibility helper module | src/types (2), same folder | same folder (6), src/optics/teleconverter.ts | TELECONVERTER_LABEL_PREFIX, MIN_TELECONVERTER_GAP_MM, TeleconverterHost, rearPlateAirEquivalentMm, teleconverterGeometry, teleconverterCompatibility |
| `toLensDataV2.ts` | To Lens Data V2 helper module | same folder (3), src/types (2) | same folder, src/optics/lensDataConversion.ts | V2Writes, v2Writes, V2_GROUP_STARTS, V2_ROW_LISTS, toLensDataV2Input, toTeleconverterDataV2Input, DroppedStopRadius, DroppedValue, +3 more |
